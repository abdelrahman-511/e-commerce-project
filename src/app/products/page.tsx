import { get_allproducts } from "../_services/product.service";
import { Products_search } from "./productsSearch";





export default async function products()
{
    var all_products = await get_allproducts();
   
   

    return (
        <>
            <section className="py-8">
                <div className="w-[90%] mx-auto ">
                   <Products_search data={all_products} />
                </div>
            </section>
        </>
    )
}