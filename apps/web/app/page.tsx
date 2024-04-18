'use client';
import "./globals.css"
import { Basic } from "@ui/src/comp"
import { BasicScene as ThreeScene } from "@3d/three/scene/basic";
import { BasicScene as BabylonScene } from "@3d/babylon/scene/basic";
export default function Page(): JSX.Element {
    return (
        <main>
            <div className="bg-red-100">
                This is the main scene?..mh..
                <Basic></Basic>
            </div>
        </main>
    );
}
