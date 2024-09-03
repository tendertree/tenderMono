import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const memoRouter = router({

    getMemo: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            return [{ days: "wendday", plan: "go to the launch" },]
        }),
    addMemo: publicProcedure
        .input(z.object({
            days: z.string(),
            plan: z.string()
        })).mutation((opts) => {
            const { input } = opts;
        })



});
