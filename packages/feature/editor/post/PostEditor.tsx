"useclient"
import React, { useState } from "react";
import {
 Card,
 CardTitle,
 CardDescription,
 CardHeader,
 CardContent,
} from "@ui/base/shadcn/card.tsx";
import { Label } from "@ui/base/shadcn/label.tsx";
import { Input } from "@ui/base/shadcn/input.tsx";
import EditorClient from "../src/EditorClient";
import { PostProp } from "@entity/blog/post";
function getCurrentDate(): string {
 const now = new Date();
 const year = String(now.getFullYear()).slice(-2); // 마지막 두 자리를 가져옴
 const month = String(now.getMonth() + 1).padStart(2, "0"); // 0부터 시작하므로 1을 더함
 const day = String(now.getDate()).padStart(2, "0");

 return `${day}/${month}/${year}`;
}

export default function PostEditor(props) {
 const [title, setTitle] = useState<string>("");
 const [type, setType] = useState<string>("");

 const handleSubmit = () => {
  const newPost: Omit<PostProp, "id"> = {
   title,
   type,
   imageUrl: "",
   date: getCurrentDate(),
   description: "This is a description",
   views: 0, // 초기 조회수
   likes: 0, // 초기 좋아요 수
   isNew: true,
   isUpdated: false,
  };

  console.log(newPost);
 };

 return (
  <Card className="w-full max-w-2xl mx-auto">
   <CardHeader>
    <CardTitle>Post Editor</CardTitle>
    <CardDescription>
     Create or edit a post using the form below.
    </CardDescription>
   </CardHeader>
   <CardContent>
    <div className="space-y-2">
     <Label htmlFor="title">Title</Label>
     <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
    </div>
    <div className="space-y-2">
     <Label htmlFor="type">Type</Label>
     <Input
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
    </div>
    <EditorClient submit={handleSubmit} />;
   </CardContent>
  </Card>
 );
}
