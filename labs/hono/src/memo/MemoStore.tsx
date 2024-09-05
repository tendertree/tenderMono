import { create } from 'zustand';
import { ReactNode } from 'react';

export interface Memo {
    id: number;
    text: string;
}

export interface MemoState {
    memos: Memo[];
    setMemos: (memos: Memo[]) => void;
    addMemo: (memo: Memo) => void;
}

const useMemoStore = create<MemoState>((set) => ({
    memos: [{ id: 223, text: "helloworld" }],  // 초기값 설정
    setMemos: (memos) => set({ memos }),
    addMemo: (memo) => set((state) => ({ memos: [...state.memos, memo] })),
}));

export function MemoStore({ children }: { children: ReactNode }) {
    return <>{children}</>;
}

export default useMemoStore;
