'use client'
import { Separator } from "@ui/shadcn/base/separator"
import { FollowMouse } from "@3d/three/camera/perspective"
import { Scene } from "@3d/three/scene/basic"
import MovingBox from "@3d/three/objects/movingBox";
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
                        <MovingBox></MovingBox>
                        <FollowMouse />
                    </Scene>
                </div>
            </div>
        </main>
    );
}
