"use server"

import { get_usertoken } from "@/utlis/utlis"
import { revalidatePath } from "next/cache";





export async function handle_addtocart(productId : string)
{
    let usertoken :string ;
    usertoken = await get_usertoken()
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , {  
        method:"post" , 
        body: JSON.stringify(  {  productId  } ) ,
        headers:{
            "Content-Type" : "application/json" ,
            "token" : usertoken
        }
      } ) ;

    let response = await res.json()
    // console.log("response = ", response);
    if(response.status==="success")
    {
        return true ;
    }
    return false ;
    
}



export async function removecartitem(id :string)
{
    let mytoken = await get_usertoken()
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , { 
        method:"delete" ,
        headers:{
            "token" : mytoken as string
        }
     }  ) ;

    let response = await res.json();
    // console.log("response = " , response);
    if(response.status==="success")
    {
        revalidatePath("/cart") ;
        return true ;
    }
    return false ;
    
}








export async function clearcart()
{
    let mytoken = await get_usertoken()
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , { 
        method:"delete" ,
        headers:{
            "token" : mytoken as string
        }
     }  ) ;

    let response = await res.json();
    // console.log("response = " , response);
    if(response.message==="success")
    {
        revalidatePath("/cart") ;
        return true ;
    }
    return false ;
    
}









export async function changeitemquantity(id :string , count :number)
{
    let mytoken = await get_usertoken()
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , { 
        method:"put" ,
        headers:{
            "token" : mytoken as string , 
            "Content-Type" : "application/json"
        } , 

        body: JSON.stringify({  count  })

     }  ) ;

    let response = await res.json();   
    // console.log("response = " , response);
    if(response.status==="success")
    {
        revalidatePath("/cart") ;
        return true ;
    }
    return false ;
    
}