"use client";
import { FiArrowRight } from "react-icons/fi";
import React from "react";
import Image from "next/image"; // Import Image component from next/image
import { FlipWords } from "../ui/flip-words";

const words = ["Backend", "Frontend", "AI-Solutions"];

export default function CXone() {
  return (
    <div className="py-6 mb-16">
      <section className="flex flex-col items-center text-center py-16 px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          <span className="text-3xl md:text-6xl w-14 font-semibold text-[#23c9ff] mb-1">
            GET
          </span>
          <FlipWords words={words} className="w-12 py-5 " /> <br />
          The AI platform for customer service automation.
        </div>
        <p className="text-lg text-gray-600 max-w-4xl py-4 text-justify">
          E-Z Tech is a minority woman-owned, cutting-edge tech startup specializing in the development of advanced AI-driven solutions. Our team comprises highly skilled developers with expertise in computer science, artificial intelligence, and software engineering, delivering innovative software and intelligent automation systems. Beyond software, we provide top-tier IT hardware and networking support, along with smart hands services for seamless on-site technical assistance. By establishing our presence on Field Nation, we aim to amplify our brand visibility and secure work orders that leverage the expertise of our certified and highly trained technicians.
        </p>
      </section>

      <div className="flex justify-center items-center flex-wrap gap-4">
        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://cdn2.iconfinder.com/data/icons/ux-and-ui-astute-vol-1/512/Full_Stack_Developer-512.png"
              alt="Backend Software Development"
              width={144} // set width
              height={144} // set height
              className="rounded-full"
              loading="lazy"
              layout="intrinsic" // or 'responsive' if you want responsive scaling
            />
          </div>
          <span className="px-4 ">
            <h2 className="text-[#00B6E6] text-2xl font-bold mb-4 uppercase tracking-wide">
              Backend Software Development
            </h2>
            <p className="text-gray-990 text-lg">
              Developing RESTful APIs and database administration to ensure robust backend systems that power your applications
            </p>
          </span>
        </div>

        <div className="flex flex-col bg-transparent items-center text-center max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/12286/12286033.png"
              alt="Frontend UI Design"
              width={144} // set width
              height={144} // set height
              className="bg-transparent rounded-full"
              loading="lazy"
              layout="intrinsic" // or 'responsive'
            />
          </div>
          <span className="px-4 ">
            <h2 className="text-[#00B6E6] text-2xl font-bold mb-4 uppercase tracking-wide">
              Frontend UI Design
            </h2>
            <p className="text-gray-990 text-lg">
              Creating responsive and engaging user interfaces that provide seamless experiences across devices.
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKnWkTDCb55_y_6jPtgfedVVln259EViG9Q&s"
              alt="Full Stack Development"
              width={144} // set width
              height={144} // set height
              className="rounded-full"
              loading="lazy"
              layout="intrinsic" // or 'responsive'
            />
          </div>
          <span className="px-4 ">
            <h2 className="text-[#00B6E6] text-2xl font-bold mb-4 uppercase tracking-wide">
              Full Stack Development
            </h2>
            <p className="text-gray-990 text-lg">
              Providing end-to-end development, from backend to frontend, to deliver comprehensive solutions for your needs.
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMScATuAPTbnZt4BZrfN5qhiL9r9Jm29aIQ&s"
              alt="AI Solutions"
              width={144} // set width
              height={144} // set height
              className="rounded-full"
              loading="lazy"
              layout="intrinsic" // or 'responsive'
            />
          </div>
          <span className="px-4 ">
            <h2 className="text-[#00B6E6] text-2xl font-bold mb-4 uppercase tracking-wide">
              AI Solutions
            </h2>
            <p className="text-gray-990 text-lg">
              Developing intelligent automation systems and AI-driven solutions to revolutionize your business operations.
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://avatar-prod-us-east-2.webexcontent.com/Avtr~V1~1eb65fdf-9643-417f-9974-ad72cae0e10f/V1~1a08968daf428f4f5d1ce0f04de95eb40bf8d6d8cb5a0463a6f858f52e3a9df9~49713ad2dabe4cb2a6f83a05c6d6e4f5"
              alt="Conversational Agents & Chatbots"
              width={144} // set width
              height={144} // set height
              className="rounded-full"
              loading="lazy"
              layout="intrinsic" // or 'responsive'
            />
          </div>
          <span className="px-4 ">
            <h2 className="text-[#00B6E6] text-2xl font-bold mb-4 uppercase tracking-wide">
              Conversational Agents & Chatbots
            </h2>
            <p className="text-gray-990 text-lg">
              Creating interactive conversational agents and chatbots that enhance customer engagement and improve business efficiency.
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://img.freepik.com/premium-vector/data-visualization-icon-vector-image-can-be-used-data-analytics_120816-213553.jpg"
              alt="Data Analysis & Visualization"
              width={144} // set width
              height={144} // set height
              className="rounded-full"
              loading="lazy"
              layout="intrinsic" // or 'responsive'
            />
          </div>
          <span className="px-4 ">
            <h2 className="text-[#00B6E6] text-2xl font-bold mb-4 uppercase tracking-wide">
              Data Analysis & Visualization
            </h2>
            <p className="text-gray-990 text-lg">
              Transforming raw data into meaningful insights through powerful data analysis and visualization techniques.
            </p>
          </span>
        </div>
      </div>

      <div className="w-full flex justify-center py-4 h-12">
        <button className="group text-black flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 hover:border-cyan-400 hover:borderfont-semibold rounded-full shadow-md hover:text-white hover:bg-black space-x-2  transition-colors">
          <span className="font-semibold">Explore the platform</span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
