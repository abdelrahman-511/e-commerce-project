"use client"

import { toast } from "sonner";
import { addto_wishlist, get_wishlist } from "./wishlist.actions"
import { useState } from "react";







export function Addwishlistbtn ( { id } : { id :string  }  )
{
   
    var [is_added , setisadded] = useState<boolean>(false)
   async function handle_addwishlist()
    {
       
        var res  = await addto_wishlist(id);
        if(res)
        {
            setisadded(true);
            toast.success("Product added successfully to your wishlist" , {position:"top-right"})
        }
        else
        {
            toast.error("error occured")
        }
        
    }



    return ( 
        <>
            <button onClick={handle_addwishlist} className="cursor-pointer"><i className={"fa-solid fa-heart fa-2xl " + (is_added? "text-red-600" :"") }></i></button>
        </>
     )
}