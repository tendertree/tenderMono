import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';
export default function Background() {
    return (
        <>
            <Environment preset="sunset" />
            <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
                <LayerMaterial
                    lighting="physical"
                    transmission={1}
                    side={THREE.BackSide}
                >
                    <Gradient colorA={"black"} colorB={"#357ca1"} axes={"y"} start={0} end={-0.5} />

                </LayerMaterial>
            </Sphere>
        </>
    )
}
