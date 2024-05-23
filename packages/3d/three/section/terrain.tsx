import { Canvas, useThree } from "@react-three/fiber";
import React from "react";
import { useEffect } from "react";
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
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            {children}
        </Canvas >
    )

}

