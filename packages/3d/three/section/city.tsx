import { Canvas } from "@react-three/fiber";
import React from "react";

export function City() {
    return (
        <>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <mesh
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={'hotpink'} />
                </mesh>


            </Canvas >
        </>
    )
}
