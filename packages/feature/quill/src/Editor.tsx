'use client'

import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function Editor(): JSX.Element {
    const editorRef = useRef<HTMLDivElement>(null);
    const imageHandler = () => {
        const input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.click();
    };
    useEffect(() => {
        if (editorRef.current) {
            const quill = new Quill(editorRef.current, {
                // Quill 옵션을 여기에 추가할 수 있습니다.
                theme: 'snow',  // 또는 'bubble'
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean'],


                    ],
                    handlers: {
                        image: imageHandler // 이미지 tool 사용에 대한 핸들러 설정
                    }

                }
            });

            return () => {
            };
        }
    }, []);

    return (
        <div className="h-full  flex flex-col">
            <div ref={editorRef} className="flex-grow"></div>
            button
        </div>

    )
}
