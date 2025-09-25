"use client"

import Link from "next/link"
import { productprop, productType } from "../_interfaces/product"
import { AddtoCartbtn } from "../_components/addtocartbtn/addtoCartbtn"
import { delete_fromwishlist } from "./wishlist.actions"
import { toast } from "sonner"




export function Wishlist_card({ product } :productprop)
{
    async function handle_removewishlist()
    {
        let is_removed = await delete_fromwishlist(product.id)
        if(is_removed)
        {
            toast.success("Product removed successfully from your wishlist" , {position:"top-right"})
        }
        else
        {
            toast.error("an error occured" , {position:"top-right"})
        }
    }


    return ( 
        <>
            
                <div className="flex py-6 border-b">
                    <div>
                        <div>
                            <img src={product.imageCover} alt={product.title} className="w-[140px] border" />
                        </div>
                        
                    </div>
                    <div className=" w-full flex justify-between items-center px-6">
                        <div className="flex flex-col justify-center h-full gap-5">
                            <h3 className="font-semibold text-lg capitalize text-center"> {product.title.split(" ",4).join(" ")} </h3>
                            <h3> {product.brand.name} </h3>
                            <h5 className="font-semibold">{product.priceAfterDiscount? ( <>

                                        <span className="line-through me-2.5 "> 
                                            {product.price}
                                        </span>
                                        <span>
                                            {product.priceAfterDiscount}
                                        </span>
                                    </> 
                                    ) : ( <> 

                                            {product.price}

                                    </> ) }
                                    <span className="uppercase font-semibold"> egp</span></h5>
                        </div>
                        <div>
                            <AddtoCartbtn id={product.id} />
                            <button onClick={handle_removewishlist} className="capitalize block w-[100%] bg-red-700 text-white cursor-pointer py-1.5 px-4 rounded-md font-semibold mt-6">remove</button>
                        </div>
                    </div>
                </div>
            
        </>
     )
}