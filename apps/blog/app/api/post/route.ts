import PostCRUDImplFile from "@infra/file/blog/Post";
//import { postHandler } from "@entity/blog/post";
import { NextRequest, NextResponse } from "next/server";
import { PostProp, PostCRUDImpl } from "@entity/blog/post";

const Post_PATH = "data/info/post.json";
const Content_PATH = "data/content/";

const PostCRUD = new PostCRUDImpl(new PostCRUDImplFile(DATA_PATH));

export async function GET() {
 try {
  const result = await PostCRUD.getAllPosts(); // Await the result
  return NextResponse.json(result);
 } catch (error) {
  console.error("Error saving data:", error);
  return NextResponse.json({ error: "Failed to Load data" }, { status: 500 });
 }
}

export async function POST(req: NextRequest) {
 try {
  const body = await req.json();
  const result = await PostCRUD.createPost(body); // Await the result
  return NextResponse.json(result);
 } catch (error) {
  console.error("Error saving data:", error);
  return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
 }
}

export async function PUT(req: NextRequest) {
 try {
  const { id, updatedPost } = await req.json(); // Destructure id and updatedPost
  const result = await PostCRUD.updatePost(id, updatedPost); // Await the result
  return NextResponse.json(result);
 } catch (error) {
  console.error("Error updating data:", error);
  return NextResponse.json({ error: "Failed to update data" }, { status: 500 });
 }
}

export async function DELETE(req: NextRequest) {
 try {
  const { id } = await req.json(); // Assuming the request body contains the ID of the post to delete
  const result = await PostCRUD.deletePost(id); // Await the result
  return NextResponse.json({ message: "Post deleted successfully", result });
 } catch (error) {
  console.error("Error deleting data:", error);
  return NextResponse.json({ error: "Failed to delete data" }, { status: 500 });
 }
}
