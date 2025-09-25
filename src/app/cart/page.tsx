import { get_usertoken } from "@/utlis/utlis";
import { productType } from "../_interfaces/product";
import { get_usercart } from "./cart.service";
import { jwtDecode} from "jwt-decode"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { Removeitembtn } from "./removeitembtn";
import { Changequantitybtn } from "./changequantitybtn";
import Link from "next/link";
import { Clearcartbtn } from "./clearcartbtn";

export type cartitemtype = 
{
    count : number;
    price : number ;
    _id : string ;
    product : productType ;
}

export type carttype = { 
    totalCartPrice : number ;
    numOfCartItems : number ;
    products: cartitemtype [] ;


 }


async function cart ()
{
    const mytoken = await get_usertoken();
    const decodedtoken: { name :string } = jwtDecode(mytoken)
    const usercart : carttype =  await get_usercart()
    
    const { products ,numOfCartItems } = usercart
//    console.log(usercart);
   

    return (
        <>
            <section className="py-6">
                <div className="w-[90%] mx-auto">
                    { numOfCartItems? (  
                        <div className="py-6">
                            <h1 className="text-center font-semibold text-xl">
                                { decodedtoken.name.split(" " ,1) } cart
                            </h1>
                            <div className="flex justify-end w-[80%] mx-auto mt-5">
                                <Clearcartbtn />
                            </div>
                            <div className="w-[80%] mx-auto py-6 mt-5 overflow-auto max-h-[70vh] border  font-semibold">
                                <Table>
                                    <TableCaption>list of your cart items.</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Product</TableHead>
                                                <TableHead className="text-center">Name</TableHead>
                                                <TableHead>Price</TableHead>
                                                <TableHead>Quantity</TableHead>
                                                <TableHead className="text-center">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            { products.map( function(cartitem){ return ( 

                                                <TableRow key={cartitem._id}>
                                                    <TableCell className="">
                                                        <div className="border">
                                                            <img src={cartitem.product.imageCover} alt={cartitem.product.title} />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-center"> {cartitem.product.title.split(" ",3).join(" ")} </TableCell>
                                                    <TableCell>{cartitem.price} EGP</TableCell>
                                                    <TableCell> {cartitem.count} </TableCell>
                                                    <TableCell className="">
                                                        <div className="flex flex-col justify-center items-center gap-4">
                                                            <div className="flex items-center gap-3">
                                                                
                                                                <Changequantitybtn increment={true} newcount={cartitem.count+1} id={cartitem.product.id} />
                                                                <Changequantitybtn  newcount={cartitem.count-1} id={cartitem.product.id} />
                                                            </div>
                                                            <div className="">
                                                                <Removeitembtn id={cartitem.product.id} />
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>

                                            ) } ) }
                                        </TableBody>
                                </Table>
                            </div>
                            <div className="mt-8 flex justify-between w-[80%] mx-auto py-6 items-center">
                                <div className="">
                                    <h3 className=" capitalize font-semibold ">total cart items : { usercart.numOfCartItems }</h3>
                                    <h3 className=" capitalize font-semibold mt-1 ">total price : { usercart.totalCartPrice } EGP</h3>
                                </div>
                                <div>
                                    <Link href="/payment">
                                        <button className="capitalize block bg-black text-white cursor-pointer py-2 px-4 rounded-md font-semibold">checkout</button>
                                    </Link>
                                </div>
                            </div>
                                
                        </div>
                      ) : ( 

                        <div className="h-[70vh] flex justify-center items-center">
                            <h1 className=" text-gray-400 font-semibold text-lg">Your cart is empty 🛒 </h1>
                        </div>

                       ) }
                </div>
            </section>
        </>
    )
}



export default cart ;