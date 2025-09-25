import { nextauthconfig } from "@/nextauth/nextauth.config";
import NextAuth from "next-auth";


var mynextauth = NextAuth(nextauthconfig)



export {mynextauth as GET , mynextauth as POST}