import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    };
  }
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  }
}
