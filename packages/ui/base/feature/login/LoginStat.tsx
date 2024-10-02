"use client"
import { buttonVariants } from "../../shadcn/button";
import Link from "next/link";
import AccountNav from "./AccountNav";

export default function LoginStat() {
    const user = { name: "kim" }
    return (
        <div className='ml-auto flex items-center'>
            <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                {user ? null : (
                    <Link
                        href='/sign-in'
                        className={buttonVariants({
                            variant: 'ghost',
                        })}>
                        Sign in
                    </Link>
                )}

                {user ? null : (
                    <span
                        className='h-6 w-px bg-gray-200'
                        aria-hidden='true'
                    />
                )}

                {user ? (
                    <AccountNav user={user}
                        signOut={() => {
                            console.log("login");
                        }}
                        signIn={() => {
                            console.log("signin");
                        }} />
                ) : (
                    <Link
                        href='/sign-up'
                        className={buttonVariants({
                            variant: 'ghost',
                        })}>
                        Create account
                    </Link>
                )}

                {user ? (
                    <span
                        className='h-6 w-px bg-gray-200'
                        aria-hidden='true'
                    />
                ) : null}

                {user ? null : (
                    <div className='flex lg:ml-6'>
                        <span
                            className='h-6 w-px bg-gray-200'
                            aria-hidden='true'
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
