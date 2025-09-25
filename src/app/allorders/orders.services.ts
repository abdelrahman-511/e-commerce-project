import { get_usertoken } from "@/utlis/utlis";
import { jwtDecode} from "jwt-decode"
import { ordertype } from "./page";





export async function get_userorders() :Promise <ordertype []>
{
    
    const mytoken = await get_usertoken() ;
    const decodedtoken : { id:string  } = jwtDecode(mytoken) ;
    const res  = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${decodedtoken.id}` , { 
        
      } );
    const response = await res.json();
    // console.log("response = " ,response);
    return response ;
    
}