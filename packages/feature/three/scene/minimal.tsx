"use client"
import React, { ReactNode, Suspense, useEffect } from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, CubeCamera, ScrollControls, Scroll } from '@react-three/drei';
import useCameraStore from '../util/CurrentCamera';
import { ResponsiveCameraRigAround } from '../camera/CameraRig';
import * as THREE from 'three';
import { Scene } from 'three';
export interface BasicSceneProps {
    children: ReactNode;
	Scene?:ReactNode;
}

export default function MinimalScene({ children }: BasicSceneProps) {
    return (
        <div className='relative z-5 h-full'>
            <Suspense fallback={null}>
                <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }} className='z-5'>
                    <color args={["#ececec"]} attach="background" />
                    {children}
                </Canvas>
            </Suspense>
        </div>

    )
}

export function StageScene({ children }: BasicSceneProps): React.ReactElement {
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


export function ProductStageScene({ children }: BasicSceneProps): React.ReactElement {
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
                    <color args={[0, 0, 0]} attach="background" />
                    <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
                    <CubeCamera resolution={256} frames={Infinity}>
                        {(texture: THREE.Texture) => (
                            <>
                                {children}
                            </>
                        )}
                    </CubeCamera>
                    <ResponsiveCameraRigAround />
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
export function WithHtmlSectionScene({children ,Scene}:BasicSceneProps) {
	
return(
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }} className='bg-transparent top-[50px] absolute pointer-events-none'>
                <ScrollControls pages={4} damping={0.3}>
					{Scene}
                    <Scroll html>
						{children}
                    </Scroll>
                </ScrollControls>
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
