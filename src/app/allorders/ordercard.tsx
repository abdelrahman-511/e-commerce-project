import { ordertype } from "./page";








export function Ordercard( { order  } : {  order :ordertype } )
{
    const {cartItems } = order ;
    


    return (
        <>
            <div className=" my-8 py-6 bg-gray-100 rounded-md">
                <div className="w-[90%] mx-auto overflow-auto ">
                    <div className="mb-6">
                        <h3 className="capitalize font-semibold text-lg">order #{order.id} </h3>
                    </div>
                    <div className="border  rounded-md max-h-[210px] min-w-[400px] overflow-auto bg-white">
                        <div className="grid grid-cols-4 border-b  p-3 capitalize font-semibold">
                            <h3 className="text-center me-4"> product</h3>
                            <h3 className="text-center"> name</h3>
                            <h3 className="text-center"> quantity</h3>
                            <h3 className="text-center ms-5">price</h3>
                        </div>
                        { cartItems.map( function(orderitem) { return ( 
                            <div className="grid grid-cols-4 border-b  py-4 font-semibold" key={orderitem._id}>
                                <div className="flex  items-center justify-center">
                                    <img src={orderitem.product.imageCover} alt={orderitem.product.title} className="w-[100px]" />
                                </div>
                                <div className="flex  items-center justify-center">
                                    <h3 className="" > { orderitem.product.title.split(" ",2).join(" ")} </h3>
                                </div>
                                <div className="flex  items-center justify-center">
                                    <h3 className=""> {orderitem.count} </h3>
                                </div>
                                <div className="flex  items-center justify-center">
                                    <h3 className=""> { orderitem.price } </h3>
                                </div>
                            </div>
                        ) } ) }
                    </div>
                    <div className="mt-6 py-5 flex justify-between items-center">
                        { order.isPaid? ( 
                            <div className="capitalize font-semibold">
                                { order.isDelivered? ( 
                                    <h3>shipping status : delivered</h3>
                                   ) : ( 
                                        <h3>shipping status : pending</h3>
                                    )  } 
                                <h3 className="my-3">payment status : paid  </h3>
                                <h3 >payment method : {order.paymentMethodType}  </h3>
                                 
                            </div>
                         ) : ( 
                                <div className="capitalize font-semibold">
                                    { order.isDelivered? ( 
                                    <h3>shipping status : delivered</h3>
                                   ) : ( 
                                        <h3>shipping status : pending</h3>
                                    )  } 
                                    <h3 className="my-3">payment status : not paid  </h3>
                                    <h3 >payment method : {order.paymentMethodType}  </h3>
                                    
                                </div>
                          ) }
                        <h3 className="text-end capitalize font-semibold">total order price : {order.totalOrderPrice}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}