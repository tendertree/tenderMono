import { NextApiRequest, NextApiResponse } from "next"

export interface PostProp {
    id: string;
    title: string;
    subject: string;
    imageUrl: string;
    date: string;
    description: string;
    views: number;
    likes: number;
    isNew?: boolean;
    isUpdated?: boolean;
}

export interface PostListProp {
    data: PostProp[];
}



export interface PostCRUD {
    createPost(post: Omit<PostProp, "id">): Promise<PostProp>; // Changed to Omit<PostProp, "id">
    getPost(id: string): Promise<PostProp | null>;
    getAllPosts(): Promise<PostListProp>;
    getPostsBySubject(subject: string): Promise<PostListProp>;
    updatePost(id: string, post: Partial<PostProp>): Promise<PostProp | null>;
    incrementViews(id: string): Promise<PostProp | null>;
    incrementLikes(id: string): Promise<PostProp | null>;
    deletePost(id: string): Promise<boolean>;
}



export default function PostHandler(postCRUD: PostCRUD) {
    return async function handler(req: NextApiRequest, res: NextApiResponse) {
        const { method, query, body } = req;

        try {
            switch (method) {
                case 'GET':
                    return handleGet(query, postCRUD, res);
                case 'POST':
                    return handlePost(body, postCRUD, res);
                case 'PUT':
                    return handlePut(query, body, postCRUD, res);
                case 'DELETE':
                    return handleDelete(query, postCRUD, res);
                default:
                    return res.status(405).json({ error: 'Method not allowed' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
    };
}
async function handleGet(query: NextApiRequest['query'] = {}, postCRUD: PostCRUD, res: NextApiResponse) {
    const { id, subject } = query;

    if (id) {
        const post = await postCRUD.getPost(id as string);
        return post ? res.status(200).json(post) : res.status(404).json({ error: 'Post not found' });
    }

    if (subject) {
        const posts = await postCRUD.getPostsBySubject(subject as string);
        return res.status(200).json(posts);
    }

     const allPosts = await postCRUD.getAllPosts();
    // return res.status(200).json(allPosts);
    // to test post send data it call post action 
    //
    // const body: Omit<PostProp, "id"> = {
    //     title: "Example Post Title",
    //     subject: "Example Subject",
    //     imageUrl: "https://example.com/image.jpg",
    //     date: new Date().toISOString(),
    //     description: "This is an example description for the post.",
    //     views: 0,
    //     likes: 0,
    //     isNew: true, // 선택적 속성
    //     isUpdated: false // 선택적 속성
    // };
    // const newPost = await postCRUD.createPost(body);
    // return res.status(201).json(newPost);
}

async function handlePost(body: NextApiRequest['body'], postCRUD: PostCRUD, res: NextApiResponse) {
    if (!isValidPostBody(body)) {
        return res.status(400).json({ error: 'Invalid post data' });
    }

    const newPost = await postCRUD.createPost(body);
    return res.status(201).json(newPost);
}

async function handlePut(query: NextApiRequest['query'], body: NextApiRequest['body'], postCRUD: PostCRUD, res: NextApiResponse) {
    const { id } = query;

    if (!id) {
        return res.status(400).json({ error: 'Post ID is required' });
    }

    if (body.views !== undefined) {
        const updatedPost = await postCRUD.incrementViews(id as string);
        return updatedPost ? res.status(200).json(updatedPost) : res.status(404).json({ error: 'Post not found' });
    }

    if (body.likes !== undefined) {
        const updatedPost = await postCRUD.incrementLikes(id as string);
        return updatedPost ? res.status(200).json(updatedPost) : res.status(404).json({ error: 'Post not found' });
    }

    if (!isValidPostBody(body)) {
        return res.status(400).json({ error: 'Invalid post data' });
    }

    const updatedPost = await postCRUD.updatePost(id as string, body);
    return updatedPost ? res.status(200).json(updatedPost) : res.status(404).json({ error: 'Post not found' });
}

async function handleDelete(query: NextApiRequest['query'], postCRUD: PostCRUD, res: NextApiResponse) {
    const { id } = query;

    if (!id) {
        return res.status(400).json({ error: 'Post ID is required' });
    }

    const deleted = await postCRUD.deletePost(id as string);
    return deleted ? res.status(204).end() : res.status(404).json({ error: 'Post not found' });
}

function isValidPostBody(body: any): body is Omit<PostProp, 'id'> {
    return (
        typeof body === 'object' &&
        typeof body.title === 'string' &&
        typeof body.content === 'string' &&
        typeof body.subject === 'string'
    );
}
// when to use [...slug] 
// export default async function route(req: NextApiRequest, res: NextApiResponse) {
//     const { query } = req;
//     const slug = Array.isArray(query.slug) ? query.slug.join('/') : query.slug; // Handle the slug
//
//     // Override the handler's logic for GET requests to fetch a specific post
//     if (req.method === 'GET' && slug) {
//         const post = await postCRUD.getPost(slug as string);
//         if (post) {
//             return res.status(200).json(post);
//         } else {
//             return res.status(404).json({ error: 'Post not found' });
//         }
//     } else {
//         // For other methods, delegate to the main handler if needed
//         return handler(req, res);
//     }
// }
