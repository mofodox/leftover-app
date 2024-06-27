import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const billsTable = sqliteTable('bills', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  description: text('content'),
  amount: real('amount'),
  userId: text('userId'),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export type InsertBill = typeof billsTable.$inferInsert;
export type SelectBill = typeof billsTable.$inferSelect;
