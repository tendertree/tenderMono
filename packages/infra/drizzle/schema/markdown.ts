import { pgTable, serial, text, varchar, timestamp, jsonb, integer } from 'drizzle-orm/pg-core';

export const markdownDocuments = pgTable('markdown_documents', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    content: text('content').notNull(),
    author: varchar('author', { length: 100 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    metadata: jsonb('metadata')
});

export const images = pgTable('images', {
    id: serial('id').primaryKey(),
    documentId: serial('document_id').references(() => markdownDocuments.id),
    filename: varchar('filename', { length: 255 }).notNull(),
    path: text('path').notNull(),
    mimeType: varchar('mime_type', { length: 100 }),
    size: integer('size'),
    createdAt: timestamp('created_at').defaultNow().notNull()
});
