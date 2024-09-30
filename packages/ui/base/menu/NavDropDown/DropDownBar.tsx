'use client'

import { useOnClickOutside } from "../../lib/useOnClickOutside"
import { useEffect, useRef, useState } from 'react'
import { DropDownBarProps } from "@entity/menu/nav/navItem.js"


export function DropDownBarCategoryList({ list, NavItemComponent }: DropDownBarProps) {
    const [activeIndex, setActiveIndex] = useState<
        null | number
    >(null)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveIndex(null)
            }
        }

        document.addEventListener('keydown', handler)

        return () => {
            document.removeEventListener('keydown', handler)
        }
    }, [])

    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setActiveIndex(null))

    return (
        <div className='flex gap-4 h-full' ref={navRef}>
            {list.list.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(i)
                    }
                }

                const close = () => setActiveIndex(null)

                const isOpen = i === activeIndex

                return (

                    <NavItemComponent
                        category={category}
                        close={close}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        isAnyOpen={isAnyOpen}
                        key={category.value}
                    />

        )
            })}
        </div>
    )
}

