import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function LowPolyStar({ scale = 0.5, ...props }) {
    const mesh = useRef()

    const geometry = useMemo(() => {
        const starShape = new THREE.Shape()
        const outerRadius = 1
        const innerRadius = 0.5
        const numPoints = 5

        for (let i = 0; i < numPoints * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius
            const angle = (Math.PI / numPoints) * i
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            if (i === 0) {
                starShape.moveTo(x, y)
            } else {
                starShape.lineTo(x, y)
            }
        }

        const extrudeSettings = {
            steps: 1,
            depth: 0.2,
            bevelEnabled: false
        }

        return new THREE.ExtrudeGeometry(starShape, extrudeSettings)
    }, [])

    const ROTATION_SPEED = 0.5

    useFrame((_state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * ROTATION_SPEED
            mesh.current.rotation.y += delta * ROTATION_SPEED
        }
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            geometry={geometry}
            scale={scale}
        >
            <meshPhongMaterial color={0xffff00} />
        </mesh>
    )
}

export function StarField({ count = 30, areaSize = 10 }) {
    const stars = useMemo(() => {
        return Array.from({ length: count }, (_, index) => ({
            position: [
                (Math.random() - 0.5) * areaSize,
                (Math.random() - 0.5) * areaSize,
                (Math.random() - 0.5) * areaSize
            ],
            scale: 0.05 + Math.random() * 0.02,  // 0.1에서 0.2 사이의 랜덤한 크기
            rotation: [
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            ],
            key: index
        }))
    }, [count, areaSize])

    return (
        <>
            {stars.map((star) => (
                <LowPolyStar
                    key={star.key}
                    position={star.position}
                    scale={star.scale}
                    rotation={star.rotation}
                />
            ))}
        </>
    )
}
