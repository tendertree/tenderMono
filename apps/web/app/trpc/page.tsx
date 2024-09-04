"use client"


import { trpc } from "../../src/trpc/client";

export default function Home() {
    const getUser = trpc.userRouter.getUser.useQuery();

    if (getUser.isLoading) {
        return <main>Loading...</main>
    }

    if (getUser.isError) {
        return <main>Error: {getUser.error.message}</main>
    }

    console.log(getUser);

    return (
        <main>
            <h1>Users:</h1>
            <pre>{JSON.stringify(getUser.data, null, 2)}</pre>
        </main>
    )
}
