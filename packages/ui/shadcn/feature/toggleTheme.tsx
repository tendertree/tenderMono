"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@ui/shadcn/base/switch"

interface ThemeTogglerProps {
    isTrue: boolean;
    clickEvt: () => void;
}

export function ThemeToggle({ isTrue, clickEvt }: ThemeTogglerProps) {
    return (
        <div className="my-3 flex flex-row justify-between ">
            <p >
                {isTrue ? <Sun /> : <Moon />}
            </p>
            <Switch id="light-mode" onCheckedChange={clickEvt} className="mx-1" />
        </div>
    )
}
