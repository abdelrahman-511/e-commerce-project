"use server"

import { get_usertoken } from "@/utlis/utlis"
import { revalidatePath } from "next/cache";





export async function handle_addtocart(productId : string)
{
    var usertoken :string ;
    usertoken = await get_usertoken()
    var res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , {  
        method:"post" , 
        body: JSON.stringify(  {  productId  } ) ,
        headers:{
            "Content-Type" : "application/json" ,
            "token" : usertoken
        }
      } ) ;

    var response = await res.json()
    // console.log("response = ", response);
    if(response.status==="success")
    {
        return true ;
    }
    return false ;
    
}



export async function removecartitem(id :string)
{
    var mytoken = await get_usertoken()
    var res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , { 
        method:"delete" ,
        headers:{
            "token" : mytoken as string
        }
     }  ) ;

    var response = await res.json();
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
    var mytoken = await get_usertoken()
    var res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , { 
        method:"delete" ,
        headers:{
            "token" : mytoken as string
        }
     }  ) ;

    var response = await res.json();
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
    var mytoken = await get_usertoken()
    var res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , { 
        method:"put" ,
        headers:{
            "token" : mytoken as string , 
            "Content-Type" : "application/json"
        } , 

        body: JSON.stringify({  count  })

     }  ) ;

    var response = await res.json();   
    // console.log("response = " , response);
    if(response.status==="success")
    {
        revalidatePath("/cart") ;
        return true ;
    }
    return false ;
    
}