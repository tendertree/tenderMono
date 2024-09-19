"use client"
/*
 * camera follow mouse positoin with smooth
 */
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GetScrollWidth } from "../utils/ScreenWidthStore"
import useCameraStore from "../utils/CurrentCamera"

export default function CameraRig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02))
}



/**
 * if mouse not move, it automatically rotate the scene slowly
 */


export function CameraRigAround({ vec = new THREE.Vector3() }: { vec?: THREE.Vector3 }) {
    useFrame((state) => {
        state.camera.position.lerp(vec.set(1 + state.pointer.x, 0.5, 3), 0.01);
        state.camera.lookAt(0, 0, 0);
    });
    
    return null; 
}



/*
* responsive camera it will chech the screen size. and modify camera position
* not import this function but copy because it miss the canvas context when loaded other file
*/
export function ResponsiveCamera(camera:any) {
    // const { camera } = useThree();
    const scrollWidth = GetScrollWidth();
    const [initialPosition] = useState(() => camera.position.clone());
    
    useEffect(() => {
        const safeScrollWidth = typeof scrollWidth === 'number' ? scrollWidth : 1000;
        const zoomOutFactor = Math.max(1, 1000 / safeScrollWidth);
        const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0.35, 0));
        const targetDistance = initialPosition.distanceTo(new THREE.Vector3(0, 0.35, 0)) * zoomOutFactor;
        const newPosition = camera.position.clone().sub(new THREE.Vector3(0, 0.35, 0)).normalize().multiplyScalar(targetDistance).add(new THREE.Vector3(0, 0.35, 0));
        
        camera.position.copy(newPosition);
        camera.updateProjectionMatrix();
    }, [scrollWidth, camera, initialPosition]);

    return null;
}



