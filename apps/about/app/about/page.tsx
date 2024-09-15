
"use client"
import * as THREE from 'three'
import React, { useEffect,Suspense } from 'react'
import { ContactShadows, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from '@react-three/drei'
import Cosmetic from '@src/models/Cosmetic'
import { Canvas } from '@react-three/fiber'
import { Portal } from '@src/components/MeshPotalCard'



function Scene() {
	const map=useTexture('/background/sky.jpg')
    return (
        <>
            <color args={["#ececec"]} attach="background" />
            <ambientLight intensity={0.5} />
            <OrbitControls />
			<Portal textureUrl={map} name={'mi'}>
                <Cosmetic/>
			</Portal>
		            <Environment preset="sunset" />
            <ContactShadows position-y={-1} />
        </>
    )
}

export default function Page() {
    return (
        <div className='bg-red-100 h-screen'>
			<Suspense fallback={null}>
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
                <Scene />
            </Canvas>
			</Suspense>
        </div>
    )
}
