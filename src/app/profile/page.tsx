import { getServerSession } from "next-auth";

import authOptions from "@/config/auth";
import requireAuth from "@/utils/require-auth";

export default async function Profile() {
  await requireAuth();
  const session = await getServerSession(authOptions);

  return <pre>{JSON.stringify(session)}</pre>;
}
