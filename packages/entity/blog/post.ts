import { NextRequest, NextResponse } from "next/server";
import { PostContentProp } from "./postContent";
export interface PostProp {
 id: string;
 title: string;
 type: string;
 imageUrl: string;
 date: string;
 description: string;
 views: number;
 likes: number;
 isNew?: boolean;
 isUpdated?: boolean;
}
export interface PostListProp {
 posts: PostProp[];
 total: number;
 page: number;
 pageSize: number;
}

export interface PostCRUD {
 createPost(
  post: Omit<PostProp, "id">,
  content: string
 ): Promise<PostContentProp>;
 getPost(id: string): Promise<PostContentProp | null>;
 getAllPosts(page?: number, pageSize?: number): Promise<PostListProp>;
 getPostsByType(
  type: string,
  page?: number,
  pageSize?: number
 ): Promise<PostListProp>;
 updatePost(
  id: string,
  post: Partial<PostContentProp>
 ): Promise<PostProp | null>;
 deletePost(id: string): Promise<boolean>;
}

export class PostCRUDImpl implements PostCRUD {
 private postCRUD: PostCRUD; // Store the injected instance
 constructor(postCRUD: PostCRUD) {
  this.postCRUD = postCRUD; // Assign it to the private property
 }
 async createPost(
  post: Omit<PostProp, "id">,
  content: string
 ): Promise<PostContentProp> {
  return this.postCRUD.createPost(post, content); // Call the method on the injected instance
 }
 async getPost(id: string): Promise<PostContentProp | null> {
  return this.postCRUD.getPost(id); // Call the method on the injected instance
 }
 async getAllPosts(page?: number, pageSize?: number): Promise<PostListProp> {
  return this.postCRUD.getAllPosts(page, pageSize); // Call the method on the injected instance
 }
 async getPostsByType(
  type: string,
  page?: number,
  pageSize?: number
 ): Promise<PostListProp> {
  return this.postCRUD.getPostsByType(type, page, pageSize); // Call the method on the injected instance
 }
 async updatePost(
  id: string,
  post: Partial<PostProp>
 ): Promise<PostProp | null> {
  return this.postCRUD.updatePost(id, post); // Call the method on the injected instance
 }
 async deletePost(id: string): Promise<boolean> {
  return this.postCRUD.deletePost(id); // Call the method on the injected instance
 }
}

export interface PostSearchParams {
 keyword?: string;
 startDate?: string;
 endDate?: string;
 type?: string;
 sortBy?: "date" | "views" | "likes";
 sortOrder?: "asc" | "desc";
 page?: number;
 pageSize?: number;
}

let posts: PostProp[] = [];

export interface AdvancedPostCRUD extends PostCRUD {
 searchPosts(params: PostSearchParams): Promise<PostListProp>;
 getPostStatistics(): Promise<PostStatistics>;
 getRelatedPosts(postId: string): Promise<PostProp[]>;
 markAsUpdated(id: string): Promise<PostProp | null>;
 markAsNew(id: string): Promise<PostProp | null>;
 batchDeletePosts(ids: string[]): Promise<boolean>;
 batchUpdatePosts(
  posts: Array<{ id: string; updates: Partial<PostProp> }>
 ): Promise<PostProp[]>;
 incrementLikes(id: string): Promise<PostProp | null>;
 incrementViews(id: string): Promise<PostProp | null>;
}

export interface PostStatistics {
 totalPosts: number;
 totalViews: number;
 totalLikes: number;
 mostViewedPost: PostProp;
 mostLikedPost: PostProp;
}

export const PostExample: Omit<PostProp, "id"> = {
 title: "Mock Json Input Test",
 views: 0,
 likes: 0,
 isNew: true,
 type: "",
 imageUrl: "",
 date: "2024",
 description: "When the night this is first file",
};
