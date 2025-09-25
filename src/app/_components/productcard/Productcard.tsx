import { productprop } from "@/app/_interfaces/product";
import Link from "next/link";
import { AddtoCartbtn } from "../addtocartbtn/addtoCartbtn";
import { Addwishlistbtn } from "@/app/wishlist/addtowishlistbtn";




export function Productcard({product} :productprop )
{


    return (
        <>
            <div className="border py-3 product-card rounded-lg w-[90%] mx-auto sm:w-auto mb-6 sm:mb-0" >
                <Link href={`/productdetails/${product.id}`}  className="" >
                    
                    <div>
                            <div className="product-poster border-b">
                                <img className="w-full rounded-t-lg" src={product.imageCover} alt={product.description} />
                            </div>
                            <div className="product-details py-4 px-3">
                                <h2 className="text-center font-semibold text-lg" >{product.title.split(" ",2).join(" ")}</h2>
                                <h5 className="mt-4 ">{product.category.name}</h5>
                                <div className="flex justify-between mt-5 ">
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
                                    <p className="font-semibold ">{product.ratingsAverage } <i className="fa-solid fa-star text-yellow-400"></i> </p>
                                </div>
                            </div>
                    </div>
                    
                </Link>
                <div className="flex justify-between px-3">
                    <AddtoCartbtn id={product.id}/>
                    <Addwishlistbtn id={product.id} />
                </div>
            </div>
        </>
    )
}