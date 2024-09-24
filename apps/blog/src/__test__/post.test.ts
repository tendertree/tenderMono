import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { PostProp, PostExample } from "@entity/blog/post";
import { GET, POST, PUT, DELETE } from "../../app/api/post/route";
import { NextRequest } from "next/server";
import { data } from "autoprefixer";

export class MockNextRequest extends NextRequest {
 constructor(body: any) {
  // Create a Request object and pass the URL and method
  super("http://localhost/api/post", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(body),
  });
 }
}

describe("GET /api/post", () => {
 it("check the Get post is correct", async () => {
  const response = await GET();
  const data = await response.json();
  expect(data).toBeInstanceOf(Object);
  expect(data).not.toBeNull();
 });
});

describe("POST /api/post", () => {
 let postId;
 it("should save a new post successfully", async () => {
  const request = new MockNextRequest(PostExample);
  const response = await POST(request);
  const result: PostProp = await response.json();
  postId = result.id;
  expect(result.title).toEqual(PostExample.title);
 });
 afterEach(async () => {
  // Cleanup after each test by deleting the created post
  if (postId) {
   const request = new MockNextRequest({ id: postId }); // Send an object with the id
   await DELETE(request); // Call DELETE with the request
   postId = null; // Clear postId to avoid repeated deletions in future tests
  }
 });
});

describe("PUT /api/post", () => {
 let postId;

 beforeEach(async () => {
  const request = new MockNextRequest(PostExample);
  const response = await POST(request);
  const result: PostProp = await response.json();
  postId = result.id; // Save the created post ID for updating
 });

 it("should update the post successfully", async () => {
  const updatedData = { ...PostExample, title: "Updated Title" }; // Create updated post data
  const request = new MockNextRequest({ id: postId, updatedPost: updatedData });
  const response = await PUT(request);
  const result: PostProp = await response.json();

  expect(result.title).toEqual(updatedData.title);
 });

 afterEach(async () => {
  // Cleanup after each test by deleting the created post
  if (postId) {
   const request = new MockNextRequest({ id: postId });
   await DELETE(request);
   postId = null;
  }
 });
});

describe("DELETE /api/post", () => {
 let postId;

 beforeEach(async () => {
  const request = new MockNextRequest(PostExample);
  const response = await POST(request);
  const result: PostProp = await response.json();
  postId = result.id; // Save the created post ID for deletion
 });

 it("should delete the post successfully", async () => {
  const request = new MockNextRequest({ id: postId });
  const response = await DELETE(request);
  expect(response.status).toBe(200); // Assuming successful deletion returns 204 No Content
 });

 afterEach(async () => {
  // Cleanup after each test by deleting the created post
  if (postId) {
   const request = new MockNextRequest({ id: postId });
   await DELETE(request);
   postId = null;
  }
 });
});
