import * as z from "zod";






export const registerschema = z.object({ 

    name : z.string("This field is required !").nonempty("Enter your name !").min(3,"Name must be at least 3 characters !").max(20,"Name must be at most 20 characters !") ,
    email : z.email("invalid email format !") ,
    password : z.string("This field is required !").nonempty("Enter a password !").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character !") ,
    rePassword : z.string("This field is required !").nonempty("renter your password !") , 
    phone : z.string("This field is required !").nonempty("Enter your phone !").regex(/^01[0125][0-9]{8}$/ , "invalid phone number format !")


 }).refine(function (obj){ 

    return obj.rePassword===obj.password ;

  }  , { path:["rePassword"] , error:"Password does not match !"  } )
