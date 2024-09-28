import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import authOptions from "@/config/auth";

import { logger } from "./logger";

export default async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) {
    logger.info("User is not authenticated, redirecting to login page");
    redirect("/");
  }

  return session;
}
