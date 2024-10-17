"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import { useRef, useState } from "react";
import * as THREE from "three";
import React from "react";
import { GLTF } from "three-stdlib";



//
//before import model use 
//useGLTF.preload("/path/to/your/model.glb"); to gain performance
//

type GLTFResult = GLTF & {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
};

export function FlowUPBoxFlat(modelUrl: string) {
    const { scene } = useGLTF(modelUrl) as GLTFResult;
	const scale =1;
    const ref = useRef<THREE.Group>(null);
    const { viewport } = useThree();
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(viewport.height)
    });

    useFrame(() => {
        if (!ref.current) return;
        ref.current.position.set(data.x * viewport.width, (data.y += 0.1), 0);
        if (data.y > viewport.height / 1.5) {
            data.y = -viewport.height / 1.5;
        }
    });

    return (

        <group ref={ref} scale={scale}>
            <primitive object={scene.clone()} />
        </group>
    );
}

/**
 * Flow Up box with z-depth
 */
export function FlowUPBox({ z, modelUrl }: { z: number, modelUrl:string }) {
	const scale = 1;
    const ref = useRef<THREE.Group>(null);
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(height),
        rX: Math.random() * Math.PI,
        rY: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
    });
    const { scene } = useGLTF(modelUrl) as GLTFResult;
    useFrame(() => {
        if (!ref.current) return;
        ref.current.rotation.set((data.rX += 0.01), (data.rY += 0.04), (data.rZ += 0.05));
        ref.current.position.set(data.x * width, (data.y += 0.025), z);
        if (data.y > height) {
            data.y = -height;
        }
    });

    return (
     
        <group ref={ref} scale={scale}>
            <primitive object={scene.clone()} />
        </group>
    );
}


