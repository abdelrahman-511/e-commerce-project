import { get_usertoken } from "@/utlis/utlis"




export async function get_usercart()
{
    const mytoken = await get_usertoken()
    
    
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , {  
        headers:{ 
            "token": mytoken as string
         }
      } ) ;
    
    const response = await res.json() ;
    // console.log("response = " , response);
    const {numOfCartItems , data : {products , totalCartPrice } , cartId } = response ;
    return { numOfCartItems , products ,totalCartPrice ,cartId }
    
}