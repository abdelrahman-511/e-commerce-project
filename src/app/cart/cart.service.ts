import { get_usertoken } from "@/utlis/utlis"




export async function get_usercart()
{
    let mytoken = await get_usertoken()
    
    
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , {  
        headers:{ 
            "token": mytoken as string
         }
      } ) ;
    
    let response = await res.json() ;
    // console.log("response = " , response);
    let {numOfCartItems , data : {products , totalCartPrice } , cartId } = response ;
    return { numOfCartItems , products ,totalCartPrice ,cartId }
    
}