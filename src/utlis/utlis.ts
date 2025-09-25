import { decode, getToken } from "next-auth/jwt";
import { cookies } from "next/headers";



export async function get_usertoken() :Promise <string>
{
    
    const mycookie = await cookies() ;
    let mytoken = mycookie.get("__Secure-next-auth.session-token")?.value
    if(mytoken)
    {
        const decodedtoken = await decode({  token:mytoken , secret:process.env.NEXTAUTH_SECRET || "" });

        return decodedtoken?.credentialstoken as string
    }
    else
    {
        mytoken = mycookie.get("next-auth.session-token")?.value
        const decodedtoken = await decode({  token:mytoken , secret:process.env.NEXTAUTH_SECRET || "" });

        return decodedtoken?.credentialstoken as string
    }
    
}