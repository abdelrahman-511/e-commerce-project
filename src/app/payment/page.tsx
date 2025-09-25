"use client"



import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { create_order, create_visaorder, handle_usercart } from "./payment.actions";
import { useEffect, useState } from "react";
import { get_usercart } from "../cart/cart.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";



export type shipaddresstype = {
    details :string ;
    phone: string ;
    city :string ;
}


const addresschema = z.object( { 

    details: z.string("enter your address details !").nonempty("enter your address details !") , 
    phone : z.string("enter your phone !").nonempty("enter your phone !").regex(/^01[0125][0-9]{8}$/ , "invalid phone number format !") , 
    city : z.string("enter your city !").nonempty("enter your city !") ,
 } )

 



function Payment()
{

    
     let pay_visa :boolean = false;

    function click_visabtn()
    {
        pay_visa = true;
    }
    function click_cashbtn()
    {
        pay_visa = false ;
    }



    const myrouter = useRouter()

    const myform = useForm(  { 
        mode:"onBlur" , 
        resolver: zodResolver(addresschema) ,
     } ) ;
     
     
    

    const [cartid  , setcartid ] = useState()

    const { control , handleSubmit } = myform








    async function getting_cart()
    {
       const { cartId } = await handle_usercart();
       setcartid(cartId);
    }




     useEffect(function () {
        getting_cart()
      } ,[] )



    async function order_submit(formdata: FieldValues )
    {
        // console.log(formdata);
        
        if(pay_visa)
        {
            const url =  await create_visaorder(cartid || "" , formdata as shipaddresstype) ;
            if(url)
            {
                myrouter.push(url);
            }
            else
            {
                 toast.error("an error occured" , {position:"top-right" , duration:3000})
            }
        } 
        else
        {
            const is_created = await create_order(cartid||"",formdata as shipaddresstype)
            if(is_created)
            {
                toast.success("your order placed successfully" , {position:"top-right" , duration:3000}) ; 
                myrouter.push("/");
            }
            else
            {
                toast.error("an error occured while placing order" , {position:"top-right" , duration:3000})
            }
        }
        

        
    }





    return ( 
        <>
            <section className="py-6">
                <div className="w-[90%] mx-auto py-6">
                    <div>
                        <div className="form-part w-[50%] mx-auto">
                                <Form {...myform} >


                                    <form onSubmit={handleSubmit(order_submit)}  className="flex flex-col items-center gap-6 "  >

                                        <FormField 
                                            control={control}
                                            name="details"
                                            render={( {field} ) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="capitalize">address details</FormLabel>
                                                    <FormControl>
                                                        <Input type="text"  {...field} className="" />
                                                    </FormControl>
                                                    
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                            
                                        />


                                        <FormField
                                            control={control}
                                            name="phone"
                                            render={( {field} ) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="capitalize">phone</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel"  {...field} />
                                                    </FormControl>
                                                    
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />




                                        <FormField
                                            control={control}
                                            name="city"
                                            render={( {field} ) => (
                                                <FormItem className="w-full">
                                                    <FormLabel className="capitalize">city</FormLabel>
                                                    <FormControl>
                                                        <Input type="text"  {...field} />
                                                    </FormControl>
                                                    
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />



                                        <Button onClick={click_cashbtn} className="capitalize text-white font-semibold text-lg mt-6 py-6  w-full cursor-pointer">place cash order</Button>
                                        <Button onClick={click_visabtn} className="capitalize text-white font-semibold text-lg mt-1 py-6  w-full cursor-pointer">pay with visa</Button>


                                    </form>


                                </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Payment ;