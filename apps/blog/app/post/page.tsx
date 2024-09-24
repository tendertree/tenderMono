import React from "react";
import PostFileView from "@feature/editor/post/PostFileView";
import PostFileLoader from "@feature/editor/post/PostFileLoader";
export default async function page() {
 const content = "<div>hello world</div>";

 return (
  <div>
   <PostFileView content={content} title={"blog is show?"} />
   this
  </div>
 );
}
