import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { CreateCustomer, GetCustomer } from "./services_api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        if (user.email && user.name) {
          const existingCustomer = await GetCustomer(user.email);
          if (!existingCustomer) {
            await CreateCustomer(user.name, user.email);
          }
        }

        return true;
      } catch (error) {
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});
