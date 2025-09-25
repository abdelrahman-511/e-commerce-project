import { get_usertoken } from "@/utlis/utlis";
import { jwtDecode} from "jwt-decode"
import { ordertype } from "./page";





export async function get_userorders() :Promise <ordertype []>
{
    let decodedtoken : { id:string ; }
    let mytoken = await get_usertoken() ;
    decodedtoken = jwtDecode(mytoken) ;
    let res  = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${decodedtoken.id}` , { 
        
      } );
    let response = await res.json();
    // console.log("response = " ,response);
    return response ;
    
}