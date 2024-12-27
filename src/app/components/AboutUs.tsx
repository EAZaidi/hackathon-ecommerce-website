import { FaCheck } from "react-icons/fa";

export default function AboutUs (){
    return (
      <section className="bg-black text-white py-36">
        <div className="container mx-auto flex flex-wrap items-center w-[85%]">
          {/* Left Content */}
          <div className="w-full md:w-1/2 px-4">
            {/* About Us Heading */}
            <h3 className="great_vibes text-[#FF9F0D] text-[32px] ">About us</h3>
            <h2 className="font-[Helvetica] text-[48px] font-bold mb-4">
              <span className="text-[#FF9F0D]">We</span> Create the best foody product
            </h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
              pellentesque bibendum non dui
              volutpat fringilla bibendum. Urna, elit <br />
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />
              sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />
              consequat.  
            </p>
  
            {/* Bullet Points */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-[#FF9F0D] text-xl mr-3"><FaCheck /></span>
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9F0D] text-xl mr-3"><FaCheck /></span>
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9F0D] text-xl mr-3"><FaCheck /></span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
            </ul>
  
            {/* Button */}
            <button className="bg-[#FF9F0D] w-[190px] h-[60px] text-white px-6 py-3 rounded-full hover:bg-yellow-700">
              Read More
            </button>
          </div>
  
          {/* Right Images */}
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            {/* Top Large Image */}
            <div className="mb-4">
              <img
                src="/aboutus1.png"
                alt="Large Plate"
                className="rounded-lg w-full object-cover"
              />
            </div>
            {/* Bottom Grid Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/aboutus2.png"
                alt="Small Plate 1"
                className="rounded-lg object-cover"
              />
              <img
                src="/aboutus3.png"
                alt="Small Plate 2"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  