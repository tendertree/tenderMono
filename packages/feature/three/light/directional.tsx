import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { DirectionalLight, PointLight, Color } from "three";
export function directionalLight() {
    return (
        <>
            <directionalLight position={[25, 18, -25]}
                intensity={0.3}
                castShadow
                showdow-camera-near={0}
                showdow-camera-far={80}
                showdow-camera-left={-30}
                showdow-camera-right={30}
                showdow-camera-top={0}
                showdow-camera-bottom={-25}
            />
        </>
    )
}

export function ShakeLight() {
    const ref = useRef<THREE.Group>()
    if (ref.current === null) return;
    useFrame((state) => {
        if (!ref.current) return; // Guard clause to check if ref.current is defined
        ref.current.rotation.x = state.clock.elapsedTime;
    });
    return (
        <group ref={ref}>
            <rectAreaLight width={15} height={100} position={[30, 30, -10]} intensity={5} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        </group>
    )

}

export function CastShadowLight() {
    const lightRef = useRef<DirectionalLight>(null);
    const light = new PointLight(new Color("#FFCB8E").convertSRGBToLinear(), 80, 200);
    useEffect(() => {
        if (lightRef.current) {
            lightRef.current.position.set(10, 20, 10);
            lightRef.current.add(light); // Add the light to the reference
        }
    }, []);

    return (
        <directionalLight
            ref={lightRef}
            castShadow
            shadow-mapSize-width={512}
            shadow-mapSize-height={512}
            shadow-camera-near={0.5}
            shadow-camera-far={500}
        />
    );
}


