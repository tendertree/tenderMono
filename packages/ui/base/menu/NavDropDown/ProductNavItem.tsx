import { cn } from "../../lib/utils"
import { Button } from "../../shadcn/button"
import { DropDownNavItemProps } from "@entity/menu/nav/navItem.ts"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export function ProductNavItem({
    isAnyOpen,
    category,
    handleOpen,
    close,
    isOpen,
}: DropDownNavItemProps) {
    return (
        <div className='flex'>
            <div className='relative flex items-center'>
                <Button
                    className='gap-1.5'
                    onClick={handleOpen}
                    variant={isOpen ? 'secondary' : 'ghost'}>
                    {category.label}
                    <ChevronDown
                        className={cn(
                            'h-4 w-4 transition-all text-muted-foreground',
                            {
                                '-rotate-180': isOpen,
                            }, { isAnyOpen }
                        )}
                    />
                </Button>
            </div>

            {isOpen ? (
                <div
                    onClick={() => close()}
                    className={cn(
                        'absolute left-0 right-0 top-19 inset-x-0 mt-10 z-20  bg-white  text-sm text-muted-foreground  transition-all duration-300 ease-in-out animate-in fade-in-10 slide-in-from-top-5',
                    )}>
                    <div
                        className='absolute inset-0 top-1/2 bg-white shadow'
                        aria-hidden='true'
                    />

                    <div className='relative bg-white'>
                        <div className='mx-auto max-w-7xl px-8'>
                            <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                                    {category.featured.map((item) => (
                                        <div
                                            onClick={() => close}
                                            key={item.name}
                                            className='group relative text-base sm:text-sm'>
                                            <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                                {item.imageSrc &&
                                                    <Image
                                                        src={item.imageSrc}
                                                        alt='product category image'
                                                        fill
                                                        className='object-cover object-center'
                                                    />
                                                }
                                            </div>

                                            <Link
                                                href={item.href}
                                                className='mt-6 block font-medium text-gray-900'>
                                                {item.name}
                                            </Link>
                                            <p
                                                className='mt-1'
                                                aria-hidden='true'>
                                                go now
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

