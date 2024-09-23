import { NextApiRequest, NextApiResponse } from 'next';
import {PostCRUDImplFileSystem} from '@infra/file/blog/post';
import PostHandler from '@entity/blog/post';
import path from 'path';
const DATA_FILE_PATH = path.join(process.cwd(), '/src/data/posts.json');
const PostCRUD = new PostCRUDImplFileSystem(DATA_FILE_PATH);




export const GET = (req: NextApiRequest, res: NextApiResponse) => PostHandler(PostCRUD)(req, res);
export const POST = (req: NextApiRequest, res: NextApiResponse) => PostHandler(PostCRUD)(req, res);
export const PUT = (req: NextApiRequest, res: NextApiResponse) => PostHandler(PostCRUD)(req, res);
export const DELETE = (req: NextApiRequest, res: NextApiResponse) => PostHandler(PostCRUD)(req, res);
