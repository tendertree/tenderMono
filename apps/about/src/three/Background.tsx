import React from 'react'
import { Canvas } from "@react-three/fiber";
export default function Background() {
    return (
        <>
            <Canvas>
                <color attach="background" args={['#eceece']} />
            </Canvas>
        </>
    )
}
