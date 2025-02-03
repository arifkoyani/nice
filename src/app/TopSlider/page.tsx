"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FiArrowRight } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  return (
    <div>
      <div className="w-full h-screen mx-auto p-4 relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          transitionTime={900}
          className="w-full h-full"
        >
         <div className="relative w-full h-screen">
  <Image
    src="/mx.png"
    alt="Image 4"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 w-full h-full"
  />
 <div className="relative w-full h-screen flex items-center justify-start pl-8 bg-transparent text-white px-6 md:px-16">
    

      {/* Content */}
      <div className="relative max-w-3xl text-left space-y-6">
        <h5 className="text-sm font-semibold tracking-wide text-white uppercase border-t-2 border-white pt-2">
          AI Customer Service Automation
        </h5>

        <h1 className="text-4xl md:text-4xl font-bold leading-tight">
          Automate Your <br/>Customer Service <br/>at Scale.
        </h1>

        <p className="text-md text-gray-300">
          The AI platform that orchestrates customer service workflows, agents,
          and knowledge—delivering precision and efficiency like never before.
        </p>

        <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
      <span className="font-semibold">Get starts</span>
      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button> 
      </div>
    </div>

</div>

{/* 

<button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
      <span className="font-semibold">Transform CX with AI</span>
      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button> */}

          <div className="relative w-full h-screen">
            <Image
              src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />

<div className="relative w-full h-screen flex items-center justify-start pl-8 bg-transparent text-white px-6 md:px-16">
    

    {/* Content */}
    <div className="relative max-w-3xl text-left space-y-6">
      <h5 className="text-sm font-semibold tracking-wide text-white uppercase border-t-2 border-white pt-2">
        AI Customer Service Automation
      </h5>

      <h1 className="text-4xl md:text-4xl font-bold leading-tight">
        Automate Your <br/>Customer Service <br/>at Scale.
      </h1>

      <p className="text-md text-gray-300">
        The AI platform that orchestrates customer service workflows, agents,
        and knowledge—delivering precision and efficiency like never before.
      </p>

      <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
    <span className="font-semibold">Get starts</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button> 
    </div>
  </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-screen">
            <Image
              src="https://kmslh.com/wp-content/uploads/2021/06/shutterstock_1717584034-2048x1002.jpg.webp" // Replace with the correct image path
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />

<div className="relative w-full h-screen flex items-center justify-start pl-8 bg-transparent text-white px-6 md:px-16">
    

    {/* Content */}
    <div className="relative max-w-3xl text-left space-y-6">
      <h5 className="text-sm font-semibold tracking-wide text-white uppercase border-t-2 border-white pt-2">
        AI Customer Service Automation
      </h5>

      <h1 className="text-4xl md:text-4xl font-bold leading-tight">
        Automate Your <br/>Customer Service <br/>at Scale.
      </h1>

      <p className="text-md text-gray-300">
        The AI platform that orchestrates customer service workflows, agents,
        and knowledge—delivering precision and efficiency like never before.
      </p>

      <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
    <span className="font-semibold">Get starts</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button> 
    </div>
  </div>
          </div>

          <div className="relative w-full h-screen">
            <Image
              src="https://www.nice.com/_next/image?url=https%3A%2F%2Fresources.nice.com%2Fwp-content%2Fuploads%2F2024%2F10%2FGartner-MQ-2024-LP_Desktop_-2880x800-1.jpg&w=3840&q=80" // Replace with the correct image path
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />


<div className="relative w-full h-screen flex items-center justify-start pl-8 bg-transparent text-white px-6 md:px-16">
    

    {/* Content */}
    <div className="relative max-w-3xl text-left space-y-6">
      <h5 className="text-sm font-semibold tracking-wide text-white uppercase border-t-2 border-white pt-2">
        AI Customer Service Automation
      </h5>

      <h1 className="text-4xl md:text-4xl font-bold leading-tight">
        Automate Your <br/>Customer Service <br/>at Scale.
      </h1>

      <p className="text-md text-gray-300">
        The AI platform that orchestrates customer service workflows, agents,
        and knowledge—delivering precision and efficiency like never before.
      </p>

      <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
    <span className="font-semibold">Get starts</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button> 
    </div>
  </div>
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-screen">
            <Image
              src="https://www.nice.com/_next/image?url=https%3A%2F%2Fresources.nice.com%2Fwp-content%2Fuploads%2F2024%2F08%2FInteractions-Mpower-Announcement-2880-x-1000.jpg&w=3840&q=80" // Replace with the correct image path
              alt="Image 3"
              layout="fill"
              objectFit="cover"
            />
            <div className="relative w-full h-screen flex items-center justify-start pl-8 bg-transparent text-white px-6 md:px-16">
    

    {/* Content */}
    <div className="relative max-w-3xl text-left space-y-6">
      <h5 className="text-sm font-semibold tracking-wide text-white uppercase border-t-2 border-white pt-2">
        AI Customer Service Automation
      </h5>

      <h1 className="text-4xl md:text-4xl font-bold leading-tight">
        Automate Your <br/>Customer Service <br/>at Scale.
      </h1>

      <p className="text-md text-gray-300">
        The AI platform that orchestrates customer service workflows, agents,
        and knowledge—delivering precision and efficiency like never before.
      </p>

      <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
    <span className="font-semibold">Get starts</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button> 
    </div>
  </div>
          </div>

          {/* Image 4 */}

          <div className="relative w-full h-screen">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D10AQHYqK4j3v9gfQ/image-shrink_800/image-shrink_800/0/1735909220655?e=2147483647&v=beta&t=1TM47e_U_t5gFgn_S8BkkLxXoZvA4CNljePipShfbpM"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
           <div className="relative w-full h-screen flex items-center justify-start pl-8 bg-transparent text-white px-6 md:px-16">
    

    {/* Content */}
    <div className="relative max-w-3xl text-left space-y-6">
      <h5 className="text-sm font-semibold tracking-wide text-white uppercase border-t-2 border-white pt-2">
        AI Customer Service Automation
      </h5>

      <h1 className="text-4xl md:text-4xl font-bold leading-tight">
        Automate Your <br/>Customer Service <br/>at Scale.
      </h1>

      <p className="text-md text-gray-300">
        The AI platform that orchestrates customer service workflows, agents,
        and knowledge—delivering precision and efficiency like never before.
      </p>

      <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
    <span className="font-semibold">Get starts</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button> 
    </div>
  </div>
          </div>
          <div className="relative w-full h-screen">
            <Image
              src="https://resources.nice.com/wp-content/uploads/2024/10/HP-Latest-News-Interactions-2025-877x364-1.jpg"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
            <div className="relative w-full h-screen flex items-center justify-start pl-8 bg-transparent text-white px-6 md:px-16">
    

    {/* Content */}
    <div className="relative max-w-3xl text-left space-y-6">
      <h5 className="text-sm font-semibold tracking-wide text-white uppercase border-t-2 border-white pt-2">
        AI Customer Service Automation
      </h5>

      <h1 className="text-4xl md:text-4xl font-bold leading-tight">
        Automate Your <br/>Customer Service <br/>at Scale.
      </h1>

      <p className="text-md text-gray-300">
        The AI platform that orchestrates customer service workflows, agents,
        and knowledge—delivering precision and efficiency like never before.
      </p>

      <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 hover:border font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] space-x-2 transition-colors">
    <span className="font-semibold">Get starts</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button> 
    </div>
  </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
