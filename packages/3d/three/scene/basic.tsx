import { Environment, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from 'react'
import * as THREE from 'three'
interface SceneProps {
    children: React.ReactNode;
}

export function Scene({ children }: SceneProps) {
    useEffect(() => {

    })
    return (
        <Canvas dpr={window.devicePixelRatio} gl={{ antialias: false }} >
            <ambientLight intensity={Math.PI / 2} />
            <SoftShadows size={45} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            {children}
        </Canvas >
    )

}
/*
 * scene with 3d spear env map
 */

export function withEnvmap({ children }: SceneProps) {
    <>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls />
        <mesh>
            <sphereGeometry args={[5, 64, 64]} />
			//to load image, set the map property!
            <meshStandardMaterial side={THREE.BackSide} />
        </mesh>
    </>
}




