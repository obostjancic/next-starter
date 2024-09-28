import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DATABASE_URL: z.string().url(),
  },
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
