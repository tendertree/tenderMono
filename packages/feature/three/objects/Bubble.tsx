import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

interface BubbleTextProps {
  origin: THREE.Vector3; // 3D 공간에서의 시작 위치
  text: string;          // 보여줄 텍스트
  scene: THREE.Scene;    // 텍스트와 버블을 추가할 씬
  fontUrl: string;       // 폰트 파일 경로
  camera: THREE.Camera;  // 카메라 참조 (말풍선이 카메라를 향하게 하기 위해 필요)
}

export default class BubbleText {
  private bubble: THREE.Mesh;
  private textMesh: THREE.Mesh;
  private camera: THREE.Camera;

  constructor({ origin, text, scene, fontUrl, camera }: BubbleTextProps) {
    this.camera = camera; // 카메라를 저장

    const loader = new FontLoader();
    loader.load(fontUrl, (font) => {
      // 텍스트 메쉬 생성
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 0.5,    // 텍스트 크기
        height: 0.05, // 텍스트 깊이
        curveSegments: 12,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // 텍스트 위치를 origin 머리 위로 설정
      this.textMesh.position.set(origin.x, origin.y + 1, origin.z);

      // 말풍선(버블) 모양 생성
      const bubbleGeometry = new THREE.SphereGeometry(1.5, 32, 32);
      const bubbleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      this.bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);

      // 말풍선 위치를 origin 머리 위로 설정
      this.bubble.position.set(origin.x, origin.y + 1, origin.z);

      // 씬에 말풍선과 텍스트 추가
      scene.add(this.bubble);
      scene.add(this.textMesh);
    });
  }

  // 텍스트와 버블의 위치 업데이트 메서드
  updatePosition(newOrigin: THREE.Vector3) {
    this.textMesh.position.set(newOrigin.x, newOrigin.y + 1, newOrigin.z);
    this.bubble.position.set(newOrigin.x, newOrigin.y + 1, newOrigin.z);
  }

  // 카메라를 향하도록 업데이트하는 메서드
  update() {
    if (this.bubble && this.textMesh) {
      // 말풍선과 텍스트가 항상 카메라를 바라보도록 설정
      this.bubble.lookAt(this.camera.position);
      this.textMesh.lookAt(this.camera.position);
    }
  }
}

