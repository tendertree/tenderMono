import React, { useRef, useState } from 'react'
import {
    Engine,
    Scene,
} from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core'

export function BasicScene() {
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
                <ground name="ground" width={6} height={6} />
            </Scene>
        </Engine>

    )
}

