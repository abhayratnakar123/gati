import { GlobeEuropeAfricaIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Prop{
    title:string;
    description:string;
    type:number
}

function index({title,description,type}:Prop) {
  return (
    <div className=" text-white p-1 rounded-lg   hover:fadeInUp">
      <div
        className="bg-[#09223f] mb-4"
        style={{ padding: "20px", width: "80px", borderRadius: "15px" }}
      >
        {type===1 &&
        <SparklesIcon className="h-10 w-10" />}
        {type===2 &&
        <GlobeEuropeAfricaIcon className="h-10 w-10" />}
        {type===3 &&
        <ShieldCheckIcon className="h-10 w-10" />}
      </div>

      <h3
        className=" font-light mb-2 text-white"
        style={{ fontSize: "25px", fontWeight: 400 }}
      >
       {title}
      </h3>
      <p
        className="text-gray-300"
        style={{ fontSize: "21px", fontWeight: 400 }}
      >
       {description}
      </p>
    </div>
  );
}

export default index;
