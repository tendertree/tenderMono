"use client"
import React, { ReactNode, Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { GetScrollWidth } from '../utils/ScreenWidthStore';
import * as THREE from 'three';
import { CameraRigProduct, ResponsiveCamera, ResponsiveCameraRig } from '../camera/CameraRig';
import useCameraStore from '../utils/CurrentCamera';

export interface BasicSceneProps {
    children: ReactNode;
    screenWidth?: number;
}

export default function MinimalScene({ children }: BasicSceneProps) {
    return (
        <Suspense>
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }} className='z-5'>
                <color args={["#ececec"]} attach="background" />
                {children}
            </Canvas>
        </Suspense>

    )
}

export function StageScene({ children, screenWidth }: BasicSceneProps): React.ReactElement {
	;
    return (
        <div className='relative z-5 h-full'>
            <Suspense fallback={null} >
                <Canvas flat dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 1, 6], fov: 25, near: 1, far: 20 }}>
                    <OrbitControls
                        target={[0, 0.35, 0]}
                        maxPolarAngle={1.45}
                        enableZoom={false}
                        enableRotate={false}
                    />
                    {children}
                </Canvas>
            </Suspense>
        </div>
    );
}



export function TransparentScene({ children }: BasicSceneProps) {
    return (
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }} className='bg-transparent top-[50px] absolute pointer-events-none'>
            <color args={["#ececec"]} attach="background" />
            {children}
        </Canvas>

    )
}




function CameraManager() {
    const { camera } = useThree();
    const setCamera = useCameraStore(state => state.setCamera);

    // 카메라를 Zustand에 저장
    useEffect(() => {
        setCamera(camera);
    }, [camera, setCamera]);

    return null;
}
