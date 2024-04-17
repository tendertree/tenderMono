'use client';
import "./globals.css"
import { Profile } from "@ui/src/comp";
import { SceneBasic } from "@3d/babylon/scene/sceneBasic"
export default function Page(): JSX.Element {
    return (
        <main>
            <div className="bg-red-50 ">
                This is the main scene?
                <Profile></Profile>
                <SceneBasic name={"hi"}></SceneBasic>
            </div>
        </main>
    );
}
