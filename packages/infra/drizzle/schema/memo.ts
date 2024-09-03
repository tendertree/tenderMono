import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const memos = pgTable('memos', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    created_at: timestamp('created_at').defaultNow().notNull()
});
