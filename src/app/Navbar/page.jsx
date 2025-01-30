import { FiGlobe } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 py-3">
      <div className="max-w-7xl mx-auto flex justify-end items-center sm:space-x-3  lg:space-x-6 px-6 text-gray-500 text-sm">
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
  );
};

export default Navbar;
