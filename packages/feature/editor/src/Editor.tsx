'use client'
import React, { useEffect, useRef,useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';



export default function Editor(): JSX.Element {

    const ref = React.useRef(null);
    const isMounted = React.useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
			if(ref.current == null) return
            ref.current = new Quill(ref.current, {
                theme: 'snow',
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
                }
            });
            const quillEditor = document.getElementsByClassName('ql-editor')[0] as HTMLElement;
            quillEditor.style.height = '50rem';
        }
        isMounted.current = true;
    }, []);




    return (
        <div className="h-full flex flex-col">
            <div ref={ref} className="flex-grow min-h-52" ></div>
        </div>
    );
}


//when you conflict rsc problem you should load quill editor by dynamic 
//
//"use client"
// Dynamically import your Quill component to ensure it's loaded only in the client-side

export function EditorClient() {
const QuillEditor = dynamic(() => import('@feature/quill/src/Editor'), { ssr: false });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server-side
  }

  return (
    <div>
      <QuillEditor />
    </div>
  );
}

