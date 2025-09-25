import { categorytype } from "../_interfaces/product";



export async function get_allcategories() : Promise <categorytype[]>
{

    var res = await fetch("https://ecommerce.routemisr.com/api/v1/categories") ;
    var response = await res.json() ;
    return response.data
}