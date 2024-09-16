import { Button } from '@ui/shadcn/base/button'
import TechStack from '@ui/custom/icons/TechStack'
import React from 'react'


interface SectionProps {
    children: React.ReactNode
}

export function Section({ children }: SectionProps) {
    return (
        <section className='h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center'>
            {children}
        </section>
    )
}


export default function Sections() {
    return (
        <div>
            <TechSection />
            <AboutSection />
            <Section>
                <h1>projects</h1>
            </Section>
            <Section>
                <h1>social</h1>
            </Section>

        </div>
    )
}


export function AboutSection() {
    return (
        <Section>
            <h1 className='text-6xl font-extrabold leading-snug'>
                who I am
                <br />
                <span className='bg-white-100  text-black px-1 italic'>Wara .</span>
            </h1>
            <p className='text-lg text-white/50 mt-4'>
                I made some websited
            </p>
            <Button> Join</Button>

        </Section>
    )
}


export function TechSection() {
    return (
        <Section>
            <div>
                <h2 className='text-5xl font-bold'>skill</h2>
                <TechStack />
            </div>
        </Section>

    )
}
