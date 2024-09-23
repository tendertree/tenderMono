// utils/testUtils.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingMessage, ServerResponse } from 'http';

export const createNextApiHandler = (
    req: IncomingMessage,
    res: ServerResponse
): { req: NextApiRequest; res: NextApiResponse } => {
    return {
        req: {
            // Cast the incoming request to NextApiRequest
            ...req,
            query: {}, // populate with your query if needed
            cookies: {}, // handle cookies as necessary
            body: {}, // populate with your body data if needed
            env: {}, // phandle environment variables if necessary
        } as NextApiRequest,
        res: res as NextApiResponse,
    };
};

