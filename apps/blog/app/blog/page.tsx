import React from 'react'
import Image from 'next/image'

interface Blog {
  slug: string;
  content: string;
  title: string;
  imageUrl: string;
  description: string;
}

interface PageProps {
  blogs?: Blog[];  // Marked as optional
}

export default function Page({ blogs = [] }: PageProps) {  // Default to an empty array
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length === 0 ? (
          <p className="text-center col-span-full">No blogs available.</p> // Fallback UI
        ) : (
          blogs.map((blog, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}

