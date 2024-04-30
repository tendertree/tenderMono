import React from "react";
import { PlaneGeometry } from "three/src/geometries/Geometries";

export default function Ground(): JSX.Element {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        </mesh>
    )
}
