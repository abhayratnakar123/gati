// src/components/Tabs.js
import React, { useState } from "react";

const Tabs = ({ tabs, onSelect }: any) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    onSelect(tab);
  };

  return (
    <div className="flex space-x-4  p-2 rounded-lg">
      {tabs.map((tab: any) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            activeTab === tab
              ? "bg-[#09223f] text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
