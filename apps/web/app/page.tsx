"use client";

// import { trpc } from "../src/server/client";// 단일 싱글에서 사용 가능 


export default function Home() {
    const getUser = trpc.getUser.useQuery();
    return (

        <div className="">
            <main className=" mt-8 h-screen">
                <div className="px-2 md:px-24 h-4/5">
                    <h1 className="text-3xl font-bold mb-4">Welcome to TenderTree</h1>
                    <p className="text-lg">This is the main content of your page.</p>
                    {JSON.stringify(getUser.data)}
                    <div>did you see?</div>
                </div>
            </main>

        </div>
    );
}	
