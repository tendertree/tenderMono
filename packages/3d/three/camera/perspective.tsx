import React, { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { Box, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
const Perspective = () => {

    return (
        <>
            <PerspectiveCamera makeDefault zoom={1} position={[0, 0, 5]} />
            <OrbitControls
                enableRotate={true} // 회전 기능을 일단 비활성화
                mouseButtons={{
                    LEFT: THREE.MOUSE.PAN, // 왼쪽 버튼은 패닝으로 설정
                    RIGHT: THREE.MOUSE.ROTATE, // 오른쪽 버튼은 회전으로 설정
                }}
            />
        </>
    )
}

export default Perspective

