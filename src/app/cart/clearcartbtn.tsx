"use client"

import { toast } from "sonner";
import { clearcart } from "./cart.actions"



export function Clearcartbtn()
{

    async function handle_clearcart()
    {
        // console.log("clearing the cart ...");
         var is_cleared =  await clearcart() ;
         if(is_cleared)
         {
            toast.success("Cart have been cleared successfully" , { position:"top-right" , duration:3000 } )
         }
         else
         {
            toast.error("an error happend while clearing the cart" , { position:"top-right" , duration:3000 } )
         }
        
    }


    return ( 
        <>
            <button onClick={handle_clearcart} className="capitalize block bg-red-700 text-white cursor-pointer py-2 px-4 rounded-md font-semibold mt-6">clear the cart</button>
        </>
     )
}