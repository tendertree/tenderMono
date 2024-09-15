import * as THREE from 'three'
import React, { ReactNode } from 'react'
import { Text, ContactShadows, Environment, OrbitControls, useTexture, RoundedBox, MeshPortalMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Texture } from 'three';
/*
 *  textureUrl make error
 *  hooks cna only be used within the canavs component
 */
interface PortalProps {
    textureUrl: Texture;
    name: string;
    children: ReactNode;
}
export function Portal({ textureUrl, name, children, ...props }: PortalProps) {

    return (
        <group {...props}>
            <Text fontSize={0.3} position={[0, -1, 0.05]} anchorY={"bottom"} >
                {name}
                <meshBasicMaterial color={'white'} toneMapped={false} />
            </Text>
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
        </group>
    )
}

