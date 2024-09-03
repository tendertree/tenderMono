import { z } from "zod";
import { router, publicProcedure } from '../trpc';

export const userRouter = router({
    getUser: publicProcedure.query(() => {
        return [{
            name: 'kim', race: "man"
        },
        {
            name: 'choi', race: "man"
        }]
    }),
    addUser: publicProcedure
        .input(z.object({ name: z.string(), race: z.string() }))
        .mutation((opts) => {
            const { input } = opts;
            return {
                name: input.name
            }
        })
});


