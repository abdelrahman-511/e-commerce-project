"use client"

import { useRouter } from "next/navigation";










// var mycookie;

 function is_loggedin(myrouter:any  ,isexist:boolean) 
{
   
   if(isexist == false)
   {
    console.log("llllllllllllll");
    
      myrouter.push('/login')
   }
   
}


export  function Checklogin( { isexist }:any)

{

    var myrouter = useRouter() ;
  
    is_loggedin(myrouter , isexist)



    return (
        <>

        </>
    )
}