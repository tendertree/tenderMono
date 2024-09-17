// Editor.tsx
import React, { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export interface EditorHandle {
    getContent: () => string;
}

const Editor = forwardRef<EditorHandle>((_, ref) => {
    const editorContainerRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current && editorContainerRef.current) {
            quillRef.current = new Quill(editorContainerRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ header: 1 }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                    ],
                },
            });

            const quillEditor = document.getElementsByClassName('ql-editor')[0] as HTMLElement;
            quillEditor.style.height = '50rem';
            isMounted.current = true;
        }
    }, []);

    useImperativeHandle(ref, () => ({
        getContent: () => {
            return quillRef.current?.root.innerHTML || '';
        }
    }));

    return (
        <div className="h-full flex flex-col">
            <div ref={editorContainerRef} className="flex-grow min-h-52"></div>
        </div>
    );
});

export default Editor;

