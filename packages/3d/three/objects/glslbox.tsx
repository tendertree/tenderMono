import { Mesh } from 'three'
import React, { useRef } from 'react'

interface GlslBoxProps {
    fragment: string;
    vertex: string;
}

export default function GlslBox({ fragment, vertex }: GlslBoxProps) {
    const meshRef = useRef<Mesh>(null!)
    return (
        <mesh
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <shaderMaterial
                fragmentShader={fragment}
                vertexShader={vertex}
            />
        </mesh>
    );
}


