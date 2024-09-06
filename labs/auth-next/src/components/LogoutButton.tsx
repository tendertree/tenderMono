"use client"

import { signout } from "@entity/user/actions/userAction";


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
