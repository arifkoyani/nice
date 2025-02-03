"use client"
import { FiGlobe, FiSearch, FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { NavbarDemo} from "../Nvbar/nav";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <nav className="w-full bg-gray-100 py-3 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4 lg:space-x-6 px-6 text-gray-500 text-sm">
          <a href="#" className="hover:text-gray-900">Login</a>
          <a href="#" className="hover:text-gray-900">Status</a>
          <a href="#" className="hover:text-gray-900">Support</a>
          <a href="#" className="hover:text-gray-900">Partners</a>
          <a href="#" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">Careers</a>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
            <FiGlobe className="text-lg" />
            <span>EN</span>
          </div>
        </div>
      </nav>


      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 lg:px-8">
          <Image src="/logo.png" width={70} height={70} alt="logo" />

          {/* Desktop Navigation */}
    
          <div>
            <NavbarDemo/>
          </div>







          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-5">
            <FiSearch className="text-gray-600 text-xl cursor-pointer" />
            <button className="flex items-center gap-2 px-8 py-2 transition duration-500 bg-cyan-400 hover:border-cyan-400 hover:border text-black font-semibold rounded-full shadow-md hover:text-white hover:bg-black">
              Get in Touch <FiArrowRight className="text-lg" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
          <div className="lg:hidden flex flex-col bg-white py-4 px-6 space-y-4 text-gray-800 font-semibold">
            <a href="#" className="hover:text-cyan-500">Platform</a>
            <a href="#" className="hover:text-cyan-500">Products</a>
            <a href="#" className="hover:text-cyan-500">Solutions</a>
            <a href="#" className="hover:text-cyan-500">Services</a>
            <a href="#" className="hover:text-cyan-500">Resources</a>
            <a href="#" className="hover:text-cyan-500">Company</a>
            <div className="flex items-center gap-4">
              <FiSearch className="text-gray-600 text-xl cursor-pointer" />
              <button className="flex items-center gap-2 px-6 py-2 transition duration-500 bg-cyan-400 hover:border-cyan-400 hover:border text-black font-semibold rounded-full shadow-md hover:text-white hover:bg-black">
                Get in Touch <FiArrowRight className="text-lg" />
              </button>
            </div>
          </div>
       


</>
        )}
      </nav>
    </>
  );
}

export default Navbar;
