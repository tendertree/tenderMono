"use client"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'

export default function Resume() {
    return (
        <>
           <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </>
    )
}
