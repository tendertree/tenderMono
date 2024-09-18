import React, { useEffect } from 'react'

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

