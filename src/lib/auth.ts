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
    async session({ session }) {
      const user = await GetCustomer(session.user.email);
      if (user) {
        session.user.id = user.id;
        session.user.phone = user.phone;
        session.user.rank = user.rank;
        session.user.transactions = user.transactions || [];
        session.user.voucher_uses = user.voucher_uses || [];
      } else {
        session.user.id = null;
        session.user.phone = null;
        session.user.rank = null;
        session.user.transactions = [];
        session.user.voucher_uses = [];
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
