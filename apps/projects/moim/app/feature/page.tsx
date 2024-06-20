"use client"
import dynamic from 'next/dynamic';

const Feature = dynamic(() => import('@/src/page/feature'), { ssr: false });
export default function Page(): JSX.Element {
    return (
        <div>
            <Feature />
        </div >
    )
}
