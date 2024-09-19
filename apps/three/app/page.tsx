"use client"
/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import StageScene, { TransparentScene, useScrollWidth, BasicSceneProps } from '@feature/three/scene/minimal.tsx'
import Ground from '@feature/three/objects/Ground.tsx'
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { CameraRigProduct } from "@feature/three/camera/CameraRig.tsx"

import { BoundingBox } from "@feature/three/objects/Box.tsx"
import Cover_Text from "@ui/custom/resume/Cover_Text"
export default function page() {
    const { scrollWidth, containerRef } = useScrollWidth();
    return (
        <div className='h-screen w-full relative' ref={containerRef}>
            <p>{scrollWidth}</p>
            <StageScene screenWidth={scrollWidth as BasicSceneProps['screenWidth']} >
                <color args={["#ececec"]} attach="background" />

                <OrbitControls
                    target={[0, 0.35, 0]}
                    maxPolarAngle={1.45}
                    enableZoom={false}
                    enableRotate={false}
                />
                <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
                <color args={[0, 0, 0]} attach="background" />

                <CubeCamera resolution={256} frames={Infinity}>
                    {(texture) => (
                        <>
                            <Environment preset='city' />
							< BoundingBox/>
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
                <CameraRigProduct />
            </StageScene>
           <Cover_Text
  date="08/01/21"
  secretTitle={["SECRET", "TEACHINGS", "OF ALL AGES"]}
  modusOperandi="MODUS OPERANDI FOR THE INVOCATION OF SPIRITS"
  subtitle="The Invocation —"
  invocationText={[
    "Behold the sign and",
    "the very Hallowed",
    "Names of God full of",
    "power. Obey the",
    "power of this our",
    "pentacle;",
  ]}
  footerText="The Complete Book of Magic Science"
/>
        </div>
    )
}
