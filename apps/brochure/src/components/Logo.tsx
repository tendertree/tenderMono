import Link from "next/link";
import Image from "next/image"
export default function Logo(): JSX.Element {
    return (
        <div className="bg-red-100 w-[148px] h-[22px]">
            <Link href="/" className="relative  flex">
                logo
            </Link>
        </div >
    )
}
