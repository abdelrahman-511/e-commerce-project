import { categorytype } from "../_interfaces/product";



export async function get_allcategories() : Promise <categorytype[]>
{

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories") ;
    const response = await res.json() ;
    return response.data
}