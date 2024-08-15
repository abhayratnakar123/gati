import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="subscribe relative -bottom-12 mx-auto w-full max-w-[1096px]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4 rounded-xl bg-[#f5f5f5] p-4 px-6 shadow-default lg:flex-row lg:gap-10 lg:rounded-full">
            <div className="w-full text-lg font-medium text-[#0f0f6f]">
              Subscribe to stay tuned for new updates and latest notifications.
              Let`s do it!{" "}
            </div>
            <div className="py- input-shadow flex w-full gap-4 rounded-full bg-white p-2 pl-4">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="w-full bg-transparent text-base text-black focus:outline-none"
              />
              <button
                type="button"
                value="Subscribe"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary300 bg-[#0f0f6f] p-3 font-medium text-white transition hover:bg-opacity-90 md:px-[30px]"
              >
                <span className="hidden md:block">Subscribe</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="footer bg-[#09223f] pb-15 p-[15px] pt-[50px] lg:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <Link className="block flex-shrink-0" href="/">
                <Image
                  width={150}
                  height={64}
                  src={"/images/gati-logo.png"}
                  alt="logo-white"
                />
              </Link>
              <p className="mt-3 text-base text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="mt-4">
                <div className="text-lg font-semibold text-white">
                  Follow Us
                </div>
                <div className="mt-3 flex gap-0">
                  <Link
                    href="/"
                    className="flex h-10 w-10 items-center justify-center p-2"
                  >
                    <Image
                      className="h-full w-full"
                      src="/images/facebook.svg"
                      width={12}
                      height={12}
                      alt="facebook"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="flex h-10 w-10 items-center justify-center p-2"
                  >
                    <Image
                      className="h-full w-full"
                      src="/images/telegram.svg"
                      width={12}
                      height={12}
                      alt="telegram"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="flex h-10 w-10 items-center justify-center p-2"
                  >
                    <Image
                      className="h-full w-full"
                      src="/images/twitter.svg"
                      width={12}
                      height={12}
                      alt="twitter"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="flex h-10 w-10 items-center justify-center p-2"
                  >
                    <Image
                      className="h-full w-full"
                      src="/images/instagram.svg"
                      width={12}
                      height={12}
                      alt="instagram"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <div className="mb-6 mt-3 text-lg font-semibold text-white">
                Quick Links
              </div>
              <div className="flex flex-col flex-nowrap gap-3">
                <Link
                  href="/about-us"
                  className="w-full text-base text-white"
                >
                  About Us
                </Link>
                <Link href="#" className="w-full text-base text-white">
                  How It Works
                </Link>
                <Link
                  href="/"
                  className="w-full text-base text-white"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="mb-6 mt-3 text-lg font-semibold text-white">
                Quick Links
              </div>
              <div className="flex flex-col flex-nowrap gap-3">
                <Link
                  href="#"
                  className="flex w-full items-center gap-2 text-base text-white"
                >
                  <MapPinIcon className="h-5 w-5" /> Wisconsin Ave, Suite 700{" "}
                  <br />
                  Chevy Chase, Maryland 20815
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center gap-2 text-base text-white"
                >
                  <DevicePhoneMobileIcon className="h-5 w-5" /> (415) 555‑0132
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center gap-2 text-base text-white"
                >
                  <EnvelopeIcon className="h-5 w-5" /> gatiai@xyz.com
                </Link>
              </div>
            </div>

            {/* <div className="col-span-12 lg:col-span-4">
              <div className="mb-6 mt-3 text-lg font-semibold text-white">
                Reach out to us
              </div>
              <div className="flex flex-wrap gap-4 sm:flex-nowrap">
                <div className="box w-full">
                  <label
                    htmlFor="first-name"
                    className=" block text-base font-medium leading-6 text-white"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Full Name"
                      className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 text-sm focus:outline-none sm:leading-6"
                    ></input>
                  </div>
                </div>
                <div className="box w-full">
                  <label
                    htmlFor="first-name"
                    className=" block text-base font-medium leading-6 text-white"
                  >
                    Mobile
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="mobile"
                      placeholder="Enter your Mobile Number"
                      className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 text-sm focus:outline-none sm:leading-6"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-end gap-4">
                <div className="box w-full">
                  <label
                    htmlFor="first-name"
                    className=" block text-base font-medium leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your Email Address"
                      className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 text-sm focus:outline-none sm:leading-6"
                    ></input>
                  </div>
                </div>
                <button
                  type="submit"
                  value="submit"
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full  bg-[#0f0f6f] p-3 px-8 font-medium text-white transition hover:bg-opacity-90"
                >
                  Submit
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
