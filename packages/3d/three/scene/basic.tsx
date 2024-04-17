import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from 'react'
import { Mesh } from 'three'

function BoxMoving() {
    const meshRef = useRef<Mesh>(null!)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))

    return (
        <mesh
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>
    );
}


export function BasicScene() {

    return (

        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <BoxMoving></BoxMoving>

        </Canvas >
    )

}
