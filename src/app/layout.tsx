import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar/Navbar";
import { Footer } from "./_components/footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { Mysessionprovider } from "./_components/mysessionprovider/mysessionprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E Commerce",
  description: "e commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        
        
        <Mysessionprovider>

            <Navbar />
        
              {children}

            <Footer />
            <Toaster />


        </Mysessionprovider>



      </body>
    </html>
  );
}
