import { signin, signup } from "@entity/user/actions/userAction";
import Login from "@ui/shadcn/feature/Login";
export default function LoginPage() {
    return (

        <Login />

        // <form>
        //     <label htmlFor="email">Email:</label>
        //     <input id="email" name="email" type="email" required />
        //     <label htmlFor="password">Password:</label>
        //     <input id="password" name="password" type="password" required />
        //     <button formAction={signin}>Log in</button>
        //     <button formAction={signup}>Sign up</button>
        // </form>
    )
}
