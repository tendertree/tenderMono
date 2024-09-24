/*
* pbr circle mesh with shake camera, and pbr material 
*/
"use client"
import React from "react";
import MinimalScene from "../scene/minimal";
import Envmap from "../effector/Envmap";
import Ring from "../object/Ring";
import ShakeRig from "../camera/CameraRig";
import Ground from "../object/Ground"
import { ShakeLight, CastShadowLight } from "../light/directional";

export default function Home() {
    return (
        <div className="h-screen ">
            <MinimalScene>
                <fog attach="fog" args={['lightpink', 60, 100]} />
                <CastShadowLight />
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} />
                <ShakeLight />
                <Ring envMapPath={""} thickness={0.5} color={"white"} />
                <Ground />
                <Envmap />
                <ShakeRig />
            </MinimalScene>
        </div>
    );
}
