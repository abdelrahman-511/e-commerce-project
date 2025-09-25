

import { productType } from "../_interfaces/product";
import { get_wishlist } from "./wishlist.actions";
import { Wishlist_card } from "./wishlistcard";



// type restype = {
//     count :number ;
//     data : productType [] ;
// } | false


async function wishlist ()
{
    
    let allproducts : productType []
   let {data , count} = await get_wishlist();
    allproducts = data ;

    return ( 
        <>
            <section className="py-6">
                <div className="w-[80%] mx-auto py-6">
                    { count? ( 
                        <div className="bg-gray-100 py-5 rounded-md">
                            <div className="w-[93%] mx-auto">
                                <h1 className="p-4 font-semibold text-3xl capitalize text-center mb-5">my wishlist</h1>
                                {allproducts.map( function( product:productType ){  return <Wishlist_card key={product.id}  product={product}  />  } ) }
                            </div>
                        </div>
                     ) : ( 
                        <div className="flex justify-center items-center h-[60vh]">
                            <h1 className="font-semibold text-xl text-gray-400">your wishlist is empty !</h1>
                        </div>
                      ) }
                </div>
            </section>
        </>
     )
}

export default wishlist;