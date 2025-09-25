"use client"

import { SessionProvider } from "next-auth/react"




export function Mysessionprovider({children}:any)
{


    return (
        <>
            <SessionProvider >
                { children }
            </SessionProvider>
        </>
    )
}