"use client"
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ComponentType } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useTexture } from '@react-three/drei';
import Cosmetic from '@src/models/Cosmetic';


const Portal = dynamic<{}>(
    () => import('@feature/three/section/Portal').then((mod) => {
        const Component = mod.Portal as ComponentType<{}>;
        return Component;
    }),
    { ssr: false }
);


export default function YourComponent() {
    const [isClient, setIsClient] = useState(false);
const map=useTexture('/background/sky.jpg')
    useEffect(() => {
        setIsClient(true); // Ensures this runs only on the client
    }, []);

    if (!isClient) {
        return null; // Avoid rendering on the server-side
    }

    return (
        <div>
            <div className=' h-screen'>
                <Suspense fallback={null}>
                    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }} className='bg-transparent top-[50px] absolute pointer-events-none'>
						<ambientLight intensity={0.5} />
			 <OrbitControls  enableZoom={false}/>
						<Portal textureUrl={map} name={'mi'}>
                <Cosmetic/>
			</Portal>


						    <Environment preset="sunset" />
                    </Canvas>
                </Suspense>
            </div>
        </div>
    );
}
