/* eslint-disable react/no-unescaped-entities */
"use client";
import Content from "@/components/content";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Tabs from "@/components/tabs";
import React, { useState } from "react";

function Page() {
  const modules = [
    { name: "Python Basics", lectures: ["Introduction to Python"] },
    { name: "Data Types & functions", lectures: ["Python Objects, Number & Booleans, Strings."] },
    { name: "OOPS", lectures: ["Container Objects, Mutability Of Objects"] },
    { name: "Files & Exceptional Handling", lectures: ["Operators"] },
    { name: "Database & Web Api", lectures: ["python Type Conversion"] },
    { name: "Python Libraries", lectures: ["Conditions (If Else, If-Elif-Else)", "Loops (While, For)", "Break And Continue Statement And Range Function"] }
  ];

  return (
    <DefaultLayout>
      <section className=" py-16  sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full mb-16">
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <h3 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-white mb-4">
                Welcome to GATIM's{" "}
                <span className="text-indigo-600">Power Workshop</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Unlock your potential with our comprehensive workshops in
                generative AI, data science, and machine learning. Choose the
                className that best fits your needs and join our growing
                community of learners and professionals.
              </p>

              <div className="mt-10">
                <h3 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-white mb-4">
                  Why Join{" "}
                  <span className="text-indigo-600">Our Workshop?</span>
                </h3>
                <p className="text-gray-300 text-lg max-w-3xl">
                  Joining GATIM's Power Workshop is your first step towards
                  mastering data science and AI. Our carefully designed programs
                  will equip you with the skills and knowledge needed to excel
                  in this rapidly growing field. Whether you're a beginner
                  looking to build a strong foundation or an experienced
                  professional aiming to advance your career, we have the right
                  course for you.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science-p-1080.jpg"
                alt="Data Science Workshop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* About Data Science With Geneative Ai  */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-1 h-[3rem] bg-indigo-600"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-extrabold tracking-tight text-white">
                  About Data Science With Generative AI Course
                </h2>
              </div>
              <div className="text-gray-300 space-y-4 max-w-3xl ml-3">
                <p>
                  Data Science is a multidisciplinary field that combines
                  statistical analysis, machine learning, and computer science
                  to extract meaningful insights from vast amounts of data. In
                  our course, we go beyond traditional data science by
                  incorporating cutting-edge generative AI techniques. Whether
                  you're aiming to become a data scientist, machine learning
                  engineer, or AI specialist, this course will equip you with
                  the knowledge and practical skills needed to excel in the
                  rapidly evolving field of data science and AI.
                </p>
              </div>

              {/* Cards below About Us  */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg>
                  <div>
                    <h3 className="font-bold text-white">Industry Mentorship</h3>
                    <p className="text-white">Network with industry experts and get mentored by them</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg>
                  <div>
                    <h3 className="font-bold  text-white">Project Portfolio</h3>
                    <p className="text-white">Build job-ready profile with dynamic project portfolio</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg>
                  <div>
                    <h3 className="font-bold text-white ">Interview Opportunities</h3>
                    <p className="text-white">Get interviews for desired roles in the top companies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg>
                  <div>
                    <h3 className="font-bold text-white">Alumni Network</h3>
                    <p className="text-white">Leverage high-impact alumni network of PW Skills learners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg>
                  <div>
                    <h3 className="font-bold text-white">Career Growth</h3>
                    <p className="text-white">Get opportunities to elevate and fast-track your career</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg>
                  <div>
                    <h3 className="font-bold text-white">Certification</h3>
                    <p className="text-white">Attain industry renowned certificates for internship and course completion</p>
                  </div>
                </div>
              </div>


            </div>

            <div className="md:w-1/2 p-4">
              <form>
                <div className="grid gap-4">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-1/2 p-2 border border-gray-300 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Surname"
                      className="w-1/2 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <div className="flex space-x-4">
                    <select className="w-1/4 p-2 border border-gray-300 rounded">
                      <option>+91</option>
                      {/* <!-- Add other country codes here --> */}
                    </select>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-3/4 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Current Designation</option>
                    {/* <!-- Add other options here --> */}
                  </select>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Year of Admission</option>
                    {/* <!-- Add other options here --> */}
                  </select>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Current Semester</option>
                    {/* <!-- Add other options here --> */}
                  </select>
                  <input
                    type="text"
                    placeholder="Department"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Program Type</option>
                    {/* <!-- Add other options here --> */}
                  </select>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button
                    type="submit"
                    className="w-full p-2 bg-indigo-600 text-white rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Review Cards  */}
          <section id="testimonies" className="py-10 mt-20">
            <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
              <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                  <div
                    className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                  </div>
                  <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                    It's not just us.
                  </h1>
                  <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                    Here's what others have to say about us.
                  </p>
                </div>
              </div>


              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">


                <ul className="space-y-8">
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                              <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Find God.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                              <p className="text-gray-500 text-md">CEO of Apple</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                            aliquam malesuada bibendum.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                              <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Find God.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                              <p className="text-gray-500 text-md">CEO of Apple</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                            aliquam malesuada bibendum.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>


                <ul className="hidden space-y-8 sm:block">
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/paraga" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Parag Agrawal</h3>
                              <p className="text-gray-500 text-md">CEO of Twitter</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                            semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                            pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                              <p className="text-gray-500 text-md">CEO of Apple</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                            aliquam malesuada bibendum.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/paraga" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Parag Agrawal</h3>
                              <p className="text-gray-500 text-md">CEO of Twitter</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                            semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                            pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                              <p className="text-gray-500 text-md">CEO of Apple</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                            aliquam malesuada bibendum.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>


                <ul className="hidden space-y-8 lg:block">
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/satyanadella" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Satya Nadella</h3>
                              <p className="text-gray-500 text-md">CEO of Microsoft</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                            tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                            eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                              <p className="text-gray-500 text-md">CEO of PayPal</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                            et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/satyanadella" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Satya Nadella</h3>
                              <p className="text-gray-500 text-md">CEO of Microsoft</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                            tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                            eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="text-sm leading-6">
                    <div className="relative group">
                      <div
                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                      </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                        <div
                          className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                          <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                              <p className="text-gray-500 text-md">CEO of PayPal</p>
                            </div>
                          </div>
                          <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                            et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>


              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto p-4">
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="bg-[#202c47] text-white px-4 py-2 rounded">Python</div>
        {["Statistics", "Machine Learning", "Deep learning", "NLP", "Generative AI", "Power BI"].map((item, index) => (
          <div key={index} className="bg-gray-200 px-4 py-2 rounded">{item}</div>
        ))}
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="bg-[#202c47] p-4 flex justify-between items-center">
              <div>
                <div className="text-sm text-white">Module{index + 1}</div>
                <div className="font-medium  text-white ">{module.name}</div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="divide-y">
              {module.lectures.map((lecture, lectureIndex) => (
                <div key={lectureIndex} className="p-4 flex justify-between items-center">
                  <div className="text-white">{`Lecture ${lectureIndex + 1} : ${lecture}`}</div>
                  {lectureIndex === 0 && index === 0 ? (
                    <div className="bg-coral-500 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

        </div>
      </section>
    </DefaultLayout>
  );
}

export default Page;
