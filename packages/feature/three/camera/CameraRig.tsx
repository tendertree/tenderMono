"use client"
/*
 * camera follow mouse positoin with smooth
 */
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GetScrollWidth } from "../util/ScreenWidthStore"

export default function CameraRig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02))
}



/**
 * if mouse not move, it automatically rotate the scene slowly
 */


export function CameraRigAroundOrigin({ vec = new THREE.Vector3() }: { vec?: THREE.Vector3 }) {
    useFrame((state) => {
        state.camera.position.lerp(vec.set(1 + state.pointer.x, 0.5, 3), 0.01);
        state.camera.lookAt(0, 0, 0);
    });
    
    return null; 
}

/**
 * add responsive mode, it will automatically adjust camera distance by screen size
 */
export function ResponsiveCameraRigAround({ vec = new THREE.Vector3() }: { vec?: THREE.Vector3 }) {
    const { camera } = useThree();
    const scrollWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const initialPositionRef = useRef(new THREE.Vector3(1, 0.5, 3));
    const [zoomOutFactor, setZoomOutFactor] = useState(1);

    useEffect(() => {
        // 화면 크기에 따른 줌아웃 팩터 설정
        if (scrollWidth <= 480) {
            setZoomOutFactor(2.5);
        } else if (scrollWidth <= 768) {
            setZoomOutFactor(2);
        } else if (scrollWidth <= 1024) {
            setZoomOutFactor(1.5);
        } else {
            setZoomOutFactor(Math.max(1, 1920 / scrollWidth));
        }
    }, [scrollWidth]);

    useFrame((state) => {
        // 줌아웃 팩터를 적용한 새로운 위치 계산
        const targetX = 1 + state.pointer.x;
        const targetY = 0.5;
        const targetZ = 3 * zoomOutFactor;

        // 부드러운 전환을 위해 lerp 사용
        camera.position.lerp(vec.set(targetX, targetY, targetZ), 0.01);
        camera.lookAt(0, 0, 0);
    });
    
    return null;
}




/*
* responsive camera it will chech the screen size. and modify camera position
* not import this function but copy because it miss the canvas context when loaded other file
*/
export function ResponsiveCameraInitialize() {
     const { camera } = useThree();
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



