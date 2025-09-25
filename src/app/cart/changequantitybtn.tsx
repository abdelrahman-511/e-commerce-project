"use client"

import { Button } from "@/components/ui/button"
import { changeitemquantity, removecartitem } from "./cart.actions";
import { toast } from "sonner";





export function Changequantitybtn({ increment = false , newcount, id } : { increment?:boolean ;   newcount :number ;  id :string}  )
{
    async function handle_changequantity()
    {
       if(newcount===0)
       {
          var is_removed =  await removecartitem(id) ;
          if(is_removed)
          {
            toast.success("item removed successfully" , { position:"top-right" , duration:3000 } )
          }
          else
          {
             toast.error("failed to remove item" , { position:"top-right" , duration:3000 } )

          }
       }
       else
       {
             await changeitemquantity(id , newcount) ;
       }
        
    }

    return ( 
        <>
            <Button onClick={handle_changequantity} className="cursor-pointer"> { increment? "+" : "-" }  </Button>
        </>
     )
} 