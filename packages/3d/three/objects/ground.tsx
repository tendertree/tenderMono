import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect } from "react";
import { PlaneGeometry } from "three/src/geometries/Geometries";

export default function Ground(): JSX.Element {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        </mesh>
    )
}

/*
 * baisc gltf scene loader 
 */
export function Map(path: string) {
    const map = useGLTF(path)
    useEffect(() => {
        map.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        return () => {
        }
    }, [])
    return (
        <primitive object={map.scene} />
    )
}
