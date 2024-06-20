'use client'
import { Separator } from "@ui/shadcn/base/separator"
import { ObitControlBasic } from "@3d/three/camera/perspective"
import fragmentShader from '@3d/three/glsl/basicFragment.glsl'
import vertexShader from '@3d/three/glsl/basicVertex.glsl'

import { Scene } from "@3d/three/scene/basic"
import Guide from "@3d/three/objects/guide"
import GlslBox from "@3d/three/objects/glsl";
export default function Page(): JSX.Element {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col  items-center space-x-4 text-sm h-full">
                test three js scene
                <div className="flex flex-row">
                    <div>Blog</div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Sour!</div>
                </div>
                <div className="w-screen h-screen ">
                    <Scene>
                        <GlslBox fragment={fragmentShader} vertex={vertexShader} />
                        <Guide />
                        <ObitControlBasic />
                    </Scene>
                </div>
            </div>
        </main>
    );
}
