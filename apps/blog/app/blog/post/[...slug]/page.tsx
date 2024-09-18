import PostLoader from '@feature/editor/post/PostLoader'
import Outline from "@ui/shadcn/menu/Outline"
import BlogPost from '@feature/editor/post/BlogPostLocalMd'
import React from 'react'
import { ReactLenis, useLenis } from '@src/react-lenis'

type Props = {
    params: { slug: string, title: string, description: string }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { postContent, data } = await PostLoader({ filepath: 'public', file: 'temp.md' });
    return (
        <div className='flex'>
            <div className='px-16'>
                <BlogPost params={{
                    slug: 'rst',
                    title: 'rst',
                    description: 'rstrst'
                }} content={postContent} meta={data}  />
            </div>
            <div className='fixed right-2 bottom-12  border-l-2 border-l-shine p-4 '>
                <Outline htmlContent={postContent} className={'text-sm'} />
            </div>
        </div>
    )
}

