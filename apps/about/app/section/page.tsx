"use client"
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'
import Sections from './Sections'

function page() {
    return (
        <div className='h-screen text-red'>
            <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }} className='bg-transparent top-[50px] absolute pointer-events-none'>
                <ScrollControls pages={4} damping={0.3}>
					<Scene/>
                    <Scroll html>
						<Sections/>
                    </Scroll>

                </ScrollControls>

            </Canvas>
        </div>
    )
}

export default page
