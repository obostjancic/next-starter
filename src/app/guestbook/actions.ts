"use server";

import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";

import db from "../../db";
import { InsertGuestbookEntrySchema, guestbookEntries } from "../../db/schema";
import requireAuth from "../../utils/require-auth";

export async function createGuestbookEntry(
  prevState: unknown,
  formData: FormData
) {
  const session = await requireAuth();
  const submission = parseWithZod(formData, {
    schema: InsertGuestbookEntrySchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.insert(guestbookEntries).values({
    message: submission.value.message,
    userId: session.user.id,
  });

  revalidatePath("/guestbook");
}
