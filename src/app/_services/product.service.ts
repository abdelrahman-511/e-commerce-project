import { productType } from "../_interfaces/product";


export async function get_allproducts() :Promise<productType[]|null>
  {

    try
    {
      let res = await fetch("https://ecommerce.routemisr.com/api/v1/products" ,{
        cache:"force-cache"
       
      } )
      let responsee = await res.json() ;
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
      let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`) ;
      let responee = await res.json();

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

    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category=${id}`);
    let response  = await res.json();
    // console.log("response = ", response);
    return response
  }