import { FaPinterestP } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { RxTwitterLogo } from "react-icons/rx";

export default function Hero() {
    return (
      <section className="relative bg-black">
        <div className="w-full ">
        {/* Background */}
        <div
          className="absolute ml-28 inset-0 opacity-30 w-[85%]"
          style={{
            backgroundImage: "url('/bg1.png')",
          }}
        ></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-[80%] mx-auto px-6 py-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="great_vibes text-[#ff9a00] font-semibold text-lg mb-2">
              A Quick & Amusing!
            </p>
            <h1 className="font-['helvetica'] text-5xl font-bold text-white leading-tight mb-4">
              <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br />
              <span className="text-[#FF9F0D]">Food Quality</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className="px-6 py-3 w-[190px] h-[60px] bg-[#FF9F0D] hover:bg-yellow-600 text-white font-semibold rounded-full">
              See Menu
            </button>
          </div>
          
          {/* Left Sidebar with Social Media Links */}
      <div className="absolute bottom-32 -left-12 h-full flex items-center px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-32 border-l-2 border-white"></div>
          <a
            href="https://www.facebook.com"
            >
            <TfiFacebook className="text-white hover:text-[#FF9F0D]"/>
          </a>
          
          <a href="/">
          <RxTwitterLogo className="text-white hover:text-[#FF9F0D]"/>
          </a>

          <a href="/">
          <FaPinterestP className="text-white hover:text-[#FF9F0D]"/>
          </a>
        </div>
        <div className="absolute px-[1px] top-[405px] left-[22px] h-[25%] bg-white"></div>
        </div>
  
          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          
            <div className="relative">
              <img
                src="/big-dish.png"
                alt="Dish"
                className="rounded-full w-96 h-96 shadow-lg"
              />
              
              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-md">
                <img src="/round-dish1.png" alt="Dish 1" className="rounded-full" />
              </div>
              <div className="absolute bottom-52 -left-16 w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-md">
                <img src="/round-dish2.png" alt="Dish 2" className="rounded-full" />
              </div>
              <div className="absolute bottom-24 right-96 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-md">
                <img src="/round-dish3.png" alt="Dish 3" className="rounded-full" />
              </div>
              <div className="absolute bottom-4 left-2 right-80 w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-md">
                <img src="/round-dish4.png" alt="Dish 3" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  }
  