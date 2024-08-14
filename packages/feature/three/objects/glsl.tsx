import { Mesh, ShaderMaterial } from 'three'
import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber';

interface GlslBoxProps {
    fragment: string;
    vertex: string;
    mesh?: Mesh | null;
}

export default function GlslBox({ fragment, vertex }: GlslBoxProps) {
    const meshRef = useRef<Mesh>(null!)
    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
        }), []
    );

    useFrame((state) => {
        const { clock } = state;
        const material = meshRef.current.material as ShaderMaterial;
        if (material && material.uniforms.u_time) {
            material.uniforms.u_time.value = clock.getElapsedTime();
        }
    });

    return (
        <mesh
            ref={meshRef}
        >      <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragment}
                vertexShader={vertex}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export function GlslOutliner({ fragment, vertex, mesh }: GlslBoxProps) {
    const geometry = mesh!.geometry
    return (
     
    );
}


