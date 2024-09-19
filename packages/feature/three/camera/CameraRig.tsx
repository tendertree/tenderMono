/*
 * camera follow mouse positoin with smooth
 */
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function CameraRig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02))
}



/**
 * if mouse not move, it automatically rotate the scene slowly
 */

export function CameraRigProduct() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
	return camera.position.lerp(
    vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), // Keep the z constant
    0.02
  )
}
