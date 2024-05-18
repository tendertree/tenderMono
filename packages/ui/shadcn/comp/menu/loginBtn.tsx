import { ReactNode } from "react";

interface LoginBtnProps {
    loggedInComponent: ReactNode;
    loggedOutComponent: ReactNode;
}
export function LoginBtn(
    { loggedInComponent,
        loggedOutComponent }: LoginBtnProps): JSX.Element {
    const isAuth = true;
    return (
        <>
            {isAuth ? loggedInComponent : loggedOutComponent}
        </>
    );
}
