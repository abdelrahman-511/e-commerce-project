"use server"

import { get_usertoken } from "@/utlis/utlis"
import { shipaddresstype } from "./page";
import { get_usercart } from "../cart/cart.service";
import { revalidatePath, revalidateTag } from "next/cache";






export async function create_order(cartid :string , shippingAddress : shipaddresstype )
{
    const mytoken = await get_usertoken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}` , { 
        method:"post" , 
        headers:{
            "token": mytoken as string ,
            "Content-Type" : "application/json" ,

        },
        body:JSON.stringify( { shippingAddress } )
     } ) ; 

    const response = await res.json();
    // console.log("response = " , response);
    if(response.status==="success")
    {
        revalidatePath("/cart") ;
        
        return true ;
    }
    return false;

}




export async function create_visaorder(cartid :string , shippingAddress : shipaddresstype )
{
    const mytoken = await get_usertoken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000` , { 
        method:"post" , 
        headers:{
            "token": mytoken as string ,
            "Content-Type" : "application/json" ,

        },
        body:JSON.stringify( { shippingAddress } )
     } ) ; 

    const response = await res.json();
    // console.log("response = " , response);
    if(response.status==="success")
    {
        
        return response.session.url ;
    }
    return false;

}






export async function handle_usercart()
{
    const response = await get_usercart();
    return response ;

}