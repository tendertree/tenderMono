import React, { ReactNode } from 'react';


export default function Sticky(): JSX.Element {
    return (
        <div className="relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
                <h2 className="text-4xl">The First Title</h2>
                <p>Scroll Down</p>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
                <h2 className="text-4xl">The Second Title</h2>
                <p>Scroll Down</p>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
                <h2 className="text-4xl">The Third Title</h2>
                <p>Scroll Down</p>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
                <h2 className="text-4xl">The Fourth Title</h2>
            </div>
        </div>
    )
}
