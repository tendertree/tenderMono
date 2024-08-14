import { Lightbulb, LightbulbOff } from "lucide-react";
import React from "react";
type ToggleThemeprops = {
    isLight: boolean
    lightOn: () => void
}
export function ToggleTheme({ isLight, lightOn }: ToggleThemeprops) {
    return (
        <div
            onClick={lightOn}
            className="w-32 h-10 rounded-l cursor-pointer">
            {isLight ? (<Lightbulb />) : (<LightbulbOff />)}

        </div>
    )
}

