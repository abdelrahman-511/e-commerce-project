"use server"

import { get_usertoken } from "@/utlis/utlis";
import { revalidateTag } from "next/cache";






export async function addto_wishlist( productId :string )
{
    const mytoken = await get_usertoken()
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist" , { 
        method: "post" ,
        headers: {
            "token" : mytoken as string ,
            "Content-Type" : "application/json" ,
        } ,

        body: JSON.stringify({ productId  })


     }  ) ;

    const response = await res.json();
    console.log("response = " , response);
    if(response.status==="success")
    {
        revalidateTag("wishlist")
        return true ;
    }
    return false ;
    
}







export async function get_wishlist( )
{
    const mytoken = await get_usertoken()
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist" , { 
        headers: {
            "token" : mytoken as string ,
            
        } ,
        cache: "force-cache"   ,
        next:{
            tags:["wishlist"]
        }
     }  ) ;

    const response = await res.json();
    // console.log("response = " , response);
    const {data  , count } = response
    
    
        
        
        return { data , count } ;
    
    
    
}






export async function delete_fromwishlist( productid :string)
{
    const mytoken = await get_usertoken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productid}` , { 
        method:"delete" ,

        headers: {
            "token" : mytoken as string ,
            
        } ,

     }  ) ;

    const response = await res.json();
    // console.log("response = " , response);
    if(response.status==="success")
    {
        revalidateTag("wishlist");
        return true ;
    }
    return false ;
    
    
    
    
}