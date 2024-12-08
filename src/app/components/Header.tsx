import { CiSearch } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { PiHandbagThin } from "react-icons/pi";
export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-12 w-[80%]">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Food<span className="text-[#ff9a00]">tuck</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[#ff9a00] inter transition">
            Home
          </a>
          <a href="#" className="hover:text-[#ff9a00] transition">
            Menu
          </a>
          <a href="#" className="hover:text-[#ff9a00] transition">
            Blog
          </a>
          <a href="#" className="hover:text-[#ff9a00] transition">
            Pages
          </a>
          <a href="#" className="hover:text-[#ff9a00] transition">
            About
          </a>
          <a href="#" className="hover:text-[#ff9a00] transition">
            Shop
          </a>
          <a href="#" className="hover:text-[#ff9a00] transition">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <CiSearch className="hover:text-[#ff9a00] font-bold cursor-pointer w-[24px] h-[24px]" />
          <PiUserLight className="hover:text-[#ff9a00] font-bold cursor-pointer w-[24px] h-[24px]" />
          <PiHandbagThin className="hover:text-[#ff9a00] font-bold cursor-pointer w-[24px] h-[24px]" />
        </div>
      </div>
    </header>
  );
}
