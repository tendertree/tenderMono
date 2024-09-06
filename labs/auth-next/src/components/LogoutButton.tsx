"use client"
import { signout } from "@/src/actions/actions";

export default function LogoutButton(): JSX.Element {
    const handleClick = () => {
        signout();
    };
    return (
        <div>
            <button onClick={handleClick}>
                SignOut</button>
        </div>
    )
}
