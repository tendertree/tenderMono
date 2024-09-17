

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



export default async function PostLoader({ filepath, file }: { filepath: string, file: string }) {
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)

    const filePath = path.resolve(filepath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const postContent = (await processor.process(content)).toString();
    return {postContent, data};


}
