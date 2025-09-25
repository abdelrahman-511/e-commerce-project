import { NextRequest, NextResponse } from "next/server";


type userdatatype = {
    name: string ;
    salary: number ;

}

type userauthtype = {
    email:string ;
    password :string ;

}


var usersdata: userdatatype [] ;
var usersauth:userauthtype[] ;



usersdata = [  

    {  
        name:"abdelrahman" ,
        salary: 19000 ,
    } ,
    {  
        name:"ahmed" ,
        salary: 17000 ,
    } ,
    {  
        name:"ali" ,
        salary: 22000 ,
    } ,
    {  
        name:"malak" ,
        salary: 15000 ,
    } ,


  ]


  usersauth = [  

    {  
        email:"abdelrahmanbakir910@gmail.com" ,
        password:"lolol@123"
    } ,
    {  
        email:"ahmed122@gmail.com" ,
        password:"ahmed123"
    } ,
    {  
        email:"ali3333@gmail.com" ,
        password:"ali4444"
    } ,

    ]




export function GET ()
{
    return NextResponse.json( {  

        message:"success request" ,
        data:usersdata

      } );
}


export async function POST (request:NextRequest)
{
    var data:userauthtype = await request.json()
   var arr =  usersauth.map( function (user) { return (   (data.email==user.email)&&(data.password==user.password)  ? user : false  )  } )
    var check = arr.filter(function (user) {   return user  } )
    if(check.length!=0)
    {
        console.log("check = " , check);
        
        return NextResponse.json({ message:'success' ,data : check[0] })
    }
    console.log(  "check = " , check);
    return NextResponse.json({ message:'incorrect email or passsword' })
    
    
}