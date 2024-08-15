"use client"
import { login } from "@/services/apiService/auth/auth.service";
import Link from "next/link";
import React, { useState } from "react";
import OtpInput from "react-otp-input";


function Page() {
  const [email,setEmail]=useState("nthakur")
  const [password,setPassWord]=useState("Test@123")
  const [otp, setOtp] = useState<string>("");



  const handleSubmit=async()=>{
    try {
    //   const res=await login({login_input:email,password:password})
    } catch (error) {
      
    }
  }
  return (
    <div className="h-[100vh] w-[100vw] pl-[10rem] pr-[10rem] pt-[10rem]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center">
          <div className="w-[30rem]  backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-[#09223f] text-white">
          <img alt="" src="/images/gati-logo.png" className="h-8 w-auto "  />

            <h2 className="text-2xl font-bold pb-5 mt-8">OTP Verification</h2>
            <form>
            {/* <div className="mb-4">
                      <label className="mb-1  block text-base font-medium text-white dark:text-white">
                        Email
                      </label>
                      <div className="relative mb-10">
                        <input
                          disabled
                        //   value={searchParams.get("email") ?? ""}
                          type="name"
                          placeholder="xyz@gmail.com"
                          className="w-full rounded-[5px] border !border-[#E2E2E2]  bg-white py-2.5 pl-2.5 pr-10 text-sm text-white placeholder-[#696D69] outline-none focus:border-primary300 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary300"
                        />
                      </div>
                    </div> */}

                <p className="w-full text-center text-base  text-white mb-5">
                      Please enter OTP  <br />
                      via email to continue
                    </p>
                <div className="OTP-input text-center mb-5">

                <OtpInput
                        value={otp}
                        onChange={(otp: string) => setOtp(otp)}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        inputType="tel"
                      />
              </div>
              <div className="flex items-center justify-between mb-4 mt-5">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white bg-gradient-to-br from-[#0f0f6f] via-[#2a2ada] to-[#4a57e2] group-hover:from-[#2f00ff] group-hover:via-[#385cfc] group-hover:to-[#005c99]  focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                  Continue
                </button>
               
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
