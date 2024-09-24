import React from "react";
import PostFileLoader from "@feature/editor/post/PostFileLoader.ts";
type Props = {
 title: string;
};
export default async function PostFileView({ title }: Props) {
 const { postContent, data } = await PostFileLoader({
  filepath: "src/content",
  file: "temp.md",
 });

 return (
  <div className="prose-zinc lg:prose-xl ">
   <h1 className="text-2xl font-bold">{title}</h1>
   <div dangerouslySetInnerHTML={{ __html: postContent }} />
   <span> meta data is below</span>
   <p>{data}</p>
  </div>
 );
}
