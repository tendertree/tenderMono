/**
 * @module basic post items for  grid gallery 
 */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


type PostProp = {
    slug: string;
    title: string;
    imageUrl: string;
    description: string;
	day?:string;
    content?: string;
};



type PostListProps = {
    posts: PostProp[];
};



export default function Post({slug,title,imageUrl,description}:PostProp) {
    return (
        <div key={slug} className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-103 hover:shadow-xl
hover:border hover:outline hover:outline-2 hover:outline-black hover:border-black
								">
            <Link href={`/blog/post/${slug}`}>
                <div className='fixed right-5 top-5 justify-end text-end bg-white-100 rounded-full w-10'>
                    react

                </div>
                <Image
                    className="w-full h-48 object-cover"
                    src={imageUrl}
                    alt={title}
                    width={500}
                    height={200}
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-700 mb-4">{description}</p>
                </div>
            </Link>
        </div>
    );

}


export  function DetailPost({ day, title, description, imageUrl }: PostProp) {
    return (
        <div className="md:w-96 w-80 bg-white p-6 border rounded-custom-medium shadow-custom hover:shadow-custom-lg hover:cursor-pointer">
            <div>
                <div className='relative w-[334px] h-[200px] overflow-hidden'>
                    <Image
                        src={ imageUrl}
                        alt="blog image"
                        width={334}
                        height={200}
                        objectFit="cover"
                        className="rounded-sm"
                    />
                </div>
                <p className="capitalize text-black py-1 px-3 inline-block font-extrabold rounded bg-strong mt-6">
                    learning
                </p>
                <span className="block my-3 capitalize text-black text-sm">{day}</span>
                <a href="#" className="mb-3 block md:font-extrabold font-bold md:text-2xl text-xl hover:text-yellow">
                    <h1>{title} this is title</h1>
                </a>
                <p className="text-grey font-medium leading-6">
                    {description} and description
                </p>
                <div className="mt-6 flex items-center">
                    <div className="relative w-16 h-16">
                        <Image 
                            src="https://picsum.photos/400" 
                            alt="blogger-img" 
                            width={64}
                            height={65}
                            className="rounded-full"
                        />
                    </div>
                    <p className="ms-3 font-bold">Greg Hooper</p>
                </div>
            </div>
        </div>
    );
};







export  function PostList({ posts }: PostListProps) {
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
