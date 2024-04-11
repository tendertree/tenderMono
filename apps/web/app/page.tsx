import "./globals.css"
import { Profile, User } from "@ui/src/comp";
import { MainScene } from "@3d/src/babylon/mainScene"
export default function Page(): JSX.Element {
    return (
        <main>
            <div className="bg-red-50">
                This is the main scene
                <MainScene></MainScene>
                <Profile></Profile>
                <User />
            </div>
        </main>
    );
}
