import React from 'react'
import { Environment, Lightformer } from '@react-three/drei'
import {Autofocus} from "@react-three/postprocessing"

/**
 * basic Enviroment light for yard
 */
export default function LightYard(child:React.ReactNode) {
    return (
        <Environment preset='apartment' environmentIntensity={1.3}>
            <Lightformer 
				type="ring" 
				scale={35} 
				position={[-0.4, 1, 0]} 
				color={"#e8d8b4"} 
				intensity={2.2} 
				onUpdate={(self) => { self.lookAt(0, 0, 0) }}
            />
<Lightformer 
				type="rect" 
				scale={10} 
				position={[0, 0.5, -1]} 
				color={"#0d4e7b"} 
				intensity={3.5} 
            />
					{child}
        </Environment>

    )
}
