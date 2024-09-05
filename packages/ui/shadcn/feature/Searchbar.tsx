"use client"

import { Input } from "base/input"


export default function Searchbar() {
    return (
        <div className="flex items-center space-x-4">
            <div className="flex ml-auto items-center space-x-4">
                <div className="relative rounded-lg bg-gray-100 dark:bg-gray-800 w-48">
                    <Input type="text" placeholder="Search" className="rounded-lg appearance-none w-48 pl-2 text-xs" />
                    <SearchIcon className="absolute right-2.5 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-600" />
                </div>
            </div>
        </div>
    )
}

export function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
