"use client"
import React, { useRef, useEffect, useState } from 'react'
import { useThree, useFrame, Camera } from '@react-three/fiber'
import { Box, CameraControls, OrbitControls, CameraShake, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three'


type CameraShakeImpl = {
    getIntensity: () => number;
    setIntensity: (intensity: number) => void;
};

export function WobbleCamera() {
    const shakeRef = useRef<CameraShakeImpl>(null);
    const orbitRef = useRef<OrbitControlsImpl>(null);
    const timeRef = useRef(0);

    useFrame((state, delta) => {
        timeRef.current += delta;

        // Directly manipulate the camera instead of using setIntensity
        const camera = state.camera;
        const t = timeRef.current;

        // Apply a subtle, continuous shake
        camera.position.x += Math.sin(t * 10) * 0.001;
        camera.position.y += Math.sin(t * 15) * 0.001;
        camera.position.z += Math.sin(t * 20) * 0.001;

        camera.rotation.x += Math.sin(t * 5) * 0.0002;
        camera.rotation.y += Math.sin(t * 7) * 0.0002;
        camera.rotation.z += Math.sin(t * 9) * 0.0002;

        // Ensure the camera is updated
        camera.updateProjectionMatrix();
    });
    return (
        <>
            <OrbitControls ref={orbitRef} />
            <CameraShake ref={shakeRef}
                maxYaw={0.01}
                maxPitch={0.01}
                maxRoll={0.01}
                yawFrequency={0.5}
                pitchFrequency={0.5}
                rollFrequency={0.5}
            />
        </>
    );
}

export function WithMouseControl() {

    return (
        <>
            <PerspectiveCamera makeDefault zoom={1} position={[0, 0, 5]} />
            <OrbitControls
                enableRotate={true} // 회전 기능을 일단 비활성화
                mouseButtons={{
                    LEFT: THREE.MOUSE.PAN, // 왼쪽 버튼은 패닝으로 설정
                    RIGHT: THREE.MOUSE.ROTATE, // 오른쪽 버튼은 회전으로 설정
                }}
            />
        </>
    )
}
export function FollowMouse() {
    const cameraRef = useRef(null);
    const [mousePosition, setMousePosition] = useState(new THREE.Vector3(0, 0, 0));
    const [smoothedPosition, setSmoothedPosition] = useState(new THREE.Vector3(0, 0, 0));

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const aspect = window.innerWidth / window.innerHeight;
            const x = (clientX / window.innerWidth) * 2 - 1;
            const y = -(clientY / window.innerHeight) * 2 + 1;
            const z = 1;
            if (cameraRef.current != null) {
                const newMousePosition = new THREE.Vector3(x, y, z).unproject(cameraRef.current);
                setMousePosition(newMousePosition);
            }
            console.log("position updated");

        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame((state) => {
        const smoothingFactor = 0.1;
        const newPosition = smoothedPosition.lerp(mousePosition, smoothingFactor);
        setSmoothedPosition(newPosition);
        state.camera.lookAt(newPosition);

    });

    return <perspectiveCamera ref={cameraRef} />;
}
/*
 * baisc Orbit Control
 */
export function ObitControlBasic() {
    const cameraRef = useRef(null);
    return (
        <>
            <perspectiveCamera ref={cameraRef} />
            <OrbitControls enableDamping={false} />
        </>
    )
}
export function PolarLimit() {
    const cameraRef = useRef(null);
    return (
        <>
            <CameraControls ref={cameraRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6}>
                <perspectiveCamera ref={cameraRef} />
            </CameraControls>
        </>
    )
}
export default WithMouseControl;
