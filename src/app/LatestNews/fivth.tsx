import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Fivth = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <article className="max-w-sm rounded-xl transition-all duration-800 hover:shadow-lg bg-[#23c9ff] overflow-hidden border border-gray-400">
        <div className="relative aspect-[16/9] overflow-hidden">
          

         <Image
           src="/fifth.png" // Local image path (stored in the public directory)
           alt="Mobile Application Development"
           className="object-cover rounded-t-lg"
           width={500} // Set the width (adjust as needed for your design)
           height={300} // Set the height (adjust as needed for your design)
           layout="responsive" // Ensures responsive scaling
           loading="lazy" // Optional: for lazy loading the image
         />
         
        </div>

        <div className="p-6 space-y-2">
          <time dateTime="2025-01-30" className="text-xs font-medium text-gray-500">
            January 30, 2025
          </time>

          <h5 className="text-xl text-black font-semibold leading-tight">
            Mobile Application Development
          </h5>

          <p className="text-sm text-gray-700">
            Designing and developing native mobile applications for iOS and Android
          </p>

          <Link href="/" className="flex items-center pt-14 text-black font-medium">
            Learn More <FiChevronRight className="text-cyan-500 ml-2 text-xl" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Fivth;
