import { db } from './index';
import { InsertBill, billsTable } from './schema';

export async function createBill(data: InsertBill) {
  await db.insert(billsTable).values(data);
}
