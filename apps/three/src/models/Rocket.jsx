import { useGLTF } from '@react-three/drei'
import React from 'react'

export function Rocket(props) {
    const { nodes, materials } = useGLTF('/3d/rocket.glb')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.model.geometry} material={materials['Material.001']} />
        </group>
    )
}


useGLTF.preload('/3d/rocket.glb')
