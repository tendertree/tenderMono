import { types } from "@theatre/core"
import studio from "@theatre/studio"
import { getProject } from "@theatre/core"

const project = getProject('Animation Project')
const sheet = project.sheet('Main Sheet')

let model;
let mixer;
let animation;
let currentAction;
let lastPlayedFrame = -1;

// GLB 모델 로드 함수
async function loadModel() {
  const loader = new GLTFLoader()
  const gltf = await loader.loadAsync('path/to/your/model.glb')
  model = gltf.scene
  
  // 애니메이션 믹서 설정
  mixer = new THREE.AnimationMixer(model)
  animation = gltf.animations.find(anim => anim.name === 'hello')
  
  if (!animation) {
    console.error('hello 애니메이션을 찾을 수 없습니다')
    return
  }
  
  currentAction = mixer.clipAction(animation)
  currentAction.loop = THREE.LoopOnce // 한번만 재생
  currentAction.clampWhenFinished = true // 마지막 프레임에서 정지
}

const sequence = sheet.sequence.create({
  duration: 5, // 전체 시퀀스 길이 (초)
  playing: true,
  loop: true,
})

sequence.onValuesChange((values) => {
  if (!mixer || !animation || !currentAction) return
  
  const fps = 30 // 프레임레이트 설정
  const currentFrame = Math.floor(values.position * fps)
  
  if (currentFrame === 10 && lastPlayedFrame !== 10) {
    currentAction.reset()
    currentAction.play()
    lastPlayedFrame = 10
  }
  else if (currentFrame < 10) {
    lastPlayedFrame = -1
  }
})

function animate(deltaTime) {
  requestAnimationFrame(animate)
  
  if (mixer) {
    mixer.update(deltaTime)
  }
}

loadModel().then(() => {
  animate()
})
