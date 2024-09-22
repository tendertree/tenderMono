import { Button } from '../../shadcn/button';
import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../shadcn/dropdown-menu';
import { CircleUser, LogIn } from 'lucide-react';


interface LoginBtnProps {
    signin: () => void;
    signout: () => void;
}

export function LoginBtn({ signin, signout }: LoginBtnProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = () => {
        signin();
        setIsLoggedIn(true);
    };

    const handleSignOut = () => {
        signout();
        setIsLoggedIn(false);
    };

    if (!isLoggedIn) {
        return (

            <Button onClick={handleSignIn} className='w-10 bg-white text-black p-0  ' variant={"outline"} >
                <LogIn className='dark:text-white-100' />
            </Button>)

    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
				 <Button onClick={handleSignIn} className='w-10 bg-white text-black  dark:text-white p-0 ' variant={"outline"} >
                <CircleUser  className='w-10 dark:text-white-100 ' />
				</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LoginBtn;
