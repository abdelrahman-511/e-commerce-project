import { Categorycard } from "../_components/categorycard/categorycard";
import { get_allcategories } from "../_services/categories.service"





async function categories()
{

   const allcategories = await get_allcategories();
    return (
        <>
            <section className="py-6">
                <div className="w-[90%] mx-auto py-6">
                    <div className="flex flex-col gap-6 px-6 ">
                        <div className="mb-6">
                            <h1 className=" capitalize font-bold text-3xl text-center">categories</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-4 gap-10">
                            { allcategories.map( function (cate) {return ( <Categorycard category={cate} key={cate._id} /> ) }  ) }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default categories;