import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const kimSchema = pgSchema("KimSchema")

export const mySchemaUsers = mySchema.table('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
});
