import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "fs/promises";
import path from "path";
import PostContentCRUDImplFile from "../../blog/PostContent";
import { PostContentProp } from "@entity/blog/postContent";

const testDataPath = path.join(__dirname, "testData"); // 테스트 데이터 경로
const postContentCRUD = new PostContentCRUDImplFile(testDataPath);

beforeEach(async () => {
 // 테스트 데이터 경로가 없으면 생성
 await fs.mkdir(testDataPath, { recursive: true });
});

afterEach(async () => {
 // 테스트가 끝난 후 테스트 데이터 삭제
 await fs.rmdir(testDataPath, { recursive: true });
});

describe("PostContentCRUDImplFile", () => {
 const postContent: PostContentProp = {
  id: "1",
  content: "This is a test post.",
 };

 it("should create a post content", async () => {
  const createdPost = await postContentCRUD.createPostContent(postContent);
  expect(createdPost).toEqual(postContent);

  const fileData = await fs.readFile(
   path.join(testDataPath, "1.json"),
   "utf-8"
  );
  expect(JSON.parse(fileData)).toEqual(postContent);
 });

 it("should get a post content", async () => {
  await postContentCRUD.createPostContent(postContent);
  const retrievedPost = await postContentCRUD.getPostContent("1");
  expect(retrievedPost).toEqual(postContent);
 });

 it("should update a post content", async () => {
  await postContentCRUD.createPostContent(postContent);
  const updatedContent = { content: "Updated test post." };
  const updatedPost = await postContentCRUD.updatePostContent(
   "1",
   updatedContent
  );
  expect(updatedPost).toEqual({ ...postContent, ...updatedContent });

  const fileData = await fs.readFile(
   path.join(testDataPath, "1.json"),
   "utf-8"
  );
  expect(JSON.parse(fileData)).toEqual({ ...postContent, ...updatedContent });
 });

 it("should return null for non-existing post content", async () => {
  const nonExistentPost =
   await postContentCRUD.getPostContent("non-existent-id");
  expect(nonExistentPost).toBeNull();
 });

 it("should delete a post content", async () => {
  await postContentCRUD.createPostContent(postContent);
  const deletionResult = await postContentCRUD.deletePostContent("1");
  expect(deletionResult).toBe(true);

  const deletedPost = await postContentCRUD.getPostContent("1");
  expect(deletedPost).toBeNull();
 });

 it("should return false when trying to delete a non-existing post content", async () => {
  const deletionResult =
   await postContentCRUD.deletePostContent("non-existent-id");
  expect(deletionResult).toBe(false);
 });
});
