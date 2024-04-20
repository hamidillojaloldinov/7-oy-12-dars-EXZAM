import { db } from "../db";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET)
  new Error("Missing github keys");
export const {
  handlers: { GET, POST },
  auth,
  signout,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
});
