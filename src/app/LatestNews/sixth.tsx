import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Sixth = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <article className="max-w-sm rounded-xl transition-all duration-800 hover:shadow-lg bg-[#101820] overflow-hidden border border-gray-400 flex flex-col h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
        <Image
  src="https://www.nice.com/_next/image?url=https%3A%2F%2Fresources.nice.com%2Fwp-content%2Fuploads%2F2024%2F08%2F2024-idc-marketscape-ccaas-vendor-report.webp&w=1080&q=80"
  alt="Frontend UI Design"
  className="object-cover rounded-t-lg"
  width={1080} // Set the width (adjust based on actual or desired image size)
  height={720} // Set the height (adjust based on aspect ratio or design)
  layout="responsive" // Ensures responsive scaling
  loading="lazy" // Optional: lazy loading for performance
/>
        </div>

        <div className="p-6 space-y-2 flex-grow flex flex-col">
          <time dateTime="2025-01-30" className="text-xs font-medium text-gray-500">
            January 30, 2025
          </time>

          <h5 className="text-xl text-white font-semibold leading-tight">
            Frontend UI Design
          </h5>

          <p className="text-sm text-gray-300 flex-grow">
            Creating responsive and engaging user interfaces that provide seamless experiences across devices.
          </p>

          <Link href="/" className="flex items-center pt-24 text-white font-medium">
            Learn More <FiChevronRight className="text-cyan-500 ml-2 text-xl" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Sixth;
