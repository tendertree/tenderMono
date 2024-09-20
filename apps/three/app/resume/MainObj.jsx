import { useGLTF, useTexture } from "@react-three/drei";

import React, { useEffect } from 'react';
export default function MainObj() {
    const { nodes } = useGLTF("scene/tempScene.glb");
    const [
        iu,
        iu2
    ] = useTexture([
        "/texture/iu.jpg",
        "/texture/iu2.jpg",
    ])
        ;

    return (
        <>
            <mesh geometry={nodes.Plane.geometry}>
                <meshBasicMaterial map={iu} />
            </mesh>
            <mesh geometry={nodes.monkey.geometry}>
                <meshStandardMaterial metalness={1} roughness={0}/>
            </mesh>


        </>
    )
}
