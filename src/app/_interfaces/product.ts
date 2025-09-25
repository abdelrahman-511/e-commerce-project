export type productType = {
    id:string ;
    imageCover:string ;
    description :string ;
    price:number;
    title:string ;
    priceAfterDiscount?:number ;
    category: categorytype ;
    brand: brandtype ;
    ratingsAverage: number ;
}

export type categorytype = { 
    _id: string ;
    name: string ;
    slug: string ;
    image: string ;

 }
 export type brandtype = { 
    _id: string ;
    name: string ;
    slug: string ;
    image: string ;

}


export type productprop = 
{
    product: productType ;
}