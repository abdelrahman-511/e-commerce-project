import { nextauthconfig } from "@/nextauth/nextauth.config";
import NextAuth from "next-auth";


const mynextauth = NextAuth(nextauthconfig)



export {mynextauth as GET , mynextauth as POST}