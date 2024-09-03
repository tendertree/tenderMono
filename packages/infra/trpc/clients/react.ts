import type { AppRouter } from "../routers/index"
import { createTRPCReact } from "@trpc/react-query"


export const trpc = createTRPCReact<AppRouter>({})



