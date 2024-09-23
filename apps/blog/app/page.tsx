"use client";
import { BlogPostCardList } from "@ui/blog/post/Post";
import * as THREE from "three";
import postMock from "@ui/blog/post/PostMock.json";
import { Environment, OrbitControls, useEnvironment } from "@react-three/drei";
import React, { useEffect } from "react";
import MinimalScene from "@feature/three/scene/minimal";
import ReflectiveSphere from "@feature/three/object/ReflectiveSphere";
import { useLoader, useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import Envmap from "@feature/three/effector/Envmap";
import Ring from "@feature/three/object/Ring";
export default function Home() {
 return (
  <div className="h-screen ">
   <MinimalScene>
    <OrbitControls
     target={[0, 0.35, 0]}
     maxPolarAngle={1.45}
     enableZoom={false}
     enableRotate={true}
    />

    <ambientLight intensity={0.5} />
    <pointLight position={[5, 5, 5]} />
    <Ring envMapPath={""} thickness={0.5} color={"white"} />
    <Envmap />
   </MinimalScene>
  </div>
 );
}
