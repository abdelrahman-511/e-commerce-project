import { categorytype } from "@/app/_interfaces/product";
import Link from "next/link";







export function Categorycard ( { category }: { category:categorytype } )
{


    return (
        <>
            <Link href={`/category-products/${category._id}`}  className="rounded-md  border" >
                <div className="">
                    <div className="">
                        <div className=" border-b">
                            <img src={category.image} alt={category.name} className="w-full rounded-t-sm h-[270px]" />
                        </div>
                        <div className="py-3">
                            <h3 className="text-center capitalize text-2xl font-semibold"> {category.name} </h3>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}