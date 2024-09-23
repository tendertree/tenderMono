
import ReflectiveSphere from "@feature/three/object/ReflectiveSphere"
import { useLoader, useThree } from "@react-three/fiber";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import {useEffect} from "react"
import * as THREE from 'three'
export default function HdrTexture(){

const { scene } = useThree();

const hdrTexture = useLoader(RGBELoader, '/texture/puresky.hdr');
useEffect(() => {
    if (hdrTexture) {
      hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = hdrTexture;  // Scene의 환경 맵으로 적용
    }
  }, [hdrTexture, scene]); 
  return (
    <mesh>
    {/* PlaneGeometry를 생성 */}
    <planeGeometry args={[5, 5]} />
    {/* 로드된 HDR 텍스처를 material로 사용 */}
    <meshStandardMaterial map={hdrTexture} />
  </mesh>

  )
}