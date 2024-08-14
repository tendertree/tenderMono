import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";
import * as THREE from 'three'
interface SceneProps {
    children: React.ReactNode;
}
/*
 * 3d triangle terrain 
 */
export function Scene({ children }: SceneProps) {
    const { gl, scene, camera } = useThree()
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    let time = 0;
    const viewport = useThree(state => state.viewport)
    useLayoutEffect(() => {
    }, [viewport])

    useEffect(() => {

    })

    const geo = new THREE.PlaneGeometry(1, 1, 10, 10);
    return (
        <Canvas dpr={window.devicePixelRatio} gl={{ antialias: false }} >
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                fov={75}
                position={[0, 0, 2]}
            />
            {children}
        </Canvas >
    )

}

