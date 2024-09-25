export interface Novel {
  id: number;
  title: string;
  author: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  chapters: Chapter[];
}



