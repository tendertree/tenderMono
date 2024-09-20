"use client"
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Stage from './Stage';
export default function Page() {

    return (
        <div className='h-screen'>
            <Canvas>
                <Stage />
            </Canvas>
        </div>
    );
};

