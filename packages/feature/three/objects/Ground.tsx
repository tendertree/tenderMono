/** [TODO: basic stage ground  it will load texture from "app's" public texture */
"use client"
import { MeshReflectorMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { TextureLoader, RepeatWrapping } from 'three'
import * as THREE from 'three'
export default function Ground() {
    const [roughness, normal] = useLoader(TextureLoader,
        [
            "/texture/ground_rough.png",
            "/texture/ground_nor.png",

        ]
    );
    useEffect(() => {
        [normal, roughness].forEach(
            (t) => {
                if (t == null) return
                t.wrapS = THREE.RepeatWrapping;
                t.wrapT = THREE.RepeatWrapping;
                t.repeat.set(5, 5);
            });
        normal!.colorSpace = THREE.LinearSRGBColorSpace;
    }, [normal, roughness])
    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
                envMapIntensity={0}
                normalMap={normal}
                normalScale={new THREE.Vector2(0.15, 0.15)}
                roughnessMap={roughness}
                dithering={true}
                color={[0.015, 0.015, 0.015]}
                roughness={0.7}
                blur={[1000, 400]}
                mixBlur={30}
				mixStrength={80} 
				mixContrast={1}
                resolution={1024} 
				mirror={0}
                depthScale={0.01} 
				minDepthThreshold={0.9} 
				maxDepthThreshold={1} 
				depthToBlurRatioBias={0.25} 
				reflectorOffset={0.2}             />
        </mesh>
    )
}
