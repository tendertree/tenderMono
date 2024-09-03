// trpc.ts
import { initTRPC } from '@trpc/server';

const createTRPCContext = async () => {
    if (typeof window !== 'undefined') {
        throw new Error('createTRPCContext should only be used on the server');
    }

    const t = initTRPC.create();
    return {
        createCallerFactory: t.createCallerFactory,
        router: t.router,
        procedure: t.procedure,
    };
};

export { createTRPCContext };

export type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';



