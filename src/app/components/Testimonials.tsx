// pages/index.js
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="w-[85%] mx-auto text-center">
        {/* Section Header */}
        <h1 className="great_vibes flex text-[#FF9F0D] text-[32px] mb-2">
          Testimonials
        </h1>
        <h2 className="text-[48px] flex pb-10 font-bold">What our clients are saying</h2>

        {/* Testimonial Card */}
        <div className="relative bg-white text-black mt-12 mx-auto max-w-[869px] h-[451px] p-8">
          {/* Profile Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-[133px] h-[134px] rounded-full overflow-hidden border-4 border-transparent shadow-lg">
              <Image
                src="/ellipse.png" // Replace with the actual image path
                alt="Client Photo"
                width={133}
                height={134}
                className="object-cover w-[133px] h-[134px]"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mt-8">
            <Image
              src="/quotes.png"
              alt="quotes"
              width={48}
              height={48}
              className="text-[#FF9F0D] flex justify-center font-bold mb-4 ml-[379px] pt-[40px]"
            />
            <p className="text-gray-600 text-[16px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque <br /> bibendum non dui volutpat fringilla
              bibendum. Ut sit amet augue urna, vitae feugiat <br /> pretium
              donec id elementum. Ultrices mattis sed vitae mus risus. Lacus
              nisi, et ac <br /> dapibus sit eu velit in consequat.
            </p>
            {/* Rating */}
            <div className="flex justify-center gap-1 mt-4">
              <h1 className="text-[#FF9F0D] text-[24px]">★</h1>
              <h1 className="text-[#FF9F0D] text-[24px]">★</h1>
              <h1 className="text-[#FF9F0D] text-[24px]">★</h1>
              <h1 className="text-[#FF9F0D] text-[24px]">★</h1>
              <h1 className="text-[#E0E0E0] text-[24px]">★</h1>
            </div>
            {/* Client Info */}
            <h3 className="text-[24px] text-[#333333] font-bold mt-4">
              Alamin Hasan
            </h3>
            <p className="text-[#828282] text-[16px]">Food Specialist</p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-[15px] h-[16px] bg-[#FF9F0D] rounded-full"></span>
          <span className="w-[15px] h-[16px] bg-[#FF9F0D] opacity-[0.3] rounded-full"></span>
          <span className="w-[15px] h-[16px] bg-[#FF9F0D] opacity-[0.3] rounded-full"></span>
          <span className="w-[15px] h-[16px] bg-[#FF9F0D] opacity-[0.3] rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
