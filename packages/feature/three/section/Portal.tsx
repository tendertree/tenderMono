import * as THREE from 'three'
import React, { ReactNode } from 'react'
import { ContactShadows, Environment, OrbitControls, useTexture, RoundedBox, MeshPortalMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Texture } from 'three';

interface PortalProps {
    textureUrl: Texture;
    children: ReactNode;
}
export function Portal({ textureUrl, children }: PortalProps) {
           const map =useTexture(textureUrl);
    return (
        <RoundedBox args={[2, 3, 0.1]}>
            <planeGeometry args={[2, 3]} />
            <MeshPortalMaterial side={THREE.DoubleSide}>
                <ambientLight intensity={1} />
                <Environment preset="sunset" />
                {children}
                <mesh scale={[2, 2, 2]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial map={textureUrl} side={THREE.BackSide} />
                </mesh>
            </MeshPortalMaterial>
        </RoundedBox>
    )
}

