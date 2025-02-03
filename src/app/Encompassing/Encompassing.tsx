import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Encompassing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly h-[100vh] bg-gradient-to-r from-[#47484c] to-[#22d3ee]">

      {/* E-Z Tech Solutions Section */}
      <section className="flex flex-col items-center justify-center text-center py-8 px-4 bg-transparent md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-500 mb-4">
          E-Z Tech Solutions
        </h2>
        <h1 className="text-xl md:text-3xl font-bold text-white mb-4">
          Empowering Your Business with AI
        </h1>
        <p className="text-md text-white max-w-md">
          A minority woman-owned tech startup, specializing in AI-driven solutions and IT support.
        </p>
        <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-3 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 rounded-full shadow-md hover:text-white hover:bg-[#47484c] transition-colors">
          <span className="font-semibold">Learn More</span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Technology Stacks Section */}
      <section className="flex flex-col items-center justify-center text-center py-8 px-4 bg-transparent md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4">
          Our Technology Stacks
        </h2>
        <h1 className="text-xl md:text-3xl font-bold text-white mb-4">
          Powered by the Best
        </h1>
        <p className="text-md text-white max-w-md mb-4">
          .NET, React, JavaScript, AI Solutions, and more.
        </p>
        <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-3 duration-500 bg-cyan-400 border-2 hover:border-cyan-400 rounded-full shadow-md hover:text-white hover:bg-[#47484c] transition-colors">
          <span className="font-semibold">Explore Our Tech</span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

    </div>
  );
};

export default Encompassing;
