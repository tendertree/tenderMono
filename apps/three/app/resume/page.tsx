"use client"
import { BoundingBox } from '@feature/three/objects/Box.tsx'
import Ground from '@feature/three/objects/Ground.tsx'
import { StageScene } from '@feature/three/scene/minimal.tsx'
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { GetScrollWidth, useScrollWidth } from '@src/store/scrollWith'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { CameraRigAround } from '@feature/three/camera/CameraRig.tsx'




/**
 * @returns 외부에서 불러오면 cnavas context를 인식하지 못한다.
 */
function ResponsiveCamera() {
    const { camera } = useThree();
    const scrollWidth = GetScrollWidth();
    const [initialPosition] = useState(() => camera.position.clone());

    useEffect(() => {
        const safeScrollWidth = typeof scrollWidth === 'number' ? scrollWidth : 1000;
        const zoomOutFactor = Math.max(1, 1000 / safeScrollWidth);
        const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0.35, 0));
        const targetDistance = initialPosition.distanceTo(new THREE.Vector3(0, 0.35, 0)) * zoomOutFactor;
        const newPosition = camera.position.clone().sub(new THREE.Vector3(0, 0.35, 0)).normalize().multiplyScalar(targetDistance).add(new THREE.Vector3(0, 0.35, 0));

        camera.position.copy(newPosition);
        camera.updateProjectionMatrix();
    }, [scrollWidth, camera, initialPosition]);

    return null;
}

export default function Page() {
    const { containerRef } = useScrollWidth();
    return (
        <div className='h-screen' ref={containerRef}>
            <StageScene>
                <color args={[0, 0, 0]} attach="background" />

                <OrbitControls
                    target={[0, 0.35, 0]}
                    maxPolarAngle={1.45}
					enableZoom={false}
                />
                <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

                <CubeCamera resolution={256} frames={Infinity}>
                    {(texture: THREE.Texture) => (
                        <>
                            <Environment preset='city' />
                            <BoundingBox />
                        </>
                    )}
                </CubeCamera>
				<CameraRigAround />
                <ResponsiveCamera />
                <Ground />
                < CameraRigAround />
            </StageScene>
        </div>
    );
};

