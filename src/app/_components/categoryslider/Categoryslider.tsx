import { get_allcategories } from "@/app/_services/categories.service"
import { Myswiper } from "../myswiper/Myswiper"




export default async function Categoryslider()
{

    let allcategories = await get_allcategories()

    return (
        <>
            <div className="px-6">
                <Myswiper slidesPerView={2} spaceBetween={10} allcategories={allcategories} />
                
            </div>
        </>
    )
}