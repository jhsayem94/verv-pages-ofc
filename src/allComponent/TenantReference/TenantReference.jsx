"use client"
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import PaginationButtons from "../Shared/PaginationButtons/PaginationButtons";

const PageComponents = [Step1, Step2, Step3];

const TenantReference = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = PageComponents.length;
    const CurrentComponent = PageComponents[currentPage];
  
    return (
      <div className="lg:w-[1216px] w-96 mx-auto lg:py-[16px]  py-4">
        <div className="self-stretch h-48 relative bg-white rounded-2xl outline  outline-offset-[-1px] outline-lime-200 overflow-hidden">
    <div className="left-[24px] top-[24px] absolute inline-flex flex-col justify-start items-start gap-4">
        <div className="flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-slate-700 text-3xl font-semibold font-['Inter'] leading-10">John Doe Reference</div>
            <div className="justify-start text-slate-500 text-2xl font-semibold font-['Inter'] leading-7">Introduction</div>
        </div>
        {PageComponents.map((_, i) => (
            <div className="flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed">Steps {i} of 11</div>
            <div className="w-[1168px] inline-flex justify-start gap-3 items-start overflow-hidden">
                <div className={`w-24 h-4 ${(currentPage === i) ? 'bg-lime-600 ':'bg-gray-300'} rounded-[50px]`} />
                <div className={`w-24 h-4 ${(currentPage === i) ? 'bg-lime-600 ':'bg-gray-300'} rounded-[50px]`} />
                {i}
            </div>
        </div>
          ))}
        <div className="flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed">Steps 1 of 11</div>
            <div className="w-[1168px] inline-flex justify-between items-start overflow-hidden">
                <div className="w-24 h-4 bg-lime-600 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
                <div className="w-24 h-4 bg-gray-300 rounded-[50px]" />
            </div>
        </div>
    </div>
</div>
        <div className="flex space-x-2 mb-4 justify-center">
          {PageComponents.map((_, i) => (
            <span  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  currentPage === i
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}>
            Step {i+1}
            </span>
          ))}
        </div>
  
        <div className="mb-4">
          <CurrentComponent />
        </div>
  
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
};

export default TenantReference;