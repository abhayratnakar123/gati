"use client";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import React, { useState } from "react";

function Page() {
  const [index, setIndex] = useState<number>(0);
  return (
    <DefaultLayout>
    <div className="  p-10">
      <div className="product">
        <div className="text-content text-white font-sans mt-[80px] mb-[100px] ">
          <h1 className="text-3xl md:text-6xl mb-10 md:w-[700px] leading-normal ">
            The last chatbot you will ever need
          </h1>
          <p className="text-lg md:text-xl mb-8">
            The ultimate AI business intelligence tool.
            <br />
            Any LLM, any document, full control, full privacy.
          </p>
          <div className="button-container mt-4">
            <button className="px-6 py-2 bg-[#09223f] text-white text-lg rounded">
              Download AnythingLLM for Desktop
            </button>
            <p className="mt-2 text-sm">
              for MacOS, Linux, and Windows operating systems
            </p>
          </div>
        </div>
      </div>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GtV99EUKMLM?si=jnWY0c3wRHYl5ihq"
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
        
      ></iframe> */}

      {/* tab */}
      {/* <div className=" text-white flex   justify-center items-center ">
        <div className="bg-gray-200 flex p-1 rounded-lg gap-x-3 ">
          <div
            className={`${
              index === 0
                ? "bg-[#09223f]  rounded-lg text-white"
                : "text-[#09223f] "
            }font-medium px-8 py-2 cursor-pointer`}
            onClick={() => setIndex(0)}
          >
            For me
          </div>
          <div
            className={`${
              index === 1
                ? "bg-[#09223f]  rounded-lg text-white"
                : "text-[#09223f] "
            }font-medium px-5 py-2 cursor-pointer`}
            onClick={() => setIndex(1)}
          >
            For my organization
          </div>
        </div>
      </div> */}

      {/* //section -2 */}
      <div className="flex lg:flex-row items-center justify-center flex-col mt-10 gap-16 mb-10">
        {/* //image */}
        <div>
          <img
            src="/images/first.avif"
            alt=""
            // className="w-[250px] h-[250px]"
          />
        </div>

        {/* content */}
        <div className="text-white flex flex-col gap-y-5 lg:w-[400px] ">
          <div>
            <p className="text-sm font-bold text-[#09223f]">Flexible</p>
            <h1 className="text-3xl">One-click Installation</h1>
          </div>

          <p className="text-lg leading-6 text-[#f5f5f5c7]">
            Install AnythingLLM and it`s full suite of tools as a single
            application on your desktop.
          </p>
          <button className="px-6 py-2 bg-[#09223f] text-white text-lg rounded w-[250px]">
            Install GATI Products
          </button>
        </div>
      </div>

      {/* //section -23 */}
      <div className="flex lg:flex-row-reverse flex-col items-center justify-center mt-[150px] gap-16 mb-10">
        {/* //image */}
        <div>
          <img
            src="/images/test.avif"
            alt=""
            //  className="w-[350px] h-[350px]"
          />
        </div>

        {/* content */}
        <div className="text-white flex flex-col gap-y-5 lg:w-[400px] ">
          <div>
            <p className="text-sm font-bold text-[#3d78bc]">Secure</p>
            <h1 className="text-3xl">Fully Private</h1>
          </div>
          <p className="text-lg leading-6 text-[#f5f5f5c7]">
            Desktop AnythingLLM only talks to the services you explicitly
            connect to and can run fully on your machine without internet
            connectivity.
          </p>
          <button className="px-6 py-2 border-2 border-[#3d78bc]  text-[#3d78bc] text-lg rounded w-[250px]">
            Install GATI Products
          </button>
        </div>
      </div>

      {/* //heading  */}
      <div className="mt-12 mb-12">
        <h1 className="text-white text-5xl flex items-center justify-center">
          Why GATI ?
        </h1>
      </div>

      {/* // section 4 */}

      <div className="flex lg:flex-row flex-col items-center justify-center mt-10 gap-16 mb-10">
        {/* //image */}
        <div>
          <img
            src="/images/third.avif"
            alt=""
            // className="w-[250px] h-[250px]"
          />
        </div>

        {/* content */}
        <div className="text-white flex flex-col gap-y-5 lg:w-[400px] ">
          <div>
            <p className="text-sm font-bold text-[#09223f]">
              Works with the state of the art
            </p>
            <h1 className="text-3xl">Supports custom models</h1>
          </div>

          <p className="text-lg leading-6 text-[#f5f5f5c7]">
            We`t lock you into a single LLM provider. Use enterprise models like
            GPT-4, a custom model, or an open-source model like Llama, Mistral,
            and more.
          </p>
          <button className="px-6 py-2 bg-[#09223f] text-white text-lg rounded w-[250px]">
            Install GATI Products
          </button>
        </div>
      </div>

      {/* //section -5 */}
      <div className="flex lg:flex-row-reverse flex-col items-center justify-center mt-[150px] gap-16 mb-10">
        {/* //image */}
        <div>
          <img
            src="/images/forth.avif"
            alt=""
            //  className="w-[350px] h-[350px]"
          />
        </div>

        {/* content */}
        <div className="text-white flex flex-col gap-y-5 lg:w-[400px] ">
          <div>
            <p className="text-sm font-bold text-[#3d78bc]">
              Unlimited Documents{" "}
            </p>
            <h1 className="text-3xl">More than PDFs</h1>
          </div>
          <p className="text-lg leading-6 text-[#f5f5f5c7]">
            PDFs, word documents, and so much more make up your business - now
            you can use them all.
          </p>
          <button className="px-6 py-2 border-2 border-[#3d78bc]  text-[#3d78bc] text-lg rounded w-[250px]">
            Download GATI Desktop
          </button>
        </div>
      </div>

      {/* //section 6 */}

      <div className="flex lg:flex-row flex-col items-center justify-center mt-10 gap-16 mb-10">
        {/* //image */}
        <div>
          <img
            src="/images/fifth.avif"
            alt=""
            className="lg:w-[500px] lg:h-[500px]"
          />
        </div>

        {/* content */}
        <div className="text-white flex flex-col gap-y-5 lg:w-[400px] ">
          <div>
            <p className="text-sm font-bold text-[#09223f]">Tailored</p>
            <h1 className="text-3xl">Full Customization</h1>
          </div>

          <p className="text-lg leading-6 text-[#f5f5f5c7]">
            With appearance customization and a full developer API, the sky is
            the limit.
          </p>
          <button className="px-6 py-2 bg-[#09223f] text-white text-lg rounded w-[250px]">
            Get GATI cloud
          </button>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
}

export default Page;
