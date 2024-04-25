"use client"
import dynamic from 'next/dynamic';
import { UseSectionStore } from "@ui/shadcn/comp/section/sectionStore"
const Feature = dynamic(() => import('@/src/page/feature'), { ssr: false });
export default function Page(): JSX.Element {

    return (
        <Feature />
    )
}
