'use client'
import { QueryClient } from '@tanstack/react-query'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
interface ProvidersProps {
    children: ReactNode
}
export default function Providers({ children }: ProvidersProps) {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
