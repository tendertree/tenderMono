import { Stats, OrbitControls, Environment, useGLTF, Html, useProgress } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import anime from 'animejs';
import React from 'react'
const data = [
    {
        title: 'arrowSign',
        description: 'click trigger camera move',
        camPos: {
            x: 6.61,
            y: 3.89,
            z: 1.37,
        },
        lookAt: {
            x: 7.37,
            y: 3.27,
            z: 0.36,
        },
    },
]
interface guideProps {
    children: React.ReactNode;
}
/*
 * add guide icon using html
 */
export default function guide() {
    const camera = useThree(state => state.camera)
    const clickEvent = () => {
        //camera.position.set(10, 40, 20)
        //camera.position.x = 5;
        anime({
            targets: [camera.position],
            y: 1, x: 2, z: 3,
            easing: "easeInOutSine",
            duration: 5000,
            direction: "alternate",
            loop: false,
            autoplay: false,
        }).play();
    }
    return (
        <>
            {
                data.map((a, i) => {
                    return (
                        <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
                            <div onClick={clickEvent
                            }>
                                {"hello world"}
                            </div>
                        </Html >
                    )
                })
            }
        </>
    )
}
