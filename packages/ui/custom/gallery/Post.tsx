/**
 * @module basic post grid gallery 
 */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
    slug: string;
    content: string;
    title: string;
    imageUrl: string;
    description: string;
};

// Define the props for the PostGallery component
type PostGalleryProps = {
    posts: Post[];
};


export default function PostGallery({ posts }: PostGalleryProps) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-5 text-center">Our Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.length === 0 ? (
                    <p className="text-center col-span-full">No blogs available.</p>
                ) : (
                    posts.map((blog) => (
                        <div key={blog.slug} className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-103 hover:shadow-xl
hover:border hover:outline hover:outline-2 hover:outline-black hover:border-black
								">
                            <Link href={`/blog/post/${blog.slug}`}>
                                <div className='fixed right-5 top-5 justify-end text-end bg-white-100 rounded-full w-10'>
                                    react

                                </div>
                                <Image
                                    className="w-full h-48 object-cover"
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    width={500}
                                    height={200}
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                    <p className="text-gray-700 mb-4">{blog.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
