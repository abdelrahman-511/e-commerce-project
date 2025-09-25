// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { categorytype } from '@/app/_interfaces/product';



type swipprops = {
    spaceBetween?:number ;
    slidesPerView?: number;
    imagesList?: string[] ;
    allcategories?: categorytype[] ;
    flag?:boolean ;
}

export function Myswiper (  { imagesList , slidesPerView = 1 , spaceBetween = 10 ,allcategories ,flag =true } :swipprops ) {




  return (
    <Swiper className=''
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}



     breakpoints={{
          640: {
            slidesPerView: flag? 3 :1 ,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: flag? 3 :1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: flag? 4 :1,
            spaceBetween: 30,
          },
        }}





    >


     

      { allcategories!=undefined? ( allcategories?.map(function (category) { return ( 

            <SwiperSlide key={category._id} > 

              <div className=''>
                <img src={category.image} className='w-full h-[300px] md:h-[400px]' />
                <h2 className='font-semibold text-center mt-2.5'>{ category.name} </h2>
              </div>

            </SwiperSlide>

         ) } ) ) :  (  imagesList?.map(function(src){ return ( <SwiperSlide key={src} > 

            <div>
              <img src={src} className='w-full h-[300px] md:h-[400px]' />
              
            </div>
         </SwiperSlide> ) }) ) }
      
      

    </Swiper>
  );
};