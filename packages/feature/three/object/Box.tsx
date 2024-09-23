import { Mesh } from 'three'
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect, useRef, useState } from 'react'
import { } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'

export function BoundingBox(props: JSX.IntrinsicElements['mesh']) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (!meshRef.current) return
        const target = meshRef.current.position
        if (clicked) {
            anime({
                targets: target,
                y: 1.5,
                duration: 1000,
                easing: 'easeOutElastic(1, .5)',
               
            })
        } else {
            anime({
                targets: meshRef.current.position,
                y: 0,
                duration: 800,
                easing: 'easeOutBounce'
            })
        }
    }, [clicked])

    return (
        <mesh
            {...props}
            ref={meshRef}
            onClick={() => setClicked(!clicked)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}




export default function MovingBox(): JSX.Element {
    const meshRef = useRef<Mesh>(null!)
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


