import { AddtoCartbtn } from "@/app/_components/addtocartbtn/addtoCartbtn";
import { get_productdetails } from "@/app/_services/product.service";


export type idparamprop =
{
    params : {
        id:string ;
    }
}


async function productdetails( {params} :idparamprop )
{
    let object = await get_productdetails(params.id);    

    return (
        <>
            <section className="product-details py-8">
                <div className="  w-[90%] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-10 sm:gap-8 px-5 sm:px-0">
                        <div className="sm:col-span-1">
                            <img src={object?.imageCover} alt={object?.title} className=""/>
                        </div>
                        <div className="sm:col-span-3">
                            <h1 className="font-semibold text-3xl  capitalize text-center mb-10 ">{object?.title.split(" ",2).join(" ")}</h1>
                            <p className="text-gray-500 mb-5"> {object?.description} .</p>
                            
                            <h5 className="capitalize font-semibold mb-2">category : {object?.category.name}</h5>
                            <h5 className="capitalize font-semibold">brand : {object?.brand.name}</h5>
                            <h5 className="capitalize font-semibold text-xl mt-5">price : {object?.priceAfterDiscount? ( <>

                                    <span className="line-through font-normal me-2.5"> 
                                        {object?.price}
                                    </span>
                                    <span>
                                        {object?.priceAfterDiscount}
                                    </span>
                                </> 
                                ) : ( <> 

                                        {object?.price}

                                </> ) }
                            <span className="uppercase"> egp</span></h5>
                            <AddtoCartbtn id={params.id} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default productdetails ;