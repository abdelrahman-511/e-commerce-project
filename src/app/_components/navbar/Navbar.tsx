"use client"



import Link from "next/link";
import logo from "@image/freshcart-logo.svg"
import Image from "next/image";
import { useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";




let test:HTMLDivElement

let countt:number = 0;

async function handle_logout()
{
    toast.message("See you back soon !"  , {  position:"top-center" , duration:3000 })
    await signOut({ redirect:true , callbackUrl:"/login"  })
}


export function Navbar ()
{

    const { data :status } = useSession();
    

   const myref =  useRef(test);


   function show()
   {
        if(countt%2==0)
        {
            myref.current?.classList.replace("hidden", "flex");
        }
        else
        {
            myref.current?.classList.replace("flex", "hidden");
        }
        countt++ ;
   }
   
   


    return (
        <>
            

                {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className=""  className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={logo} className="h-8" alt=" Logo" />
                        </Link>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 capitalize font-semibold">
                            
                            <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">home</Link>
                            </li>
                            <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">brands</Link>
                            </li>
                            <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">categories</Link>
                            </li>
                            <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">cart</Link>
                            </li>
                            <li>
                            <Link href="/register" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">register</Link>
                            </li>
                            <li>
                            <Link href="/login" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">login</Link>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                </nav> */}





                <section className="py-4 bg-gray-50">
                    <div className="w-[90%] mx-auto">
                        <nav className="flex justify-between items-center">
                            <div>
                                <Link href="/" >
                                    <Image src={logo} className="" alt=" Logo" />
                                </Link>
                            </div>
                            <div className=" gap-6 capitalize font-semibold hidden lg:flex">
                                {  status&& ( 
                                    <>
                                        <Link href="/" >
                                    home
                                        </Link>
                                        <Link href="/products" >
                                            products
                                        </Link>
                                        <Link href="/categories" >
                                            categories
                                        </Link>
                                        <Link href="/wishlist" >
                                            wishlist
                                        </Link>
                                        <Link href="/allorders" >
                                            orders
                                        </Link>
                                        <Link href="/cart" >
                                            cart
                                        </Link>
                                        <span className="cursor-pointer" onClick={handle_logout}>
                                            logout
                                        </span>
                                    </>
                                 )  }
                                
                                 { !status&& ( 
                                    <>
                                        <Link href="/register" >
                                    register
                                        </Link>
                                        <Link href="/login" >
                                            login
                                        </Link>
                                    </>
                                  )  }


                            </div>
                            <div className="lg:hidden">
                                <div>
                                    <button onClick={show} className="cursor-pointer"><i className="fa-solid fa-bars fa-lg"></i></button>
                                </div>
                            </div>
                        </nav>
                        <div className=" hidden mt-8 py-5 px-3 capitalize font-semibold flex-col gap-2 bg-gray-100 rounded-lg items-center text-lg lg:hidden " ref={myref}  >
                            
                            { status&& ( 
                                <>
                                    <div className="w-full " >
                                <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/" >
                                    home
                                </Link>
                                    </div>
                                    <div className=" w-full " >
                                        <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/products">
                                            products
                                        </Link>
                                    </div>
                                    <div className=" w-full " >
                                        <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/categories">
                                            categories
                                        </Link>
                                    </div>
                                    <div className=" w-full " >
                                        <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/wishlist">
                                            wishlist
                                        </Link>
                                    </div>
                                    <div className=" w-full " >
                                        <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/allorders">
                                            orders
                                        </Link>
                                    </div>
                                    <div className=" w-full  " >
                                        <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/cart">
                                            cart
                                        </Link>
                                    </div>
                                    <div className=" w-full  " >
                                        <span onClick={handle_logout} className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 cursor-pointer ">
                                            logout
                                        </span>
                                    </div>
                                </>
                             ) }

                            { !status&& ( 
                                <>
                                    <div className=" w-full  " >
                                <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/register">
                                    register
                                </Link>
                                    </div>
                                    <div className=" w-full  " >
                                        <Link  className=" block focus:bg-white hover:bg-white  w-full px-3 rounded-md py-2 "  href="/login">
                                            login
                                        </Link>
                                    </div>
                                </>
                             ) }
                        </div>
                    </div>
                </section>




                   

                

        </>
    )
}