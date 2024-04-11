import { Profile, User } from "@ui/src/comp";
import styles from "./page.module.css";
export default function Page(): JSX.Element {
    return (
        <main className={styles.main}>
            This is test hmr
            <Profile></Profile>
            <User />
        </main>
    );
}
