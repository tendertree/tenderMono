import React, { useMemo, useRef } from 'react'
import Background from './Background'
import { Box, Float, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { Rocket } from '@src/models/Rocket';
import { StarField } from '@src/models/Star';
import * as THREE from "three"

export default function ObjectMoveByCurveLine() {
    const LINE_NB_POINTS = 2000;
    const LINE_THICKNESS = 0.05;
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -10),
            new THREE.Vector3(10, 0, -10),
            new THREE.Vector3(10, 0, 0),
            new THREE.Vector3(0, 0, 0),
        ],
            false,
            "catmullrom",
            0.5);
    }, []);

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS);
    }, [curve]);

    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, -LINE_THICKNESS / 2);
        shape.lineTo(0, LINE_THICKNESS / 2);
        return shape;
    }, []);

    const cameraGroup = useRef<THREE.Group>(null);
    const rocketRef = useRef<THREE.Group>(null);
    const scroll = useScroll();
    /*
    *  follow curve line
    */
    useFrame((state, delta) => {

        if (cameraGroup.current && rocketRef.current && linePoints.length > 0) {
            const curPointIndex = Math.min(
                Math.round(scroll.offset * linePoints.length),
                linePoints.length - 1
            );
            const curPoint = linePoints[curPointIndex];
            if (!curPoint) { return; }
            cameraGroup.current.position.lerp(curPoint, delta * 24);

            const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

            const xDisplacement = (pointAhead!.x - curPoint.x) * 80;
            const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI / 3);

            const targetRocketQuaternion = new THREE.Quaternion().setFromEuler(
                new THREE.Euler(
                    rocketRef.current.rotation.x,
                    rocketRef.current.rotation.y,
                    angleRotation
                )
            );
            rocketRef.current.quaternion.slerp(targetRocketQuaternion, delta * 2);
            cameraGroup.current.position.lerp(curPoint, delta * 24);
        }
    });

    return (
        <>
            <OrbitControls enableZoom={false} />
            <group ref={cameraGroup}>

                <PerspectiveCamera
                    position={[0, 0, 5]}
                    fov={30} makeDefault />
                <group ref={rocketRef}>
                    <Float floatIntensity={2} speed={2}>
                        <Box position={[0, 0, 0]}
                            args={[1, 1, 1]}
                            scale={[0.1, 0.1, 0.1]}>
                            <meshStandardMaterial color="hotpink" />
                        </Box>
                        <Rocket
                            position={[0, 0, -5]}
                            rotation-y={Math.PI / 2}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Float>
                </group>
            </group>
            <Background />
            <group position-y={1}>
                <mesh>
                    <extrudeGeometry
                        args={[
                            shape, {
                                steps: LINE_NB_POINTS,
                                bevelEnabled: false,
                                extrudePath: curve,
                            }
                        ]} />
                    <meshStandardMaterial color={"white"} opacity={1} side={THREE.DoubleSide} transparent />
                </mesh>
            </group>
            <StarField areaSize={10} count={30} />
        </>
    )
}
