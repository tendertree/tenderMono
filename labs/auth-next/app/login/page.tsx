import { signin, signup } from "@/src/actions/actions";

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={signin}>Log in</button>
            <button formAction={signup}>Sign up</button>
        </form>
    )
}
