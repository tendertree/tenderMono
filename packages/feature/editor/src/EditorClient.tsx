"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Button } from "@ui/base/shadcn/button.tsx";
import React = require("react");

const QuillEditor = dynamic(() => import("@feature/editor/src/Editor"), {
 ssr: false,
});
interface Prop {
 submit: (content: string) => void;
}
export default function EditorClient({ submit }: Prop) {
 const [isClient, setIsClient] = useState(false);
 const [editorInstance, setEditorInstance] = useState(null);

 useEffect(() => {
  setIsClient(true);
 }, []);

 const handleEditorMount = (quill) => {
  setEditorInstance(quill);
 };

 const handleSubmit = () => {
  if (editorInstance) {
   const delta = editorInstance.getContents();
   console.log("Editor delta:", delta);
   const content = editorInstance.root.innerHTML;
   submit(content);
   editorInstance.root.innerHTML = "";
  } else {
   console.log("Editor instance not available");
  }
 };

 if (!isClient) {
  return null;
 }

 return (
  <div>
   <QuillEditor onEditorMount={handleEditorMount} />
   <div className="sticky bottom-4 w-full max-w-screen-xl">
    <Button className="w-xl mx-auto w-full" onClick={handleSubmit}>
     submit
    </Button>
   </div>
  </div>
 );
}
