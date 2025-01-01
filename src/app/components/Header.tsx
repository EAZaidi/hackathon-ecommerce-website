import { CiSearch } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { PiHandbagThin } from "react-icons/pi";
export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-12 w-[80%]">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Food<span className="text-[#FF9F0D]">tuck</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-[#FF9F0D] inter transition">
            Home
          </a>
          <a href="/menu" className="hover:text-[#FF9F0D] transition">
            Menu
          </a>
          <a href="/blog" className="hover:text-[#FF9F0D] transition">
            Blog
          </a>
          <a href="/" className="hover:text-[#FF9F0D] transition">
            Pages
          </a>
          <a href="/about" className="hover:text-[#FF9F0D] transition">
            About
          </a>
          <a href="/shop" className="hover:text-[#FF9F0D] transition">
            Shop
          </a>
          <a href="/contact" className="hover:text-[#FF9F0D] transition">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <CiSearch className="hover:text-[#FF9F0D] font-bold cursor-pointer w-[24px] h-[24px]" />
          <PiUserLight className="hover:text-[#FF9F0D] font-bold cursor-pointer w-[24px] h-[24px]" />
          <PiHandbagThin className="hover:text-[#FF9F0D] font-bold cursor-pointer w-[24px] h-[24px]" />
        </div>
      </div>
    </header>
  );
}
