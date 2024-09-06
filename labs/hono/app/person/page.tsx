import { Session } from "@auth/core/types"
import { SessionProvider, useSession } from "@hono/auth-js/react"

export default function App() {
    return (
        <SessionProvider>
            <Children />
        </SessionProvider>
    )
}



function Children() {
    const { data: session } = useSession() as { data: Session | null, status: string }
    return (
        <div>
            I am {session?.user?.name}
        </div>
    )
}

