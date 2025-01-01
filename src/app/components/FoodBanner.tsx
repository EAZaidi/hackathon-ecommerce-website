import { IoPlayOutline } from "react-icons/io5";
export default function FoodBanner() {
  return (
    <div className="pt-32 pb-32 bg-black">
      <div className="relative w-[100%]">
        {/* Full Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-contain h-[558px]"
          style={{
            backgroundImage: "url('/foodbanner.png')",
          }}
        ></div>

        {/* Content */}
        <div className="relative h-full px-[155px] py-12">
          <div className="text-right">
            <p className="great_vibes text-[#FF9F0D] text-[32px] mb-2">
              Restaurant Active Process
            </p>
            <h1 className="text-[48px] font-bold text-white">
              <span className="text-[#FF9F0D]">We</span> Document Every Food{" "}
              <br /> Bean Process until it is saved
            </h1>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque <br />
              <span className="max-w-lg text-left">
                bibendum non dui volutpat fringilla bibendum. Urna, elit augue
                urna,
              </span>
            </p>
                        {/* Read More Button */}
            <div className="mt-6 flex items-center justify-end space-x-4">
              <button className="px-6 py-3 w-[190px] h-[60px] bg-transparent text-white border border-[#FF9F0D] font-semibold rounded-full hover:bg-[#FF9F0D]">
                Read More
              </button>
                      
                      {/* Play Button */}
              <div className="flex items-center justify-start">
                <div className="w-[60px] h-[60px] bg-[#FF9F0D] rounded-full flex items-center justify-center">
                  <IoPlayOutline className="w-[24px] h-[24px] text-white" />{" "}
                </div>
                <button className="flex items-center text-[16px] text-white font-bold border-0 py-2 px-3 focus:outline-none rounded-full">
                  Play Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
