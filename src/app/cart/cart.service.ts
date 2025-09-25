import { get_usertoken } from "@/utlis/utlis"




export async function get_usercart()
{
    var mytoken = await get_usertoken()
    
    
    var res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" , {  
        headers:{ 
            "token": mytoken as string
         }
      } ) ;
    
    var response = await res.json() ;
    // console.log("response = " , response);
    var {numOfCartItems , data : {products , totalCartPrice } , cartId } = response ;
    return { numOfCartItems , products ,totalCartPrice ,cartId }
    
}