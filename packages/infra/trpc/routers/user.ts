import { z } from 'zod';
import { procedure, router } from '../trpc';
export const userRouter = router({
    getUser: procedure.query(() => {
        return [{
            name: "home", grade: "first"
        }, {
            name: "kim", grade: "second"
        }]
    }),
    addUser: procedure.input(z.object(
        { name: z.string(), grade: z.string() }))
        .mutation((opts) => {
            const { input } = opts;
        })
});

