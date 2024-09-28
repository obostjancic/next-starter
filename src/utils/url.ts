// import { env } from "@/env/server";

export const getBaseUrl = () => {
  // if (env.NEXT_PUBLIC_APP_URL) {
  //   return env.NEXT_PUBLIC_APP_URL;
  // }

  // if (env.VERCEL_ENV === "production" && env.VERCEL_PROJECT_PRODUCTION_URL) {
  //   return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  // }

  // if (env.VERCEL_URL) {
  //   return `https://${env.VERCEL_URL}`;
  // }

  return "http://localhost:3000";
};
