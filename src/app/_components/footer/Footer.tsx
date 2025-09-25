import Link from "next/link";




export function Footer ()
{


    return (
        <>
            <section className="bg-gray-100 py-5">
                <div className="w-[90%] mx-auto py-3">
                    <div className="flex justify-between items-baseline ">
                        <div className="flex items-baseline gap-3">
                            <div>
                                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                            </div>
                            <h3 className="capitalize font-bold text-lg">e commerce</h3>
                            
                        </div>
                        <div>
                            <p className="text-gray-500 capitalize">Copyrights © 2025 all rights reserved</p>
                        </div>
                        <div className="flex gap-3">
                            <Link  href="https://www.facebook.com/" >
                                <i className="fa-brands fa-lg fa-facebook"></i>
                            </Link>
                            <Link  href="https://x.com/?lang=en" >
                                <i className="fa-brands fa-lg fa-twitter"></i>
                            </Link>
                            <Link  href="https://github.com/" >
                                <i className="fa-brands fa-lg fa-github"></i>
                            </Link>
                            <Link  href="https://www.instagram.com/" >
                                <i className="fa-brands fa-lg fa-instagram"></i>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}