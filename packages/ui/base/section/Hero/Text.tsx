import { Button, buttonVariants } from '@/shadcn/button'
import Link from 'next/link'
import React from 'react'

export default function Text() {
    return (
        <div className="h-screen bg-red-100 py-20 mx-auto text-center flex flex-col items-center ">
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl '> helo this is simple text section
                <span className='text-strong'> hello</span>

            </h1>
            <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
                description should be here
            </p>
			   <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              product button
            </Link>
            <Button variant='ghost'>
              other info
            </Button>
          </div>
        </div>
    )
}
