import create from 'zustand';
import * as THREE from 'three';


interface CameraStore {
    camera: THREE.Camera | null;
    setCamera: (camera: THREE.Camera) => void;
}

const useCameraStore = create<CameraStore>((set) => ({
    camera: null,
    setCamera: (camera) => set({ camera }),
}));



export default useCameraStore;
