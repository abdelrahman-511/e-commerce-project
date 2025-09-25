import { revalidateTag } from "next/cache";
import { cartitemtype } from "../cart/page";
import { shipaddresstype } from "../payment/page";
import { get_userorders } from "./orders.services";
import { Ordercard } from "./ordercard";


export type ordertype = {
    id : number;
    isDelivered :boolean ;
    isPaid : boolean ;
    paymentMethodType : string ;
    shippingAddress : shipaddresstype ;
    totalOrderPrice : number ;
    cartItems : cartitemtype []
}


async function orders()
{   
    
    let allorder = await get_userorders()

    return ( 
        <>
            <section className="py-6">
                <div className="w-[90%] mx-auto py-6">
                    { (allorder.length==0)? ( 
                        <div className="flex h-[60vh] justify-center items-center">
                            <h1 className="font-semibold text-gray-400"> you have no orders !</h1>
                        </div>
                     ) : ( 
                        <div className=" p-6 w-[80%] mx-auto">
                            {allorder.map( function (order)  { return <Ordercard order={order} key={order.id} /> } )}
                        </div>
                      ) }
                </div>
            </section>
        </>
     )
}



export default orders ;