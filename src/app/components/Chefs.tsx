// pages/index.js
import Image from 'next/image';

export default function Chefs() {
  const chefs = [
    { image: "/chef1.png" },
    { image: "/chef2.png" },
    { image: "/chef3.png" },
    { image: "/chef4.png" },
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="w-[85%] mx-auto">
        <div className="text-center">
          <h1 className="great_vibes text-[#FF9F0D] text-[32px]">Chefs</h1>
          <h2 className="text-[48px] font-bold text-white mt-2">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={chef.image}
                alt={`Chef ${index + 1}`}
                width={312}
                height={391}
                className="w-[312px] h-[391px] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 w-[155px] border border-[#FF9F0D] text-white rounded-full hover:bg-[#FF9F0D] transition-colors">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
