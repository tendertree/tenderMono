import { PostProp, PostCRUD, PostListProp } from "@entity/blog/post";
import { PostContentProp } from "@entity/blog/postContent";
import PostContentCRUD from "./PostContent";
import { promises as fs } from "fs";
import { nanoid } from "nanoid";
import path from "path";

//const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/postlist.json');
export default class PostCRUDImplFile implements PostCRUD {
 private dataPath: string;
 private contentPath: string;
 private PostContentCRUD: PostContentCRUD;

 constructor(dataPath: string, contentPath: string) {
  this.dataPath = dataPath;
  this.contentPath = contentPath;
  this.PostContentCRUD = new PostContentCRUD(contentPath);
 }

 async getAllPosts(page?: number, pageSize?: number): Promise<PostListProp> {
  const allPosts = await this.readData();
  console.log(allPosts);

  // 페이지네이션 처리
  const currentPage = page ?? 0; // Default to 0 if not provided
  const currentPageSize = pageSize ?? allPosts.length; // Default to total length if not provided
  const startIndex = currentPage * currentPageSize;
  const endIndex = startIndex + currentPageSize;
  if (startIndex > allPosts.length) {
   return {
    posts: [],
    total: allPosts.length,
    page: currentPage,
    pageSize: currentPageSize,
   };
  }

  const totalPosts = allPosts.length;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);
  const result: PostListProp = {
   posts: paginatedPosts,
   total: totalPosts,
   page: page ?? -1,
   pageSize: pageSize ?? totalPosts,
  };
  console.log("result :");
  console.log(result);
  return result;
 }

 async getPostsByType(
  type: string,
  page?: number,
  pageSize?: number
 ): Promise<PostListProp> {
  const allPosts = await this.readData();
  const filteredPosts = allPosts.filter((post) => post.type === type);
  const totalPosts = filteredPosts.length;
  const startIndex = page ? page * pageSize! : 0;
  const endIndex = page ? startIndex + pageSize! : totalPosts;

  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return {
   posts: paginatedPosts,
   total: totalPosts,
   page: page ?? 0,
   pageSize: pageSize ?? totalPosts,
  };
 }

 private async readData(): Promise<PostProp[]> {
  try {
   const fileData = await fs.readFile(this.dataPath, "utf-8");
   return JSON.parse(fileData);
  } catch (error) {
   console.error("Error reading data:", error);
   return [];
  }
 }

 private async writeData(posts: PostProp[]): Promise<void> {
  try {
   await fs.writeFile(this.dataPath, JSON.stringify(posts, null, 2), "utf-8");
  } catch (error) {
   console.error("Error writing data:", error);
  }
 }

 public async getPost(id: string): Promise<PostContentProp | null> {
  return this.PostContentCRUD.getPostContent(id);
 }

 public async createPost(
  post: Omit<PostProp, "id">,
  content: string
 ): Promise<PostContentProp> {
  const posts = await this.readData();
  const id = nanoid();
  const newContent: PostContentProp = { id, content };
  this.PostContentCRUD.createPostContent(newContent);
  const newPost = { id, ...post };
  posts.push(newPost);
  await this.writeData(posts);
  return newContent;
 }

 public async updatePost(
  id: string,
  updatedPost: Partial<PostProp>
 ): Promise<PostProp | null> {
  const posts = await this.readData();
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
   return null; // 포스트가 없으면 null 반환
  }
  posts[index] = { ...posts[index], ...updatedPost };
  await this.writeData(posts);
  return posts[index];
 }

 public async deletePost(id: string): Promise<boolean> {
  const posts = await this.readData();
  const newPosts = posts.filter((post) => post.id !== id);
  if (newPosts.length === posts.length) {
   return false; // 삭제할 포스트가 없는 경우 false 반환
  }
  await this.writeData(newPosts);
  return true;
 }

 private paginate(
  array: PostProp[],
  page: number,
  pageSize: number
 ): PostProp[] {
  const startIndex = (page - 1) * pageSize;
  return array.slice(startIndex, startIndex + pageSize);
 }
}
