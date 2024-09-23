import React from "react";
import { useTexture } from "@react-three/drei";
import { Color, MeshStandardMaterial, DoubleSide } from "three";

type RingProp = {
 envMapPath: string;
 thickness: number;
 color: string | number | Color;
};

export default function Ring({ thickness, color }: RingProp) {
 const materialProps = {
  roughness: 0,
  metalness: 1,
  side: DoubleSide,
  color: color,
  envMapIntensity: 1,
 };

 return (
  <group>
   <mesh position={[0, 0, 0.25 * 0.5]}>
    <ringGeometry args={[2, 2 + thickness, 80]} />
    <meshStandardMaterial {...materialProps} />
   </mesh>
   <mesh rotation={[Math.PI * 0.5, 0, 0]}>
    <cylinderGeometry
     args={[2 + thickness, 2 + thickness, 0.25, 70, 1, true]}
    />
    <meshStandardMaterial {...materialProps} />
   </mesh>
  </group>
 );
}
