"use client"
import React, { ReactNode } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { getProject } from '@theatre/core';
import studio from '@theatre/studio'
import { SheetProvider } from '@theatre/r3f'


interface BasicSceneProps {
    children: ReactNode;
}

export default function MinimalScene({ children }: BasicSceneProps) {
    return (
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
                <color args={["#ececec"]} attach="background" />
                {children}
        </Canvas>

    )
}

export function TransparentScene({ children }: BasicSceneProps) {
    return (
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }} className='bg-transparent top-[50px] absolute pointer-events-none'>
            <color args={["#ececec"]} attach="background" />
            {children}
        </Canvas>

    )
}
