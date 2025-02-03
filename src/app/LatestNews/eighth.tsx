import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
const Eighth = () => {
  return (
    <>

      <div className="bg-white  flex flex-col">


        <article className="max-w-sm rounded-xl  transition-all duration-800 hover:shadow-[4px_0_4px_rgba(0,0,0,0.2)]  bg-[#101820]  overflow-hidden border border-gray-400">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="https://www.nice.com/_next/image?url=https%3A%2F%2Fresources.nice.com%2Fwp-content%2Fuploads%2F2024%2F08%2Fletter-from-the-ceo-latest-news-card.webp&w=1080&q=80"
              alt="CEO Letter"
              className="object-cover rounded-t-lg"
              width={1080} // Set the width based on the image's actual size or a desired size
              height={720} // Set the height based on the image's aspect ratio
              layout="responsive" // Ensures responsive scaling
              loading="lazy" // Optional: lazy load for performance
            />
          </div>

          <div className="p-6 space-y-1">
            <time
              dateTime="2023-01-12"
              className="text-xs font-medium text-gray-500"
            >
              January 30 , 2025
            </time>

            <h5 className="text-xl text-white  underline-none font-medium  leading-tight pt-3">
              Data Analysis & Visualization
            </h5>

            <p className="text-sm text-gray-300">
              Transforming raw data into meaningful insights through powerful data analysis and visualization techniques.
            </p>

            <Link href="/" className="flex items-center pt-14 text-white  ">
              Learn More <FiChevronRight className="text-cyan-500 ml-2 text-xl " />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default Eighth;
