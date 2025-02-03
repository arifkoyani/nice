import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Second = () => {
  return (
    <div className="bg-white h-1/4 ">
      <article className="max-w-sm rounded-xl transition-all duration-800 hover:shadow-[4px_0_4px_rgba(0,0,0,0.2)] bg-[#101820] overflow-hidden border border-gray-400">
        <div className="relative aspect-[16/9] overflow-hidden">

<Image
  src="/second.png" // Local image path
  alt="AI Solutions"
  className="object-cover rounded-t-lg"
  width={500} // Set a specific width (adjust to fit your design)
  height={300} // Set a specific height (adjust to fit your design)
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

          <h5 className="text-xl text-white underline-none font-medium leading-tight pt-3">
            AI Solutions: Revolutionizing Business Operations with Intelligent Automation
          </h5>


          <p className="text-sm text-white pt-2">
    Developing intelligent automations and business&apos;s growth
  </p>

          <Link href="/" className="flex items-center pt-8 text-white">
            Explore AI Solutions <FiChevronRight className="text-blue-500 ml-2 text-xl" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Second;
