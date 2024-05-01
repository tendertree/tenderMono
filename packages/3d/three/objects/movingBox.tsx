import { Mesh } from 'three'
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect, useRef, useState } from 'react'


anime({
    targets: '.css-selector-demo .el',
    translateX: 250
});


export default function MovingBox() {
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


