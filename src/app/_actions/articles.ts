"use server";

import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack/server";

export async function createArticle(data: CreateArticleInput) {
  const user = await stackServerApp.getUser({ or: "redirect" });
  if (!user) {
    throw new Error("User not found");
  }
  // TODO: Replace with actual database call
  console.log("✨ createArticle called:", data);
  return { success: true, message: "Article create logged (stub)" };
}

// Update article
export async function updateArticle(id: string, data: UpdateArticleInput) {
  const user = await stackServerApp.getUser({ or: "redirect" });
  if (!user) {
    throw new Error("User not found");
  }
  // TODO: Replace with actual database update
  console.log("📝 updateArticle called:", { id, ...data });
  return { success: true, message: `Article ${id} update logged (stub)` };
}

// Delete article
export async function deleteArticle(id: string) {
  const user = await stackServerApp.getUser({ or: "redirect" });
  if (!user) {
    throw new Error("User not found");
  }
  // TODO: Replace with actual database delete
  console.log("🗑️ deleteArticle called:", id);
  return { success: true, message: `Article ${id} delete logged (stub)` };
}

// Form-friendly server action: accepts FormData from a client form and calls deleteArticle
export async function deleteArticleForm(formData: FormData): Promise<void> {
  const id = formData.get("id");
  if (!id) {
    throw new Error("Missing article id");
  }

  await deleteArticle(String(id));
  // After deleting, redirect the user back to the homepage.
  redirect("/");
}
