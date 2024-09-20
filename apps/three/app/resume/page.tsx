"use client"
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { GetScrollWidth, useScrollWidth } from '@src/store/scrollWith'
import Resume from "@feature/three/scene/Resume.tsx"
import {ProductStageScene} from "@feature/three/scene/minimal"

export default function Page() {
    const { containerRef } = useScrollWidth();
    return (
        <div className='h-screen' ref={containerRef}>
            <ProductStageScene>
                <Environment preset='city' />
                <Resume />
            </ProductStageScene>
        </div>
    );
};

