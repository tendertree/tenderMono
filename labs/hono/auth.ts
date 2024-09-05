import NextAuth, { NextAuthConfig, NextAuthResult } from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"

const authConfig: NextAuthConfig = {
    providers: [],
    adapter: SupabaseAdapter({
        url: process.env.SUPABASE_URL || "",
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    }),
};
const authResult: NextAuthResult = NextAuth(authConfig);
export const { handlers, auth, signIn, signOut } = authResult;

