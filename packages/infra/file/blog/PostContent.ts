import { PostContentProp, PostContentCRUD } from "@entity/blog/postContent";
import { promises as fs } from "fs";
import path from "path";

export default class PostContentCRUDImplFile implements PostContentCRUD {
 private dataPath: string;

 constructor(dataPath: string) {
  this.dataPath = dataPath;
 }

 private async readData(id: string): Promise<PostContentProp | null> {
  try {
   const filePath = path.join(this.dataPath, `${id}.json`); // id를 파일명으로 사용
   const fileData = await fs.readFile(filePath, "utf-8");
   return JSON.parse(fileData); // 파일 내용을 PostContentProp으로 변환하여 반환
  } catch (error) {
   console.error("Error reading data:", error);
   return null; // 오류 발생 시 null 반환
  }
 }

 private async writeData(postContent: PostContentProp): Promise<void> {
  try {
   const filePath = path.join(this.dataPath, `${postContent.id}.json`); // id를 파일명으로 사용
   await fs.writeFile(filePath, JSON.stringify(postContent, null, 2), "utf-8");
  } catch (error) {
   console.error("Error writing data:", error);
  }
 }

 public async createPostContent(
  newContent: PostContentProp
 ): Promise<PostContentProp> {
  const postContent: PostContentProp = { ...newContent };
  await this.writeData(postContent);
  return postContent;
 }

 public async getPostContent(id: string): Promise<PostContentProp | null> {
  const post = await this.readData(id);
  return post;
 }

 public async updatePostContent(
  id: string,
  updatedContent: Partial<PostContentProp>
 ): Promise<PostContentProp | null> {
  const post = await this.readData(id); // ID에 해당하는 PostContentProp 객체 읽기
  if (!post) {
   return null; // 해당 ID의 게시물이 없으면 null 반환
  }
  // 업데이트된 내용으로 객체 병합
  const updatedPost = { ...post, ...updatedContent };
  await this.writeData(updatedPost); // 업데이트된 내용을 파일에 작성
  return updatedPost; // 업데이트된 객체 반환
 }

 public async deletePostContent(id: string): Promise<boolean> {
  try {
   const filePath = path.join(this.dataPath, `${id}.json`); // 파일 경로 생성
   await fs.unlink(filePath); // 파일 삭제
   return true; // 삭제 성공
  } catch (error) {
   console.error("Error deleting post content:", error);
   return false; // 삭제 실패
  }
 }
}
