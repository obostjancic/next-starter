"use client";

import { Button, CircularProgress } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { status } = useSession();

  if (status === "loading") {
    return <CircularProgress size="sm" />;
  }

  if (status === "authenticated") {
    return (
      <Button color="primary" variant="ghost" onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }

  return (
    <Button color="primary" variant="ghost" onClick={() => signIn("github")}>
      Sign in
    </Button>
  );
}
