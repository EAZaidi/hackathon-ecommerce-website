import { CiSearch } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";


export default function Navbar() {
    return (
      <header className="w-full bg-black text-white">
        <div className="text-2xl font-bold text-white flex items-center justify-center pt-4">Food<span className="text-[#ff9a00]">tuck</span></div>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          <nav className="space-x-8">
            <a href="/" className="text-white hover:text-yellow-400">
              Home
            </a>
            <a href="/menu" className="text-white hover:text-[#ff9a00]">
              Menu
            </a>
            <a href="/blogpost" className="text-white hover:text-[#ff9a00]">
              Blog
            </a>
            <a href="/about" className="text-white hover:text-[#ff9a00]">
              About
            </a>
            <a href="/shop" className="text-white hover:text-[#ff9a00]">
              Shop
            </a>
            <a href="/contact" className="text-white hover:text-[#ff9a00]">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4  rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-black text-white border border-[#ff9a00] rounded-full outline-none"
            />
            <button className="text-white">
                <CiSearch className="hover:text-[#ff9a00] font-bold cursor-pointer pr-1 w-[24px] h-[24px]" />
            </button>
            
            <button className="relative pr-28">
          <PiHandbagThin className="hover:text-[#ff9a00] font-bold cursor-pointer w-[24px] h-[24px]" />
            </button>
            </div>
        </div>
      </header>
    );
  }
  
