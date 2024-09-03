import { AppRouter } from "./router/index";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: "http://localhost:3000/api/trpc", // adjust this URL as needed
        }),
    ],
});
