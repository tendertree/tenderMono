"use client"
import React, { ReactNode, Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';


export interface BasicSceneProps {
    children: ReactNode;
    screenWidth?: number;
}

export default function MinimalScene({ children }: BasicSceneProps) {
    return (
        <Suspense>
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
                <color args={["#ececec"]} attach="background" />
                {children}
            </Canvas>
        </Suspense>

    )
}

export function StageScene({ children, screenWidth }: BasicSceneProps): React.ReactElement {

    const { camera, size } = useThree();
    useEffect(() => {

        console.log(screenWidth);

    }, [sceenWidth])
    return (
        <>
            <Suspense fallback={null} >
                <Canvas shadows >
                    {children}
                </Canvas>
            </Suspense>
        </>
    );
}



export function TransparentScene({ children }: BasicSceneProps) {
    return (
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }} className='bg-transparent top-[50px] absolute pointer-events-none'>
            <color args={["#ececec"]} attach="background" />
            {children}
        </Canvas>

    )
}




export function useScrollWidth() {
    const [scrollWidth, setScrollWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { scrollWidth } = entry.target;
                setScrollWidth(scrollWidth);
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    return { scrollWidth, containerRef };
}
