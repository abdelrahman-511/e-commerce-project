import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode}  from "jwt-decode"

export let nextauthconfig:NextAuthOptions = {
    providers:[  
        Credentials({  
            name:"Fresh Cart 🛒 " ,
           async authorize(credentials, req) {
                
                       let res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {  
                                    method:"post" ,
                                    body: JSON.stringify(credentials) ,

                                    headers: {  
                                        "Content-Type": "application/json"
                                    }

                                }  )

                                let response = await res.json();

                                if(response.message=="success")
                                {
                                    // console.log("response = " ,response);
                                   let detoken: {id:string}  =  jwtDecode(response.token);
                                    
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
                params.token.credentialstoken = params.user.token ;
                params.token.id = params.user.id;
            }

            // console.log('params = ' , params);

            return params.token
            
        },

        session(params) {
            // console.log("token = ", params.token);
            params.session.user.id = params.token.id ;
            
            return params.session ;
        },
      }
      
}