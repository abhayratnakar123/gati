import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-[100vh] w-[100vw] pl-[10rem] pr-[10rem] pt-[10rem]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center">
          <div className="w-[30rem]  backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-[#09223f] text-white">
            <h2 className="text-2xl font-bold pb-5">Register</h2>
            <form>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Username
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="Enter your username"
                  required
                  value=""
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="andrew@mail.com"
                  required
                  value=""
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="*********"
                  required
                  value=""
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-[#0f0f6f] via-[#2a2ada] to-[#4a57e2] group-hover:from-[#2f00ff] group-hover:via-[#385cfc] group-hover:to-[#005c99]  focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                  Submit
                </button>
                <div className="flex items-center text-sm">
                  <p>Already have an account?</p>
                  <Link href="/auth/login"className="underline cursor-pointer ml-1">Login</Link>
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

export default page;
