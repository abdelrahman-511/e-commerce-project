"use server"

import { cookies } from "next/headers"
import { logindatatype } from "./login.type"






export async function loginhandle(data:logindatatype)
{
    try
    {
       let res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin" , { 

                                method:"post" ,
                                body: JSON.stringify(data) , 
                                headers :
                                {
                                    "Content-Type" : 'application/json'
                                }

                        }  )

        
        let response = await res.json()

        // console.log("response = " , response);
        if(response.message=="success")
        {
            let mycookie = await cookies();
            mycookie.set("user-token" , response.token , { 

                    sameSite:"strict" ,
                    maxAge: 60*60*24 ,

             }  )


            return true ;
        }
        return response.message ;
        


    }


    catch(e)
    {

        console.log("their is an error : ", e);
        

    }


}