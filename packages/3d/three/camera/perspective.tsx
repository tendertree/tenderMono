import React, { useRef, useEffect, useState } from 'react'
import { useThree, useFrame, Camera } from '@react-three/fiber'
import { Box, CameraControls, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

export function WithMouseControl() {

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
export function FollowMouse() {
    const cameraRef = useRef(null);
    const [mousePosition, setMousePosition] = useState(new THREE.Vector3(0, 0, 0));
    const [smoothedPosition, setSmoothedPosition] = useState(new THREE.Vector3(0, 0, 0));

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const aspect = window.innerWidth / window.innerHeight;
            const x = (clientX / window.innerWidth) * 2 - 1;
            const y = -(clientY / window.innerHeight) * 2 + 1;
            const z = 1;
            if (cameraRef.current != null) {
                const newMousePosition = new THREE.Vector3(x, y, z).unproject(cameraRef.current);
                setMousePosition(newMousePosition);
            }
            console.log("position updated");

        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame((state) => {
        const smoothingFactor = 0.1;
        const newPosition = smoothedPosition.lerp(mousePosition, smoothingFactor);
        setSmoothedPosition(newPosition);
        state.camera.lookAt(newPosition);

    });

    return <perspectiveCamera ref={cameraRef} />;
}
/*
 * baisc Orbit Control
 */
export function ObitControlBasic() {
    const cameraRef = useRef(null);
    return (
        <>
            <perspectiveCamera ref={cameraRef} />
            <OrbitControls enableDamping={false} />
        </>
    )
}
export function PolarLimit() {
    const cameraRef = useRef(null);
    return (
        <>
            <CameraControls ref={cameraRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6}>
                <perspectiveCamera ref={cameraRef} />
            </CameraControls>
        </>
    )
}
export default WithMouseControl;
