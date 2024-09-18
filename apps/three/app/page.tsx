"use client"
/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import StageScene, { TransparentScene, useScrollWidth  ,  BasicSceneProps  } from '@feature/three/scene/minimal.tsx'
import Resume from '@feature/three/scene/Resume.tsx'
import Ground from '@feature/three/objects/Ground.tsx'

import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'





export default function page() {
    const { scrollWidth, containerRef } = useScrollWidth();
    return (
        <div className='h-screen' ref={containerRef}>
            <p>{scrollWidth}</p>
            <StageScene screenWidth ={scrollWidth  as BasicSceneProps['screenWidth']} >
                <color args={["#ececec"]} attach="background" />

                <OrbitControls
                    target={[0, 0.35, 0]}
                    maxPolarAngle={1.45}
                    enableZoom={false}
                />
                <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
                <color args={[0, 0, 0]} attach="background" />

                <CubeCamera resolution={256} frames={Infinity}>
                    {(texture) => (
                        <>
                            <Environment preset='city' />
                            <Resume />
                        </>
                    )}
                </CubeCamera>

                <spotLight
                    color={[1, 0.25, 0.7]}
                    intensity={1.5}
                    angle={0.6}
                    penumbra={0.5}
                    position={[5, 5, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <spotLight
                    color={[0.14, 0.5, 1]}
                    intensity={2}
                    angle={0.6}
                    penumbra={0.5}
                    position={[-5, 5, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <Ground />
            </StageScene>
        </div>
    )
}
