import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
const Seventh = () => {
  return (
    <>
    
    <div className="bg-white  flex flex-col">
      

      <article className="max-w-sm rounded-xl  transition-all duration-800 hover:shadow-[4px_0_4px_rgba(0,0,0,0.2)]  bg-[#23c9ff]  overflow-hidden border border-gray-400">
        <div className="relative aspect-[16/9] overflow-hidden">
          
        <Image
  src="https://www.nice.com/_next/image?url=https%3A%2F%2Fresources.nice.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1cx-announcement-877x364-1.webp&w=1080&q=80"
  alt="1CX Announcement"
  className="object-cover rounded-t-lg"
  width={1080} // Set the width (based on actual or desired image size)
  height={454} // Set the height (adjust based on aspect ratio)
  layout="responsive" // Ensures responsive scaling
  loading="lazy" // Optional: lazy loading for performance
/>
        </div>

        <div className="p-6 space-y-1">
          <time
            dateTime="2023-01-12"
            className="text-xs font-medium text-gray-500"
          >
            January 30 , 2025
          </time>

          <h5 className="text-xl text-black   underline-none font-medium  leading-tight pt-2">
          Conversational Agents & Chatbots: Enhancing Engagement & Efficiency
          </h5>

          <p className="text-sm text-gray-700">
          Creating interactive conversational agents and chatbots to enhance customer engagement and improve business efficiency.
          </p>

          <Link href="/" className="flex items-center pt-6 text-black  ">
          Learn More <FiChevronRight className="text-cyan-500 ml-2 text-xl " />
          </Link>
        </div>
      </article>
    </div>
    </>

  );
};

export default Seventh;
