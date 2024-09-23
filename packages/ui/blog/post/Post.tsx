import { Heart, Eye } from "lucide-react"
import { Badge } from "@ui/base/shadcn/badge"
import { Button } from "@ui/base/shadcn/button"
import { PostProp, PostListProp } from '@entity/blog/post';
import TruncatedText from "@ui/base/lib/TruncatedText"
import React, { Suspense } from "react"
import Image from 'next/image'
import UpperShowTransition from "@ui/base/layout/effect/UpperShowTransition"
import TeckStackIcon from "@ui/base/info/icons/TechStack"

export function BlogPostCardSquare({
    title,
    subject,
    imageUrl,
    date,
    description,
    views,
    likes,
    isNew,
    isUpdated,
	id
}: PostProp) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-card">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
                <div className="absolute top-2 left-2 flex gap-2">
                    {isNew && <Badge variant="secondary">New</Badge>}
                    {isUpdated && <Badge variant="secondary">Updated</Badge>}
                </div>
                <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full"
                >
                    <Heart className="h-4 w-4" />
                </Button>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 truncate">{title}</div>
                <p className="text-muted-foreground text-sm mb-2">{subject}</p>
                <p className="text-card-foreground text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center mt-auto pb-4">
                <span className="text-sm text-muted-foreground">{date}</span>
                <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-muted-foreground">
                        <Eye className="h-4 w-4 mr-1" /> {views}
                    </span>
                    <span className="flex items-center text-sm text-muted-foreground">
                        <Heart className="h-4 w-4 mr-1" /> {likes}
                    </span>
                </div>
            </div>
        </div>
    );
}


export function BlogPostCard({
    title,
    subject,
    imageUrl,
    date,
    description,
    views,
    likes,
    isNew,
    isUpdated
}: PostProp) {
    return (
        <div className="md:w-96 w-80 bg-white p-6 border rounded-xl shadow-custom hover:shadow-lg transition-shadow duration-300">
            <div>
                <div className="flex items-center overflow-hidden">
                    <div className='relative w-[334px] h-[200px] overflow-hidden'>
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="rounded-sm object-cover"
                        />
                        <div className="absolute top-2 left-2 flex gap-2">
                            {isNew && <Badge variant="secondary">New</Badge>}
                            {isUpdated && <Badge variant="secondary">Updated</Badge>}
                        </div>
                    </div>
                </div>

                <a href="#" className="mb-3 block md:font-extrabold h-[75px] font-bold md:text-2xl text-xl hover:text-yellow mt-3 trucate  overflow-hidden">
                    <h1> <TruncatedText title={title} maxLength={30} /></h1>
                </a>
                <p className="text-grey font-medium leading-6 h-[45px] overflow-hidden truncate">
                    {description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center overflow-hidden">

                        <TeckStackIcon iconName={subject} />


                        {/*
						<div className="relative w-5 h-5 ">
                          
							<Image
                                src={imageUrl}
                                alt="blogger-img"
                                fill
                                className="rounded-full object-cover z-5"
                            />
                        </div>
                          
						  <p className="ms-3 font-bold">Greg Hooper</p>
						  */}
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center text-sm text-muted-foreground">
                            <Eye className="h-4 w-4 mr-1" /> {views}
                        </span>
                        <span className="flex items-center text-sm text-muted-foreground">
                            <Heart className="h-4 w-4 mr-1" /> {likes}
                        </span>
                    </div>
                </div>
                <span className="block my-2 capitalize text-black text-sm  text-end">{date}</span>
            </div>
        </div>
    );
}

export function BlogPostCardList({ data }: PostListProp) {

    if (!Array.isArray(data) || data.length === 0) {
        return <div>No blog posts available.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
            <UpperShowTransition>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Suspense fallback={<div>Loading...</div>}>

                        {data.map((post, key) => (
                            <BlogPostCard key={key} {...post} />
                        ))}
                    </Suspense>
                </div>
            </UpperShowTransition>
        </div >
    )
}


