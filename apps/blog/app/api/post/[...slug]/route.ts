// pages/api/post/[...slug]/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {PostCRUDImplFileSystem} from "@infra/file/blog/post"
import PostHandler from "@entity/blog/post"
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'blog/src/data/hello.json');
const postCRUD = new PostCRUDImplFileSystem(DATA_FILE_PATH);

const handler = PostHandler(postCRUD);

export default async function route(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;
    const slug = Array.isArray(query.slug) ? query.slug.join('/') : query.slug; // Handle the slug

    // Override the handler's logic for GET requests to fetch a specific post
    if (req.method === 'GET' && slug) {
        const post = await postCRUD.getPost(slug as string);
        if (post) {
            return res.status(200).json(post);
        } else {
            return res.status(404).json({ error: 'Post not found' });
        }
    } else {
        // For other methods, delegate to the main handler if needed
        return handler(req, res);
    }
}

