'use client' // Next.js 13 이상을 사용하는 경우 필요합니다.

import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Quill의 스타일시트를 import

export default function Editor(): JSX.Element {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editorRef.current) {
            const quill = new Quill(editorRef.current, {
                // Quill 옵션을 여기에 추가할 수 있습니다.
                theme: 'snow',  // 또는 'bubble'
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean']
                    ]
                }
            });

            // 컴포넌트가 언마운트될 때 Quill 인스턴스를 정리합니다.
            return () => {
                // quill.destroy();  // Quill이 destroy 메서드를 제공한다면 사용하세요.
                //
            };
        }
    }, []); // 빈 의존성 배열은 이 효과가 마운트와 언마운트 시에만 실행됨을 의미합니다.

    return (
        <div className="h-full  flex flex-col">
            <div ref={editorRef} className="flex-grow"></div>
            button
        </div>

    )
}
