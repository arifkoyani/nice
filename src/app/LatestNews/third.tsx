import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Third = () => {
  return (
    <div className="bg-white">
      <article className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-xl transition-all duration-800 hover:shadow-[4px_0_4px_rgba(0,0,0,0.2)] bg-[#23c9ff] overflow-hidden border border-gray-400 mx-auto">
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">

<Image
  src="/third.png" // Local image path (stored in the public directory)
  alt="AI Platform"
  className="object-cover rounded-t-lg"
  width={500} // Set the width (adjust to fit your design)
  height={300} // Set the height (adjust to fit your design)
  layout="responsive" // Ensures responsive scaling
  loading="lazy" // Optional: for lazy loading the image
/>

        </div>

        <div className="p-6 space-y-1">
          <time
            dateTime="2025-02-02"
            className="text-xs font-medium text-gray-500"
          >
            February 2, 2025
          </time>

          <h5 className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-tight pt-8">
            One AI Platform. The Future of Customer Service Automation is Here.
          </h5>

          <Link href="/" className="flex items-center pt-10 sm:pt-10 md:pt-14 text-white">
            Learn More <FiChevronRight className="text-white ml-2 text-xl" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Third;
