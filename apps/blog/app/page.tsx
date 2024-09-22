"use client"
import BlogPostCard, { BlogPostCardList } from "@ui/blog/post/Post"

import postMock from '@ui/blog/post/PostMock.json';
import React, { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        console.log(postMock);

    })
    return (
        <div className="">
            <BlogPostCardList data={postMock}/>
        </div>
    );
}
