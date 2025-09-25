import { productType } from "../_interfaces/product";


export async function get_allproducts() :Promise<productType[]|null>
  {

    try
    {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/products" ,{
        cache:"force-cache"
       
      } )
      const responsee = await res.json() ;
      return responsee.data ;
    }
    catch(e)
    {
      console.log("their is an error",e);
      return null ;
    }
  }




 export async function get_productdetails(id:string) :Promise<productType|null>
  {

   try
   {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`) ;
      const responee = await res.json();

      return responee.data
   }

   catch(e)
   {
      console.log("their is an error" ,e);
      return null ;
      
   }

  }


  export async function  get_categoryproducts(id:string ): Promise < { 
    data:productType[] ,
    results:number ,
   } >
  {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category=${id}`);
    const response  = await res.json();
    // console.log("response = ", response);
    return response
  }