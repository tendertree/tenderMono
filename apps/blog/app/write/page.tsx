"use client";
import React from "react";
import EditorClient from "@feature/editor/src/EditorClient";
import { Button } from "@ui/base/shadcn/button";
import MaxWidthWrapper from "@ui/base/layout/wrapper/MaxWidthWrapper";
import PostEditor from "@feature/editor/post/PostEditor";
function getCurrentDate(): string {
 const now = new Date();
 const year = String(now.getFullYear()).slice(-2); // 마지막 두 자리를 가져옴
 const month = String(now.getMonth() + 1).padStart(2, "0"); // 0부터 시작하므로 1을 더함
 const day = String(now.getDate()).padStart(2, "0");

 return `${day}/${month}/${year}`;
}

const date: string = getCurrentDate();

export default function page() {
 function submit(content: string) {
  console.log(content);
 }

 return (
  <div className="mt-5">
   <MaxWidthWrapper>
    <PostEditor submit={submit} />
   </MaxWidthWrapper>
  </div>
 );
}
