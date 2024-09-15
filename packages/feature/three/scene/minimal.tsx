"use client"
import React, { ReactNode } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber";


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
