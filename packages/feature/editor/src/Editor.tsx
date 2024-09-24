"use client";
import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

export default function Editor({ onEditorMount }): JSX.Element {
 const editorRef = useRef(null);
 const quillInstanceRef = useRef(null);
 const isMounted = React.useRef(false);

 useEffect(() => {
  if (editorRef.current && !quillInstanceRef.current) {
   quillInstanceRef.current = new Quill(editorRef.current, {
    theme: "snow",
    modules: {
     toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
     ],
    },
   });
   const quillEditor = document.getElementsByClassName(
    "ql-editor"
   )[0] as HTMLElement;
   if (quillEditor) {
    quillEditor.style.height = "50rem";
   }

   if (onEditorMount) {
    onEditorMount(quillInstanceRef.current);
   }
  }
  isMounted.current = true;
 }, [onEditorMount]);

 return (
  <div className="h-full flex flex-col">
   <div ref={editorRef} className="flex-grow min-h-52"></div>
  </div>
 );
}
