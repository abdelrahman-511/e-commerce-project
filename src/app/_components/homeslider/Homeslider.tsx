import Image from "next/image";
import { Myswiper } from "../myswiper/Myswiper";
import blog1 from '@image/blog-img-1.jpeg'
import blog2 from '@image/blog-img-2.jpeg'
import img1 from '@image/slider-image-1.jpeg'
import img2 from '@image/slider-image-2.jpeg'
import img3 from '@image/slider-image-3.jpeg'


export function Homeslider()
{

    return (

        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 px-6 py-5">
                <div className=" lg:col-span-3">
                    <Myswiper imagesList={[ img1.src ,img2.src ,img3.src ]}  flag={false} />
                </div>
                <div className="hidden lg:block lg:col-span-1">
                    <Image src={blog1} alt="" className="h-[200px]" />
                    <Image src={blog2} alt="" className="h-[200px]" />
                </div>
          </div>
        </>

    )
}