"use server"


import { cookies } from "next/headers";
import { registerdatatype } from "./register.type";




export async function registerhandle(data:registerdatatype)
{
    try
    {
       var res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup" ,{ 

            method:"post" ,
            body: JSON.stringify(data) ,
            headers: {

                "Content-Type" : "application/json" ,

            }

         }) ;
        
        var responsee = await res.json();

        // console.log("response " , responsee);
        if(responsee.statusMsg=='fail')
        {
            return responsee.message ;
        }
            
        return true ; 
    }
    catch(e)
    {
        console.log("their is an error" , e);
        
    }
}