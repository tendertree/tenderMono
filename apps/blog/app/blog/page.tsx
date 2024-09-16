
import React from 'react'
import Image from 'next/image'
import blogs from './blogs.json';  // Adjust the path according to where your file is
import Link from 'next/link';
import PostGallery from '@ui/custom/gallery/Post'
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


const fetchRandomImage = async () => {
    const response = await fetch('https://picsum.photos/200');
    // Return the URL from the response
    return response.url;
};


export default function Page() {  // Default to an empty array

    return (
	<PostGallery posts={blogs} />
    );
}

