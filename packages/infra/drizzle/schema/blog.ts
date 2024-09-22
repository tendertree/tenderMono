
import { pgTable, serial, varchar, text, date, integer, boolean } from 'drizzle-orm/pg-core';

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  subject: varchar('subject', { length: 255 }).notNull(),
  imageUrl: text('image_url').notNull(),
  date: date('date').notNull(),
  description: text('description').notNull(),
  views: integer('views').notNull().default(0),
  likes: integer('likes').notNull().default(0),
  isNew: boolean('is_new').default(false),
  isUpdated: boolean('is_updated').default(false),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;
