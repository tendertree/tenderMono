"use client"
import React, { useEffect, useState, useRef } from 'react'
import { cn } from '../lib/utils'

interface LinkType {
    id: string
    text: string
}

export default function Outline({ htmlContent, className }: { htmlContent: string, className?: string }) {
    const [links, setLinks] = useState<LinkType[]>([]);
    const [activeId, setActiveId] = useState<string>('');
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const temp = document.createElement("div");
        temp.innerHTML = htmlContent;
        //filtering header to show 
        const headings = temp.querySelectorAll('h2');
        const generatedLinks: LinkType[] = [];

        headings.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`;
            heading.id = id;

            generatedLinks.push({
                id: id,
                text: (heading as HTMLElement).innerText
            });
        });

        setLinks(generatedLinks);

        // 실제 DOM에서 헤딩 요소들을 찾습니다.
        const actualHeadings = document.querySelectorAll('h2');

        // IntersectionObserver 설정
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        actualHeadings.forEach((heading) => {
            if (observerRef.current) observerRef.current.observe(heading);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [htmlContent]);

    return (
        <div className={cn('hidden md:block w-40', className)}>
            <div className="sticky bottom-0 min-h-24 gap-10">
                <h2>Outline</h2>
                <ul className='not-prose text-xs'>
                    {links.map((link) => (
                        <li key={link.id} className='pt-3'>
                            <a
                                href={`#${link.id}`}
                                className={cn(
                                    'hover:text-shine transition-all duration-75',
                                    activeId === link.id ? 'text-strong' : ''
                                )}
                            >
                                {link.text.slice(0, 50)}
                                {link.text.length > 50 ? "..." : ""}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
