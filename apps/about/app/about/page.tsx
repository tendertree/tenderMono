
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
            <ambientLight intensity={0.5} />
			 <OrbitControls  enableZoom={false}/>
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
        <div className=' h-screen'>
			<Suspense fallback={null}>
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }} className='bg-transparent top-[50px] absolute pointer-events-none'>
                <Scene />
            </Canvas>
			</Suspense>
        </div>
    )
}
