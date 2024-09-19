"use client"
import { create } from 'zustand';
import { useState, useEffect, useRef } from 'react';

// Zustand store 생성
interface ScrollWidthState {
  scrollWidth: number;
  setScrollWidth: (width: number) => void;
}

const useScrollWidthStore = create<ScrollWidthState>((set) => ({
  scrollWidth: 0,
  setScrollWidth: (width) => set({ scrollWidth: width }),
}));

// useScrollWidth 훅 수정
export function useScrollWidth() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const setScrollWidth = useScrollWidthStore((state) => state.setScrollWidth);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { scrollWidth } = entry.target;
        setScrollWidth(scrollWidth);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [setScrollWidth]);

  return { containerRef };
}

// 스크롤 너비를 가져오는 훅
export function GetScrollWidth() {
  return useScrollWidthStore((state) => state.scrollWidth);
}
