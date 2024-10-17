import React from 'react'
import { EffectComposer, DepthOfField, Bloom, Vignette, SMAA, Autofocus } from "@react-three/postprocessing";


export default function DepthOfFieldEffects(depth: number) {
    return (
        <EffectComposer>
            <DepthOfField target={[0, 0, depth / 2]} focalLength={0.5} bokehScale={11} height={700} />
        </EffectComposer>
    )
}
/**
 *  Auto focus with vingnette effect
 *  for yard scene
 */
export function AutoFocusEffect() {
    return (
        <EffectComposer multisampling={0} autoClear={false}>
            <Autofocus bokehScale={32} focusRange={0.5} resolutionScale={0.5} />
            <SMAA />
            <Bloom
                luminanceThreshold={0.5}
                luminanceSmoothing={0.9}
                intensity={0.6}
                levels={4}
                mipmapBlur
            />
            <Vignette offset={0.3} darkness={0.7} />
        </EffectComposer>
    )
}
