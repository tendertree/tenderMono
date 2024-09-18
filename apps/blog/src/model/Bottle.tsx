"use client"
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Bottle(props) {
  const { nodes, materials } = useGLTF('/mesh/bottle.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.001']} position={[-0.037, 1.785, -0.104]} rotation={[0, -0.075, -1.571]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['Material.003']} position={[-0.011, 1.785, -0.062]} rotation={[0, -0.075, -1.571]} scale={[1.569, 0.428, 1.154]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} position={[-0.026, 4.024, -0.092]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[0.534, 0.539, 0.534]} />
      <mesh geometry={nodes.Object_4.geometry} material={materials['H-K-B-R-O-T-H-E-R-S-5-25-2024_1']} position={[0.525, 1.824, -0.089]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.495, 1, 0.495]} />
    </group>
  )
}

useGLTF.preload('/mesh/bottle.glb')
