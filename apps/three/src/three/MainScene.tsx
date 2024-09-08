"use client"
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import ObjectMoveByCurveLine from './scenes/ObjectMovebyCurveLine'


export default function MainScene() {
    return (
        <>
            <Canvas
            >
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

                <color attach="background" args={['#eceece']} />
                <ScrollControls pages={5} damping={0.3} >

                </ScrollControls>
            </Canvas>
        </>
    )
}
