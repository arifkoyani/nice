import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const CardOne = () => {
  return (
    <div className="bg-transparent">
      <article className="max-w-sm rounded-xl transition-all duration-800 hover:shadow-[4px_0_4px_rgba(0,0,0,0.2)] bg-[#f2f2f2] overflow-hidden border border-gray-400 flex flex-col h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
           src="/card0.png" // Local image path
           alt="AI Solutions"
           className="object-cover rounded-t-lg"
           width={500} // Provide the width (adjust as needed)
           height={300} // Provide the height (adjust as needed)
           layout="responsive" // Ensures the image scales responsively
           loading="lazy" // Optional: for lazy loading the image
         />
         
        </div>

        <div className="p-6 space-y-1 flex-grow flex flex-col">
          <time dateTime="2025-02-02" className="text-xs font-medium text-gray-500">
            February 2, 2025
          </time>

          <h5 className="text-xl underline-none font-medium text-gray-900 leading-tight pt-3">
            AI-Powered Solutions to Revolutionize Your Business Operations
          </h5>

          <p className="text-sm text-gray-600 pt-2 flex-grow">
            Developing intelligent automation systems and AI-driven solutions that transform the way your business operates.
          </p>

          <button className="group flex items-center space-x-2 pt-6 text-blue-400 hover:text-blue-300 transition-colors">
            <span className="font-semibold">Explore AI Solutions</span>
            <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </article>
    </div>
  );
};

export default CardOne;
