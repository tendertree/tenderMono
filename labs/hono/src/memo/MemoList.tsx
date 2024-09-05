
'use client';

import { useEffect, useCallback } from 'react';
import useMemoStore, { Memo } from './MemoStore';

interface MemoListProps {
    initialMemos: Memo[];
    revalidateMemos: () => Promise<void>;
}

export default function MemoList({ initialMemos, revalidateMemos }: MemoListProps) {
    const { memos, setMemos } = useMemoStore();

    useEffect(() => {
        setMemos(initialMemos);
    }, [initialMemos, setMemos]);

    const handleRevalidate = useCallback(async () => {
        await revalidateMemos();
        // 리밸리데이션 후 페이지를 새로고침합니다.
        window.location.reload();
    }, [revalidateMemos]);

    return (
        <div>
            <button onClick={handleRevalidate} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Refresh Memos
            </button>
            {memos.map((memo) => (
                <div key={memo.id} className="border p-2 mb-2">
                    {memo.text}
                </div>
            ))}
        </div>
    );
}
