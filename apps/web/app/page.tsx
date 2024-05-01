'use client'
import { Separator } from "@ui/shadcn/base/separator"
import { Scene } from "@3d/three/scene/basic"
import GlslBox from "@3d/three/objects/glslbox";
import fragmentShader from '@3d/three/glsl/basicFragment.glsl'
import vertexShader from '@3d/three/glsl/basicVertex.glsl'
import Temp from "@3d/three/glsl/temp"
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
                    <div>Source</div>
                </div>
                <div className="w-screen h-screen ">
                    <Scene>
                        <GlslBox fragment={fragmentShader} vertex={vertexShader}></GlslBox>
                    </Scene>
                    <Temp></Temp>
                </div>
            </div>
        </main>
    );
}
