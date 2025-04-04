import { pgTable, text, uuid, timestamp, uniqueIndex } from "drizzle-orm/pg-core";


export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  clerkId: text('clerkId').unique().notNull(),
  name: text('name').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
}, (t) => [uniqueIndex('clerk_id_index').on(t.clerkId)])
