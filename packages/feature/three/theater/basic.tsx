"use client"
import React, { ReactNode, useEffect } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { getProject } from '@theatre/core';
import studio from '@theatre/studio'
import SequenceState from "./state.json"
//@ts-ignore
import { editable as e, SheetProvider } from '@theatre/r3f'
interface BasicSceneProps {
    children?: ReactNode;
    projectName: string;
}

export default function TheaterBasicScene({ projectName, children }: BasicSceneProps) {
    const name = typeof projectName === 'string' ? projectName : "Default Project"
    const demoSheet = getProject(name,{state: SequenceState}).sheet('Demo Sheet')
    studio.initialize()

    useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 100] }))
    }, [])

    return (
        <Canvas>
            <SheetProvider sheet={demoSheet}>
                <ambientLight />
                <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
                <e.group dispose={null} theatreKey="BottleGroup">
                    {children}
                </e.group>
            </SheetProvider>
        </Canvas>
    )
}

