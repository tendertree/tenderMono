import { Suspense } from "react";
import { revalidateTag } from "next/cache";
import PromiseResolveHelper from "@src/utils/PromiseResolveHelper";
import MemoList from "./MemoList";

export async function getMemos() {
    const res = await fetch('http://localhost:3000/api/memos', {
        cache: 'force-cache',
        next: { tags: ['MEMOS'] }
    });
    if (!res.ok) throw new Error('Failed to fetch memos');
    console.log(res);

    return res.json();
}

export default async function MemosPage() {
    async function revalidateMemos() {
        'use server';
        revalidateTag("MEMOS");
        // 여기서 새로운 데이터를 반환하지 않습니다.
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Memos</h1>
            <Suspense fallback={<div>Loading memos...</div>}>
                <PromiseResolveHelper
                    promise={getMemos()}
                >
                    {({ data }) => <MemoList initialMemos={data} revalidateMemos={revalidateMemos} />}
                </PromiseResolveHelper>
            </Suspense>
        </div>
    );
}

