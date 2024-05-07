import React, { useRef } from 'react'
import {
    Engine,
    Scene,
} from 'react-babylonjs'
import { Color3, Mesh, Vector3 } from '@babylonjs/core'
import anime from 'animejs'

export function BasicScene() {
    const boxRef = useRef<Mesh>(null);
    const boxMove = (boxRef: Mesh) => {
        if (boxRef != null) {
            anime({
                targets: [boxRef.rotation],
                y: 1, x: 2, z: 3,
                easing: "easeInOutSine",
                duration: 5000,
                direction: "alternate",
                loop: true
            });
        } else {
            console.log("boxRef.current is null");

        }

    }


    return (
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
            <Scene
                autoClear={false}
            >
                <arcRotateCamera
                    name="camera1"
                    target={Vector3.Zero()}
                    alpha={Math.PI / 2}
                    beta={Math.PI / 4}
                    radius={8}
                />
                <hemisphericLight
                    name="light1"
                    intensity={0.7}
                    direction={Vector3.Up()}
                />

                <box
                    name="box"
                    ref={(boxRef) => boxMove(boxRef!)}
                    size={2}
                    position={Vector3.Zero()}
                >
                    <standardMaterial
                        name="box-mat"
                        diffuseColor={Color3.Red()}
                        specularColor={Color3.Black()}
                    />
                </box>
            </Scene>
        </Engine>

    )
}

