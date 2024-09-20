"use client"
import {  useGLTF, useTexture } from '@react-three/drei'
import React from 'react'

export default function Resume() {
	const {nodes} = useGLTF("/scene/tempScene.glb")
	const [ground,] = useTexture(["/texture/iu.jpg"]) 
    return (
        <>
           <mesh geometry={nodes.ground.geometry}>
				<meshBasicMaterial map={ground}/>
            </mesh>
        </>
    )
}
