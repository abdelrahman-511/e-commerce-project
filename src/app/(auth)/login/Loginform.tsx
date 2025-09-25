"use client"


import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginschema } from "./login.schema";
import { logindatatype } from "./login.type";
import { loginhandle } from "./login.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";








export function Loginform()
{
    
    const myrouter = useRouter();


   const myform =  useForm( {

        resolver: zodResolver(loginschema) ,

   } );



   const {control ,handleSubmit} = myform ; 



   async function loginsubmit(data:logindatatype)
    {
        // console.log(data);

      const ress =  await signIn("credentials" , { ...data , redirect: false  })
        console.log("login response = " ,ress);
        if(ress?.ok)
        {
            toast.success("Welcome to Fresh Cart 🛒 " , { position:"top-center" ,duration:3000 } )
            window.location.href="/"
            console.log(ress);
            
        }
        else
        {
            toast.error("Incorrect email or password" , { position:"top-center" ,duration:3000  })
        }





    //   var res =  await loginhandle(data);
        
    //   if(res===true)
    //     {
    //             toast.success("Welcome to Fresh Cart" , { position:"top-center" ,duration:3000 } )

    //             myrouter.push('/')
    //     }
    //     else
    //     {
    //             toast.error(res , { position:"top-center" ,duration:3000  })
    //     }

       
        
    }





    return (

        <>
            <Form {...myform} >



                <form onSubmit={handleSubmit(loginsubmit)}  className="flex flex-col items-center gap-6 "  >

                    <FormField 
                        control={control}
                        name="email"
                        render={( {field} ) => (
                            <FormItem className="w-full">
                                <FormLabel className="capitalize">email</FormLabel>
                                <FormControl>
                                    <Input type="email"  {...field} className="" />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                        
                    />


                    <FormField
                        control={control}
                        name="password"
                        render={( {field} ) => (
                            <FormItem className="w-full">
                                <FormLabel className="capitalize">password</FormLabel>
                                <FormControl>
                                    <Input type="password"  {...field} />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button className="capitalize text-white font-semibold text-lg mt-6 py-6 w-[45%] sm:w-full">login</Button>


                </form>



            </Form>

        </>
    )
}