import { Environment, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
interface SceneProps {
    children: React.ReactNode;
}

export const Raycaster = () => {
    const { gl, scene, camera } = useThree()
    const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(null)
    const raycaster = useRef(new THREE.Raycaster())
    const mouse = useRef(new THREE.Vector2())

    const handleMouseMove = (event) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 0.5
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 0.5
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useFrame(() => {
        raycaster.current.setFromCamera(mouse.current, camera)
        const intersects = raycaster.current.intersectObjects(scene.children)

        if (intersects.length > 0) {
            setSelectedObject(intersects[0].object)//selecetd object 
        } else {
            setSelectedObject(null)
        }
    })

    useEffect(() => {
        if (selectedObject) {
            console.log('Selected object:', selectedObject)
        }
    }, [selectedObject])

    return null
}

export function Scene({ children }: SceneProps) {
    useEffect(() => {

    })
    return (
        <Canvas dpr={window.devicePixelRatio} gl={{ antialias: false }} >
            <ambientLight intensity={Math.PI / 2} />
            <SoftShadows size={45} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            {children}
        </Canvas >
    )

}
/*
 * scene with 3d spear env map
 */

export function withEnvmap({ children }: SceneProps) {
    <>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls />
        <mesh>
            <sphereGeometry args={[5, 64, 64]} />
			//to load image, set the map property!
            <meshStandardMaterial side={THREE.BackSide} />
        </mesh>
    </>
}


export default function basicGallery(): JSX.Element {
    return (
        <div>data</div>
    )
}
