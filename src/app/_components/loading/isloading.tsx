



import { ClipLoader } from "react-spinners";



export function Isloading()
{


    return ( 
        <>
            <div className=" h-[400px] flex justify-center items-center">
                <ClipLoader color="#33dec5" size={50} speedMultiplier={1}  />
            </div>
        </>
     )
}


