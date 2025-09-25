import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";



export async function get_usertoken() :Promise <any>
{

    var mycookie = await cookies() ;
    var mytoken = mycookie.get("next-auth.session-token")?.value
    var decodedtoken = await decode({  token:mytoken , secret:process.env.NEXTAUTH_SECRET || "" });

    return decodedtoken?.credentialstoken
}