'use client';
import "./globals.css"
import { Profile } from "@ui/src/comp";
import { BasicScene } from "@3d/three/scene/basic";
export default function Page(): JSX.Element {
    return (
        <main>
            <div className="bg-red-100">
                This is the main scene?
                <Profile></Profile>
                <BasicScene></BasicScene>
            </div>
        </main>
    );
}
