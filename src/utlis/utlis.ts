import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";



export async function get_usertoken() :Promise <string>
{

    const mycookie = await cookies() ;
    const mytoken = mycookie.get("next-auth.session-token")?.value
    const decodedtoken = await decode({  token:mytoken , secret:process.env.NEXTAUTH_SECRET || "" });

    return decodedtoken?.credentialstoken as string
}