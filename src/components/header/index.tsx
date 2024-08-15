"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    // <header
    //   style={{
    //     backgroundColor: "#09223f",
    //     margin: "0 50px",
    //     borderRadius: "20px",
    //     // padding:"10px",
    //     marginTop: "20px",
    //     position: "fixed",
    //     top: 15,
    //     left: 0,
    //     right: 0,
    //     zIndex: 999,
    //     display: mobileMenuOpen ? "none" : "",
    //   }}
    // >
    <header className={` lg:mx-[150px] dark:bg-[#09223f] bg-[#09223f] sm:mx-[10px] sm:mt-[10px] rounded-[20px] mt-[20px] fixed top-[15px] left-0 right-0 z-[999] ${mobileMenuOpen ? 'hidden' : ''}`}>
    {/* <!-- Content here --> */}
  {/* </header> */}
  

       {/* <header className={`bg-[#09223f] mx-[150px] sm:mx-[50px] rounded-[20px] mt-[20px] fixed top-[15px] left-0 right-0 z-[999] ${mobileMenuOpen ? 'hidden' : ''}`}> */}
      <nav
        aria-label="Global"
        className="mx-auto flex  items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/images/gati-logo.png" className="h-8 w-auto "  />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`link    ${pathname === "/" ? " active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`link    ${pathname === "/about-us" ? " active" : ""}`}
          >
            AboutUs
          </Link>
          <Link
            href="/products"
            className={`link    ${pathname === "/products" ? " active" : ""}`}
          >
            Products
          </Link>
          <Link
            href="/explore"
            className={`link    ${pathname === "/explore" ? " active" : ""}`}
          >
            Explore
          </Link>
          <Link
            href="/workshope"
            className={`link    ${pathname === "/workshop" ? " active" : ""}`}
          >
            Workshope
          </Link>
          <Link
            href="/contact-us"
            className={`link    ${pathname === "/contact-us" ? " active" : ""}`}
          >
            Contact us
          </Link>
          <Link
            href="/auth/login"
            className={`link    ${pathname === "/auth/login" ? " active" : ""}`}
          >
            Log in
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#2b2c68] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/images/gati-logo.png" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y ">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#2b2c68]"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#2b2c68]"
                >
                  About us
                </Link>
                <Link
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#2b2c68]"
                >
                  Products
                </Link>
                <Link
                  href="/explore"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#2b2c68]"
                >
                  Explore
                </Link>
                <Link
                  href="/workshope"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#2b2c68]"
                >
                Workshope
                </Link>
                <Link
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#2b2c68]"
                >
                  Contact us
                </Link>
              </div>
              <div className="py-6 mt-2 mt-color-white">
                <Link
                  href="/auth/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#2b2c68] border-top-white"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
