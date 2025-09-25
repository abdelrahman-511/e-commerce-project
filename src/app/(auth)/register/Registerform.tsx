'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod"
import { registerschema } from "./register.schema";
import { registerdatatype } from "./register.type";
import { registerhandle } from "./register.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";













 
export function Registerform ()
{

     let myrouter = useRouter();



    let myform =  useForm(  {
        resolver: zodResolver(registerschema) ,

    } );
    let {control ,handleSubmit} = myform




    async function onsubmit (data:registerdatatype)
    {

        let res = await registerhandle(data);

        if(res===true)
        {
                toast.success("you have been registered succesfully" , { position:"top-center" ,duration:3000 } )
                myrouter.push("/login");
        }
        else
        {
                toast.error(res , { position:"top-center" ,duration:3000  })
        }
    }



    return (
        <>
            <section className="py-5 my-5 mb-8 ">
                <div className=" w-[70%] md:w-[50%] mx-auto py-5">
                    <Form {...myform}>
                        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-6 capitalize" >

                            <FormField
                                control={control}
                                name="name"
                                render={({field}) => (
                                <FormItem>
                                    <FormLabel> name : </FormLabel>
                                    <FormControl>
                                    <Input {...field} type="text" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />


                            <FormField
                                control={control}
                                name="email"
                                render={({field}) => (
                                <FormItem>
                                    <FormLabel> email : </FormLabel>
                                    <FormControl>
                                    <Input {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />


                            <FormField
                                control={control}
                                name="password"
                                render={({field}) => (
                                <FormItem>
                                    <FormLabel> password : </FormLabel>
                                    <FormControl>
                                    <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />


                            <FormField
                                control={control}
                                name="rePassword"
                                render={({field}) => (
                                <FormItem>
                                    <FormLabel> re-password : </FormLabel>
                                    <FormControl>
                                    <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />


                            <FormField
                                control={control}
                                name="phone"
                                render={({field}) => (
                                <FormItem>
                                    <FormLabel> phone :</FormLabel>
                                    <FormControl>
                                    <Input {...field} type="tel" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />

                            <Button className="self-center w-[40%] sm:max-lg:w-[35%] capitalize cursor-pointer mt-5 lg:w-[30%]">register</Button>

                        </form>
                    </Form>
                </div>
            </section>
        </>
    )
}

// 