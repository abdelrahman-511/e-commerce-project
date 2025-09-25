"use client"

import { handle_addtocart } from "@/app/cart/cart.actions";
import { Button } from "@/components/ui/button"
import { toast } from "sonner";





export function AddtoCartbtn({ id } : { id:string } )
{
    async function add_tocart()
    {
        // console.log("adding...");
        var is_added = await handle_addtocart(id)
        if(is_added)
        {
            toast.success("Product added successfully to your cart" , { position:"top-right" ,duration:3000 } )
        }
        else
        {
            toast.error("An error occured" , { position:"top-right" ,duration:3000 } )
        }
        
    }

    return (
        <>
            <Button onClick={add_tocart} className="capitalize cursor-pointer">add to cart</Button>
        </>
    )
}