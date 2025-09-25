"use client"

import { Button } from "@/components/ui/button";
import { removecartitem } from "./cart.actions";
import { toast } from "sonner";







export function Removeitembtn({ id } : { id:string })
{
    async function handleremoveitem()
    {
        // console.log("removing ...");
      let is_removed =  await removecartitem(id);
      if(is_removed)
      {
        toast.success("item removed successfully" , { position:"top-right" , duration:3000 } )
      }
      else
      {
        toast.error("failed to remove item" , { position:"top-right" , duration:3000 } )

      }
        
    }

    return ( 
        <>
            <Button onClick={handleremoveitem} variant="destructive" className="cursor-pointer " >Remove</Button>
        </>
     )
}