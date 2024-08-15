"use client"
import { login } from "@/services/apiService/auth/auth.service";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const [email,setEmail]=useState("nthakur")
  const [password,setPassWord]=useState("Test@123")


  const handleSubmit=async()=>{
    try {
      const res=await login({login_input:email,password:password})
    } catch (error) {
      
    }
  }
  return (
    <div className="h-[100vh] w-[100vw] pl-[10rem] pr-[10rem] pt-[10rem]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center">
          <div className="w-[30rem]  backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-[#09223f] text-white">
          <img alt="" src="/images/gati-logo.png" className="h-8 w-auto "  />

            <h2 className="text-2xl font-bold pb-5 mt-10">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 w-full py-2.5 px-4 focus:border-none focus:outline-none"
                  placeholder="Enter Email"
                  required
                  value=""
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 w-full py-2.5 px-4 focus:border-none focus:outline-none" 
                  placeholder="Enter Password"
                  required
                  value=""
                />
              </div>
              <div className="flex items-center justify-between  mt-8 mb-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white bg-gradient-to-br from-[#0f0f6f] via-[#2a2ada] to-[#4a57e2] group-hover:from-[#2f00ff] group-hover:via-[#385cfc] group-hover:to-[#005c99]  focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                  Submit
                </button>
                <div className="flex items-center text-sm">
                  <p>New here?</p>
                  <Link href="/auth/register"className="underline cursor-pointer ml-1">Register</Link>

                </div>
              </div>
            </form>
          </div>
        </div>

        <img src="/images/banner-bg.png" className="w-[]"></img>
      </div>
    </div>
  );
}

export default Page;
