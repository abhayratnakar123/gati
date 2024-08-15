"use client";
import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return(
        <>
         <Header />
        <div className="mt-20">

         {children}
         </div>
         <Footer/>
        </>
    )
}