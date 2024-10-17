import React from 'react'
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";


export default function DepthOfFieldEffects(depth: number) {
    return (
        <EffectComposer>
            <DepthOfField target={[0, 0, depth / 2]} focalLength={0.5} bokehScale={11} height={700} />
        </EffectComposer>
    )
}
