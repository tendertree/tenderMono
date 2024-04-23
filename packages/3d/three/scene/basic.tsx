import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'
import anime from 'animejs/lib/anime.es.js';


anime({
    targets: '.css-selector-demo .el',
    translateX: 250
});


function BoxMoving() {
    const meshRef = useRef<Mesh>(null!)
    //   useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    useEffect(() => {
        anime({
            targets: [meshRef.current.rotation],
            y: 1, x: 2, z: 3,
            easing: "easeInOutSine",
            duration: 5000,
            direction: "alternate",
            loop: true
        });

    }, [])


    return (
        <mesh
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>
    );
}


export function BasicScene() {
    useEffect(() => {

    })
    return (

        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <BoxMoving></BoxMoving>

        </Canvas >
    )

}
