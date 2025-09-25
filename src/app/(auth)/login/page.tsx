import { Loginform } from "./Loginform";



function login ()
 {


  return (
    <>
        <section className="py-6 h-[85vh] flex flex-col justify-center gap-8">
          <h1 className="capitalize text-center font-bold text-2xl">login now !</h1>
          <div className="w-[80%] sm:max-lg:w-[60%] lg:w-[50%]  mx-auto py-8">
              <Loginform />
          </div>
        </section>
    </>
  )

 }


 export default login ;