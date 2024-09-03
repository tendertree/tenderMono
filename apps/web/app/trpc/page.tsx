"use client"

import { trpc } from "@infra/trpc/clients/next";

// import { trpc } from "../../src/server/client";

export default function Home() {
    const getUser = trpc.getUser.useQuery();

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
