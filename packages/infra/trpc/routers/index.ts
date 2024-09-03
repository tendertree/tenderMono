import { z } from 'zod';
import { memoRouter } from './memo';
import { publicProcedure, router } from '../trpc';
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';
export const appRouter = router({
    memo: memoRouter,
    gethi: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            return [{ msg: "hello World for the first time" },]
        }),
})

export type AppRouter = typeof appRouter;
