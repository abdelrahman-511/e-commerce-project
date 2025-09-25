"use client"

import { useState } from "react"
import { productType } from "../_interfaces/product"
import { Productcard } from "../_components/productcard/Productcard"




export function Products_search(  { data } : { data:productType[]|null }  )
{
    var [searchvalue ,setsearchvalue] = useState("")
    // console.log(data);
    

    function handlesearchvalue(e:any)
    {
        setsearchvalue(e.target.value)
        
    }
    
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="search-part w-[80%] mx-auto py-5">
                     <input type="text" onChange={handlesearchvalue} className="border-2 border-gray-200 rounded-md w-full block p-2" value={searchvalue} placeholder="Search for a Product Name" />
                </div>
                <div className="display-part py-5 mt-4 px-8">
                    {searchvalue=="" ? ( 
                        <h1 className="capitalize font-bold text-center text-4xl py-5">all products</h1>
                     ) : ( 
                        <h1 className=" font-bold text-center text-3xl py-5">Search For : <span className="font-medium"> {searchvalue} </span> </h1>
                      )  }
                    <div className="grid grid-cols-1 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-4 gap-10 py-5 mt-6">
                        {data?.map(function (product) { return ( 
                            
                            product.title.toLowerCase().includes(searchvalue.toLowerCase())&& <Productcard product= {product} key={product.id} /> 
                            
                            )  }   )  }
                    </div>
                </div>
            </div>
        </>
    )
}