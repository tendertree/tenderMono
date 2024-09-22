/**
 * @module magazine style cover text using SVG. it overlay parent div
 */

import React from 'react';

interface CoverProps {
    date: string;
    secretTitle: string[];
    modusOperandi: string;
    subtitle: string;
    invocationText: string[];
    footerText: string;
}

export default function Cover({
    date,
    secretTitle,
    modusOperandi,
    subtitle,
    invocationText,
    footerText,
}: CoverProps) {
    return (
        <div className="relative top-0 left-0 z-10 w-full h-screen flex-1 order-1 p-4 text-3xl pointer-events-none" >
            {/* Date */}
            <div className="relative p-8 w-full mx-auto h-screen flex flex-col justify-between text-center">
                {/* Date at the top */}
                <div className="absolute top-5 right-5 text-sm font-light text-gray-600">
                    {date}
                </div>

                {/* Secret Title */}
                <div className="mt-12">
                    <h1 className="text-3xl font-extrabold tracking-widest uppercase text-white-100 space-y-1">
                        {secretTitle.map((word, index) => (
                            <div key={index}>{word}</div>
                        ))}
                    </h1>
                </div>

                {/* Modus Operandi */}
                <div className="mt-6">
                    <h2 className="text-lg font-medium text-gray-700 tracking-wide uppercase">
                        {modusOperandi}
                    </h2>
                </div>

                {/* Subtitle */}
                <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-900">{subtitle}</h3>
                </div>

                {/* Invocation Text */}
                <div className="mt-6 text-lg font-light text-gray-700 leading-6 space-y-2">
                    {invocationText.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="mt-8 text-xl font-semibold text-gray-800">
                    {footerText}
                </div>
            </div>
        </div>
    );
}

