import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";




export default async function middleware(request :NextRequest)
{

    const is_auth = await getToken({ req:request })
    
    if(is_auth)
    {
        return NextResponse.next()
    }
    return NextResponse.redirect( new URL("/login" , request.url))

}


export const config = 
{
    matcher: ["/" ,"/categories","/products" ,"/productdetails/:path*" , "/category-products/:path*" , "/cart" ,"/payment" , "/allorders" , "/wishlist" ]
}