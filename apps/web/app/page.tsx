import { Profile, User } from "@ui/src/comp";
import { MainScene } from "@3d/src/babylon/mainScene"
import styles from "./page.module.css";
export default function Page(): JSX.Element {
    return (
        <main className={styles.main}>
            This is the main scene
            <MainScene></MainScene>
            <Profile></Profile>
            <User />

        </main>
    );
}
