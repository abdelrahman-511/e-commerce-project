import { Productcard } from "@/app/_components/productcard/Productcard";
import { get_categoryproducts } from "@/app/_services/product.service";
import { idparamprop } from "@/app/productdetails/[id]/page"

type paramstype = { 
    id:string ;
}



async function categoryproducts( {params} :{ params:Promise<paramstype> } )
{
    const { id } = await params ;
    const response = await get_categoryproducts(id);
    const {results ,data} = response;
    

    return ( 
        <>
            <section className="py-6">
                <div className="w-[90%] mx-auto py-6">
                    <div>
                        
                        {  results? ( 
                            <div className="grid grid-cols-1 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
                                {  data.map( function (product)  { return <Productcard key={product.id}  product = {product}  /> } ) }
                            </div>
                         ) : (  

                            <h1 className="capitalize font-semibold text-2xl">no products for this category</h1>

                           )  }
                        
                    </div>
                </div>
            </section>
        </>
     )
}


export default categoryproducts