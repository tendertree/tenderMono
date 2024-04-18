import React, { useEffect, useRef, useState } from 'react'
import {
    Engine,
    Scene,
} from 'react-babylonjs'
import { AbstractMesh, Color3, Mesh, Nullable, Vector3 } from '@babylonjs/core'
import anime from 'animejs'

export function BasicScene() {
    const boxRef = useRef<Mesh>(null);
    const boxMove = () => {
        if (boxRef.current != null) {
            anime({
                targets: [boxRef.current!.rotation],
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
                    ref={boxRef}
                    size={2}
                    position={Vector3.Zero()}
                    onReady={boxMove}
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
