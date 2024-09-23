/**
 * @module this sphere use simple env map 
 */
import React from 'react'
import { useEnvironment, Sphere } from "@react-three/drei"
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { useLoader, useThree } from "@react-three/fiber";

export default function ReflectiveSphere() {
const hdrTexture = useLoader(RGBELoader, '/texture/puresky.hdr');

    const envMap = useEnvironment({ files: "/texture/puresky.hdr" });
    return (
        <Sphere args={[1, 256, 256]}>
                  <meshStandardMaterial envMap={envMap} envMapIntensity={1} />

        </Sphere>
    )
}
