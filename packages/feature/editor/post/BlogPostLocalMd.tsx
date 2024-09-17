import React, { useEffect } from 'react'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeStringify from 'rehype-stringify'
import matter from 'gray-matter'
import fs from "fs"
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { GetStaticProps } from 'next';
/*
 * MD to html
 * load md file from /public folder 
 */

type Props = {
    params: { slug: string, title: string, description: string }
    content: string
    meta: any
}
export default async function BlogPost({ content, meta, params }: Props) {

    return (
        <div className='prose-zinc lg:prose-xl '>
            <h1 className="text-2xl font-bold">{meta.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

