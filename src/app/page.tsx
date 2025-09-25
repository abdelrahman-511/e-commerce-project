
import { lazy, Suspense } from "react";
// import { Categoryslider } from "./_components/categoryslider/Categoryslider";
import { Homeslider } from "./_components/homeslider/Homeslider";
import { Myswiper } from "./_components/myswiper/Myswiper";
import { Productcard } from "./_components/productcard/Productcard";
import { productType } from "./_interfaces/product";
import { get_allproducts } from "./_services/product.service";

import Image from "next/image";
import { Isloading } from "./_components/loading/isloading";
import { cookies, headers } from "next/headers";





   const Categoryslider = lazy(() => import ('./_components/categoryslider/Categoryslider'))



 async function home ()
 {

     

   
    

  const allproducts = await get_allproducts();
  // console.log(allproducts);
  

  return (
    <>
      <div className="flex flex-col gap-10 py-6">
        <Homeslider />

        <Suspense fallback={<Isloading />} >
          <Categoryslider />
        </Suspense>
      </div>

        <section className="py-8">
            <div className="my-container w-[90%] mx-auto p-8">
              <div className="grid grid-cols-1 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-4 gap-10">

                  {allproducts?.map(function (product) { return <Productcard product={product} key={product.id} /> })} 

              </div>
            </div>
        </section>
        
    </>
  )

 }

 export default home ;