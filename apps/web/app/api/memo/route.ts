import { trpc } from '@infra/trpc/clients/next';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Call the tRPC procedure

        // const result = await trpc.memo.memo.query();
        // Return the result
        return NextResponse.json({ message: "hello world..!" });
    } catch (error) {
        console.error('Error calling tRPC procedure:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
