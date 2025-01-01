import { CiSearch } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";


export default function Navbar() {
    return (
      <header className="w-full bg-black text-white">
        <div className="text-2xl font-bold text-white flex items-center justify-center pt-4">Food<span className="text-[#FF9F0D]">tuck</span></div>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          <nav className="space-x-8">
            <a href="/" className="text-white hover:text-[#FF9F0D] outline-none">
              Home
            </a>
            <a href="/menu" className="text-white hover:text-[#FF9F0D] outline-none">
              Menu
            </a>
            <a href="/blog" className="text-white hover:text-[#FF9F0D] outline-none">
              Blog
            </a>
            <a href="/about" className="text-white hover:text-[#FF9F0D] outline-none">
              About
            </a>
            <a href="/shop" className="text-white hover:text-[#FF9F0D] outline-none">
              Shop
            </a>
            <a href="/contact" className="text-white hover:text-[#FF9F0D] outline-none">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4 rounded-full">
            <div className="border border-[#FF9F0D] rounded-full outline-none flex">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-transparent text-white outline-none"
            />
            <button className="text-white flex items-center justify-end mr-2">
                <CiSearch className="hover:text-[#FF9F0D] font-bold cursor-pointer pr-1 w-[24px] h-[24px]" />
            </button>
            </div>
            
            <button className="relative pr-28">
          <PiHandbagThin className="hover:text-[#FF9F0D] font-bold cursor-pointer w-[24px] h-[24px] outline-none" />
            </button>
            </div>
        </div>
      </header>
    );
  }
  
