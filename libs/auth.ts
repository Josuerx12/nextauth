import { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const user = {
          id: "1",
          firstName: "João",
          lastName: "Gomes",
          email: "joao@email.com",
          password: "123456",
          role: "user",
        };

        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.email = user.email as string;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
      }

      return token;
    },
    session({ session, token }) {
      console.log(token);

      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.email = token.email;
      session.user.role = token.role;

      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
