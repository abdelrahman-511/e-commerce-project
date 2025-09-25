import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode}  from "jwt-decode"

export const nextauthconfig:NextAuthOptions = {
    providers:[  
        Credentials({  
            name:"Fresh Cart 🛒 " ,
           async authorize(credentials, req) {
                
                       const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {  
                                    method:"post" ,
                                    body: JSON.stringify(credentials) ,

                                    headers: {  
                                        "Content-Type": "application/json"
                                    }

                                }  )

                                const response = await res.json();

                                if(response.message=="success")
                                {
                                    // console.log("response = " ,response);
                                   const detoken: {id:string}  =  jwtDecode(response.token);
                                    
                                    return {  
                                        ...response.user ,
                                        token: response.token ,
                                        id: detoken.id ,
                                     }
                                }

                                // console.log("their is an error : ",response);
                                
                                return null ;


                                
            },

            credentials:{ 


                email: {  type:"email", label:"Email" } ,

                password: {  type:"password",  label: "Password"  }


              }

          }) ,
     ] ,

     pages: { 
        signIn:'/login'
      } ,

    
      callbacks:{
        
        jwt(params) {


            if(params.user)
            {  
                 const userdata1  = params.user as unknown
                 const userdata2 = userdata1 as { token :string ;   id :string}
                 
                params.token.credentialstoken = userdata2.token ;
                params.token.id = userdata2.id;
            }

            // console.log('params = ' , params);

            return params.token
            
        },

        session(params) {
           
            
                
            
            
            return params.session ;
            // console.log("token = ", params.token);
            
            
            
        },
      }
      
}