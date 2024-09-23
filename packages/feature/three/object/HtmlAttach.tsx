import { createRoot } from "react-dom/client"
import React, { MutableRefObject, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { Group, Mesh, Object3DEventMap } from "three"

function Dodecahedron({ ...props }) {
    return (
        <mesh {...props}>
            <meshStandardMaterial roughness={0.75} emissive="#404057" />
            <Html distanceFactor={10}>
                <div className="bg-red-100 rounded-sm"
                    style={{ transform: 'translate3d(calc(50% + 40px), 0, 0)' }}>
                    hello <br />
                    world
                </div>
            </Html>
        </mesh>
    )
}

export default function HtmlAttach() {
    const ref = useRef<Group>(null);
    useFrame(() => {
        if (!ref.current) return;
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
        ref.current.rotation.z += 0.01;
    });


    return (
        <group ref={ref}>
            <Dodecahedron position={[-2, 0, 0]} />
            <Dodecahedron position={[0, -2, -3]} />
            <Dodecahedron position={[2, 0, 0]} />
        </group>
    )
}


