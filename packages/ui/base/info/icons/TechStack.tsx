import { FaHtml5, FaBook } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiUnity, SiJavascript, SiUnrealengine, SiBlender, SiReact, SiTypescript, SiCss3, SiThreedotjs } from "react-icons/si";
interface TeckStackIconProps {
    iconName: string;
    size?: number;
}

export default function TeckStackIcon({ iconName, size = 24 }: TeckStackIconProps) {
    const iconMap: { [key: string]: React.ElementType } = {
        html: FaHtml5,
        book: FaBook,
        tailwind: SiTailwindcss,
        nextjs: SiNextdotjs,
        blender: SiBlender,
        unity: SiUnity,
        unreal: SiUnrealengine,
        css: SiCss3,
        typescript: SiTypescript,
        react: SiReact,
        javascript: SiJavascript,
        threejs: SiThreedotjs
    };

    const SelectedIcon = iconMap[iconName.toLowerCase()];

    if (!SelectedIcon) {
        return null;
    }
    return (
        <p className="w-16 h-16 capitalize  px-4 pt-4  inline-block font-extrabold rounded-xl text-white bg-strong ">
            <SelectedIcon size={35} color={"white"} />
        </p>
    )

};

