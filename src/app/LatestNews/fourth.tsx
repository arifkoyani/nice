import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
const Fourth = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <article className="max-w-sm rounded-xl transition-all duration-800 hover:shadow-lg bg-[#f2f2f2] overflow-hidden border border-gray-400">
        <div className="relative aspect-[16/9] overflow-hidden">
        <Image
  src="/fourth.png" // Local image path (stored in the public directory)
  alt="Technology Stacks"
  className="object-cover rounded-t-lg"
  width={500} // Set the width (adjust to fit your design)
  height={300} // Set the height (adjust to fit your design)
  layout="responsive" // Ensures responsive scaling
  loading="lazy" // Optional: for lazy loading the image
/>
        </div>

        <div className="p-6 space-y-2">
          <time dateTime="2025-02-02" className="text-xs font-medium text-gray-500">
            February 2, 2025
          </time>

          <h5 className="text-xl text-black font-semibold leading-tight">
            Technology Stacks
          </h5>

          <p className="text-sm text-gray-700">
            .NET, C#, React, JavaScript, Oracle, MSSQL, Server Virtualization, Server Administration & Management.
          </p>

          <Link href="/" className="flex items-center pt-16 text-black font-medium">
            Learn More <FiChevronRight className="text-cyan-500 ml-2 text-xl" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Fourth;
