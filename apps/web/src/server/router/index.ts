import { z } from "zod";
// import { procedure, router } from "../trpc"
import { procedure, router } from "@infra/trpc/trpc"
import { userRouter } from "@infra/trpc/routers/user"
export const appRouter = router({
    getUser: procedure.query(() => {
        return [{
            name: 'kim', race: "man"
        },
        {
            name: 'choi', race: "man"
        }]
    }),
    addUser: procedure
        .input(z.object({ name: z.string(), race: z.string() }))
        .mutation((opts) => {
            const { input } = opts;
            return {
                name: input.name
            }
        })
});

// Infer the types from the router
export type AppRouter = typeof appRouter;
