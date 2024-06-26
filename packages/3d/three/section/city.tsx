import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import anime from 'animejs/lib/anime.es.js';
import Ground from "../objects/ground";
import { WithMouseControl } from "../camera/perspective";

function BoxMoving() {
    const meshRef = useRef<THREE.Mesh>(null!)
    const boxAnimationRef = useRef<any>(null);
    useEffect(() => {
        if (meshRef.current) {
            const animation = anime({
                targets: [meshRef.current.rotation],
                y: 1, x: 2, z: 3,
                easing: "easeInOutSine",
                duration: 5000,
                direction: "alternate",
                loop: true
            });

            animation.play();
            boxAnimationRef.current = animation;
        }

    }, [])
    if (boxAnimationRef.current) {
        boxAnimationRef.current.play();
    }

    return (
        <mesh
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>
    );
}


export default function City() {

    useEffect(() => {
    })


    return (

        <Canvas shadows>
            <WithMouseControl />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <BoxMoving />
            <Ground />
        </Canvas >
    )

}
