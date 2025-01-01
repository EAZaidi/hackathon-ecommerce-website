import Image from "next/image";
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
            <p className="great_vibes text-[#FF9F0D] text-[32px] mb-2">
              Its Quick & Amusing!
            </p>
            <h1 className="text-[48px] font-bold text-white leading-tight mb-4">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
              food quality
            </h1>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
              Varius sed pharetra dictum neque massa congue.
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
          
          <a href="https://www.twitter.com">
          <RxTwitterLogo className="text-white hover:text-[#FF9F0D]"/>
          </a>

          <a href="https://www.pinterest.com">
          <FaPinterestP className="text-white hover:text-[#FF9F0D]"/>
          </a>
        </div>
        <div className="absolute px-[1px] top-[440px] left-[22px] h-[25%] bg-white"></div>
        </div>
  
          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center bg-t mt-10 lg:mt-0 relative">
          
            <div className="relative">
              <Image
                src="/hero1.png"
                alt="Dish"
                width={877}
                height={670}
                className="w-[877px] h-[470px]"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  }
  