"use client";

import Editor from "@feature/quill/src/Editor";


export default function Home() {

    return (
        <div className="">
            <main className=" mt-8 h-screen">
                <div className="px-24 h-4/5">
                    <h1 className="text-3xl font-bold mb-4">Welcome to TenderTree</h1>
                    <p className="text-lg">This is the main content of your page.</p>
                    <Editor />
                </div>
            </main>

        </div>
    );
}
