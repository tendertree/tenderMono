export interface BasicProp {
 id: string;
 type: string;
 name: string;
 data: string;
}
export interface BasicListProp {
 lists: BasicProp[];
 total: number;
 page: number;
 pageSize: number;
}

// id normally automatically system, so usedr doesn't care about
export interface BasicCRUD {
 createBasic(Basic: Omit<BasicProp, "id">): Promise<BasicProp>;
 getBasic(id: string): Promise<BasicProp | null>;
 getAllBasics(page?: number, pageSize?: number): Promise<BasicListProp>;
 getBasicsByType(
  type: string,
  page?: number,
  pageSize?: number
 ): Promise<BasicListProp>;
 updateBasic(id: string, Basic: Partial<BasicProp>): Promise<BasicProp | null>;
 deleteBasic(id: string): Promise<boolean>;
}

export class BasicCRUDImpl implements BasicCRUD {
 private postCRUD: BasicCRUD; // Store the injected instance
 constructor(postCRUD: BasicCRUD) {
  this.postCRUD = postCRUD; // Assign it to the private property
 }
 async createBasic(Basic: Omit<BasicProp, "id">): Promise<BasicProp> {
  return this.postCRUD.createBasic(Basic); // Call the method on the injected instance
 }
 async getBasic(id: string): Promise<BasicProp | null> {
  return this.postCRUD.getBasic(id); // Call the method on the injected instance
 }
 async getAllBasics(page?: number, pageSize?: number): Promise<BasicListProp> {
  return this.postCRUD.getAllBasics(page, pageSize); // Call the method on the injected instance
 }
 async getBasicsByType(
  type: string,
  page?: number,
  pageSize?: number
 ): Promise<BasicListProp> {
  return this.postCRUD.getBasicsByType(type, page, pageSize); // Call the method on the injected instance
 }
 async updateBasic(
  id: string,
  Basic: Partial<BasicProp>
 ): Promise<BasicProp | null> {
  return this.postCRUD.updateBasic(id, Basic); // Call the method on the injected instance
 }
 async deleteBasic(id: string): Promise<boolean> {
  return this.postCRUD.deleteBasic(id); // Call the method on the injected instance
 }
}

export interface BasicSearchParams {
 keyword?: string;
 startDate?: string;
 endDate?: string;
 type?: string;
 sortBy?: "date" | "views" | "likes";
 sortOrder?: "asc" | "desc";
 page?: number;
 pageSize?: number;
}

let posts: BasicProp[] = [];

export interface AdvancedBasicCRUD extends BasicCRUD {
 searchBasics(params: BasicSearchParams): Promise<BasicListProp>;
 getBasicStatistics(): Promise<BasicStatistics>;
 getRelatedBasics(postId: string): Promise<BasicProp[]>;
 markAsUpdated(id: string): Promise<BasicProp | null>;
 markAsNew(id: string): Promise<BasicProp | null>;
 batchDeleteBasics(ids: string[]): Promise<boolean>;
 batchUpdateBasics(
  posts: Array<{ id: string; updates: Partial<BasicProp> }>
 ): Promise<BasicProp[]>;
 incrementLikes(id: string): Promise<BasicProp | null>;
 incrementViews(id: string): Promise<BasicProp | null>;
}

export interface BasicStatistics {
 totalBasics: number;
 totalViews: number;
 totalLikes: number;
 mostViewedBasic: BasicProp;
 mostLikedBasic: BasicProp;
}

//in client normally omit id value
export const BasicExample: Omit<BasicProp, "id"> = {
 name: "Kim",
 type: "person",
 data: "hong",
};
