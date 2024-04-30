'use client'
import City from "@3d/three/section/city"
import Envmap from "@3d/three/examples/envmap"
import { Separator } from "@ui/shadcn/base/separator"
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
                <div className="w-screen h-screen bg-red-100">
                    <City></City>

                </div>

            </div>
        </main>
    );
}
