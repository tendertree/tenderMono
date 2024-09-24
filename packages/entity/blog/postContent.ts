export interface PostContentProp {
 id: string;
 content: string;
}

// id normally automatically system, so user doesn't care about
export interface PostContentCRUD {
 createPostContent(PostContent: PostContentProp): Promise<PostContentProp>;
 getPostContent(id: string): Promise<PostContentProp | null>;
 updatePostContent(
  id: string,
  PostContent: Partial<PostContentProp>
 ): Promise<PostContentProp | null>;
 deletePostContent(id: string): Promise<boolean>;
}

export class PostContentCRUDImpl implements PostContentCRUD {
 private postCRUD: PostContentCRUD; // Store the injected instance
 constructor(postCRUD: PostContentCRUD) {
  this.postCRUD = postCRUD; // Assign it to the private property
 }
 async createPostContent(
  PostContent: PostContentProp
 ): Promise<PostContentProp> {
  return this.postCRUD.createPostContent(PostContent); // Call the method on the injected instance
 }
 async getPostContent(id: string): Promise<PostContentProp | null> {
  return this.postCRUD.getPostContent(id); // Call the method on the injected instance
 }

 async updatePostContent(
  id: string,
  PostContent: Partial<PostContentProp>
 ): Promise<PostContentProp | null> {
  return this.postCRUD.updatePostContent(id, PostContent); // Call the method on the injected instance
 }
 async deletePostContent(id: string): Promise<boolean> {
  return this.postCRUD.deletePostContent(id); // Call the method on the injected instance
 }
}

//in client normally omit id value
export const PostContentExample: Omit<PostContentProp, "id"> = {
 content: "person",
};
