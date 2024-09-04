"use client";

import { trpc } from "@infra/trpc/clients/client";



export default function Home() {
    const getUser = trpc.userRouter.getUser.useQuery();
    //const getUser = trpc.useQuery(['user', { text: 'client' }]);
    if (getUser.isLoading) {
        return <main>Loading...</main>
    }

    if (getUser.isError) {
        return <main>Error: {getUser.error.message}</main>
    }

    return (

        <div className="">
            <main className=" mt-8 h-screen">
                <div className="px-2 md:px-24 h-4/5">
                    <h1 className="text-3xl font-bold mb-4">Welcome to TenderTree</h1>
                    <p className="text-lg">This is the main content of your page.</p>
                    <div>did you see?</div>
                </div>
            </main>

        </div>
    );
}	
