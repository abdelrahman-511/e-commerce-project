import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";



export async function get_usertoken() :Promise <string>
{

    let mycookie = await cookies() ;
    let mytoken = mycookie.get("next-auth.session-token")?.value
    let decodedtoken = await decode({  token:mytoken , secret:process.env.NEXTAUTH_SECRET || "" });

    return decodedtoken?.credentialstoken as string
}