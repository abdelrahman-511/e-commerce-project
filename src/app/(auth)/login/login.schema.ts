import * as z from "zod"





export const loginschema = z.object( {

    email: z.email("Invalid email format !") ,
    password : z.string("Enter your password ! ").nonempty("Enter your password ! ") , 

} )