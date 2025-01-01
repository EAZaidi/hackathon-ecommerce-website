import Image from "next/image"; // Importing Next.js Image component for optimized images
import { IoPlayOutline } from "react-icons/io5"; // Importing the play button icon from React Icons
import { MdArrowForwardIos } from "react-icons/md";
import AboutTestimonials from "./AboutTestimonials";
import { PiStudentThin, PiCoffeeThin, PiPersonThin } from "react-icons/pi";

export default function AboutPage() {
  return (
    <div className="bg-white">
      
                                {/* Header Section */}
      
      <div className="relative w-full h-[350px] flex items-center justify-center">
        <Image
          src="/header.png"
          alt="404 Background"
          fill
          className="object-cover"
        />
        <div className="absolute z-10 text-center text-white">
          <h1 className="text-[48px] font-bold">About Us</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos />{" "}
            <span className="text-[#FF9F0D]">About</span>
          </p>
        </div>
      </div>

                                {/* First Section: Content and Buttons */}
      
      <div className="mx-auto w-[85%]">
        <section className="text-white body-font">
          <div className="container md:gap-8 mx-auto flex px-5 py-24">
            
            {/* Left Section - Hero Image */}
            <div className="md:block hidden md:flex-row md:space-x-4 mt-2 ml-2">
              <Image
                className="object-cover object-center radius-6px"
                alt="hero"
                src="/aboutpage3.png"
                width={336}
                height={536}
              />
            </div>
            
            {/* Right Section - Additional Images */}
            <div className=" hidden md:block md:flex-col gap-6 space-y-4 space-x-0 mt-2 ">
              <Image
                className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
                alt="image2"
                src="/aboutpage2.png"
                width={309}
                height={271}
              />
              <Image
                className="object-cover object-center mt-[882px] ml-[660px] radius-6px"
                alt="image3"
                src="/aboutpage1.png"
                width={309}
                height={382}
              />
            </div>
            
            {/* Right Text Content and Buttons */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="miniver text-[18px] mb-4 text-[#FF9F0D]">
                About us <span className="font-sans">_____</span>
              </h1>
              <p className="text-[#333333] title-font text-[48px] font-bold">
                Food is an important <br />
                part Of a balanced Diet
              </p>
              <p className="mb-8 leading-relaxed mt-8 text-[#4F4F4F] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam <br />
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
                elit <br />
                augue urna, vitae feugiat pretium donec id elementum. Ultrices
                mattis <br />
                vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                consequat.
              </p>
              
              {/* Show More and Watch Video Buttons */}
              <div className="flex justify-center gap-4">
                <button className="w-[195px] h-[58px] text-[#FFFFFF] font-bold bg-[#FF9F0D] border-0 py-2 px-3 focus:outline-none rounded text-[18px]">
                  Show More
                </button>
                <div className="flex items-center justify-start">
                  <div className="w-[60px] h-[60px] bg-[#FF9F0D] rounded-full flex items-center justify-center">
                    <IoPlayOutline className="w-[24px] h-[24px] " />{" "}
                    
                    {/* Play Icon */}
                  </div>
                  <button className="flex items-center text-[16px] text-[#333333] font-bold border-0 py-2 px-3 focus:outline-none rounded-full">
                    Watch video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Why Choose Us */}
        <section className="text-black body-font pt-12">
          <div className="container mx-auto flex items-center justify-center flex-col">
            <h1 className="text-[#333333] text-[48px] font-bold mt-3">
              Why Choose us
            </h1>
            <p className="text-[#4F4F4F] text-center mt-2 w-[579px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <Image
              className="mb-10 object-fill md:w-[2530%] md:h-[500px] md:mt-[12px] pt-10"
              alt="banner"
              src="/whychoosebanner.png"
              width={1320}
              height={386}
            />
          </div>
        </section>

        {/* Features Section */}
        <div className="container mx-auto px-4 pt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">
                {/* Icon for Best Chef */}
                <span role="img" aria-label="chef-hat">
                  <PiStudentThin className="w-[80px] h-[80px]" />
                </span>
              </div>
              <h3 className="text-[24px] text-[#333333] font-semibold mb-2">
                Best Chef
              </h3>
              <p className="text-[##4F4F4F] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Quisque diam pellentesque <br />
                bibendum non dui volutpat.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">
                {/* Icon for Food */}
                <span role="img" aria-label="cup">
                  <PiCoffeeThin className="w-[80px] h-[80px]" />
                </span>
              </div>
              <h3 className="text-[24px] text-[#333333] font-semibold mb-2">
                120 Item Food
              </h3>
              <p className="text-[##4F4F4F] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Quisque diam pellentesque <br />
                bibendum non dui volutpat.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">
                {/* Icon for Clean Environment */}
                <span role="img" aria-label="clean-environment">
                  <PiPersonThin className="w-[80px] h-[80px]" />
                </span>
              </div>
              <h3 className="text-[24px] text-[#333333] font-semibold mb-2">
                Clean Environment
              </h3>
              <p className="text-[##4F4F4F] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Quisque diam pellentesque <br />
                bibendum non dui volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>

                                {/* Third Section: Our Team Members */}

      <section className="text-white mt-32 mb-36 relative ">
        
        {/* Background Image */}
        <div className="relative w-full h-[550px] flex items-center justify-center">
          <Image
            src="/aboutbg.png"
            alt="Team Members Background"
            fill
            className="object-cover"
          />
          <div className="absolute top-36 text-center flex flex-col items-center justify-center">
            <h2 className="text-white text-[48px] font-bold">Team Members</h2>
            <p className="leading-relaxed text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Quisque diam pellentesque bibendum non dui volutpat.
            </p>
          </div>
        </div>

        {/* Team Member Cards */}
        
        <div className="w-[85%]">
          <div className="absolute top-[110%] translate-y-[-50%] w-full flex justify-center gap-4">
            
            {/* Member 1 */}
            <div className="w-[312px] bg-white shadow-lg text-center hover:cursor-pointer">
              <Image
                src="/teammember.png"
                alt="Mark Henry"
                width={312}
                height={250}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-black text-lg font-bold">Mark Henry</h3>
                <p className="text-gray-500">Owner</p>
              </div>
            </div>
            
            {/* Member 2 */}
            <div className="w-[312px] bg-white shadow-lg text-center hover:cursor-pointer">
              <Image
                src="/teammember.png"
                alt="Lucky Helen"
                width={312}
                height={250}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-black text-lg font-bold">Lucky Helen</h3>
                <p className="text-gray-500">Chef</p>
              </div>
            </div>
            
            {/* Member 3 */}
            <div className="w-[312px] bg-white shadow-lg text-center hover:cursor-pointer">
              <Image
                src="/teammember.png"
                alt="Moon Henry"
                width={312}
                height={250}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-black text-lg font-bold">Moon Henry</h3>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
            
            {/* Member 4 */}
            <div className="w-[312px] bg-white shadow-lg text-center hover:cursor-pointer">
              <Image
                src="/teammember.png"
                alt="Tom Monrow"
                width={312}
                height={250}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-black text-lg font-bold">Tom Monrow</h3>
                <p className="text-gray-500">Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
                                         {/* Fourth Section: Testimonials */}
        <AboutTestimonials />

                                        {/* Fifth Section: Food Menu Section */}
      
      <div className="w-[85%] mx-auto">
        <section className="py-16 px-6 md:px-20 bg-white">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-[40px] md:text-[48px] font-bold text-gray-800 flex items-center justify-center">
              <Image
                src="/foodmenuback.png"
                alt="Menu Icon"
                width={81.48}
                height={158.89}
                className="h-[259px] absolute translate-y-[15%] rotate-[32deg]"
              />
              <span className="ml-2">Our Food Menu</span>
            </h2>
            <p className="text-gray-500 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue.
            </p>
          </div>

          {/* Tab Navigation */}
          
          <div className="flex items-center justify-center gap-4 mb-8 text-[20px] text-[#4F4F4F] md:text-base border-b">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`${
                    index === 0
                      ? "text-[#4F4F4F] pb-2 hover:border-b-2 hover:border-[#FF9F0D] hover:text-[#FF9F0D]"
                      : "text-[#4F4F4F] pb-2 hover:border-b-2 hover:border-[#FF9F0D] hover:text-[#FF9F0D]"
                  } px-4`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Menu List */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left Section */}
              <div className="flex flex-col gap-6">
                
                {/* Food Item 1 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Alder Grilled Chinook Salmon
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">32$</p>
                </div>

                {/* Food Item 2 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Spicy Italian Sausage Pizza
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">720 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">25$</p>
                </div>

                {/* Food Item 3 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Spicy Italian Sausage Pizza
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">720 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">25$</p>
                </div>

                {/* Food Item 4 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Spicy Italian Sausage Pizza
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">720 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">25$</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col gap-6">
                
                {/* Food Item 1 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Alder Grilled Chinook Salmon
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">300 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">18$</p>
                </div>

                {/* Food Item 2 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Alder Grilled Chinook Salmon
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">670 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">29$</p>
                </div>

                {/* Food Item 3 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Alder Grilled Chinook Salmon
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">670 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">29$</p>
                </div>

                {/* Food Item 4 */}
                <div className="flex justify-between items-start border-dotted border-b pb-4">
                  <div>
                    <h3 className="text-[#333333] text-[24px] font-bold hover:underline cursor-pointer mb-2">
                      Alder Grilled Chinook Salmon
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] mb-2">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <span className="text-[#828282] text-[16px]">670 CAL</span>
                  </div>
                  <p className="text-[#FF9F0D] text-[24px] font-bold">29$</p>
                </div>
              </div>
            </div>
          </div>

          {/* View Menu Button */}
          
          <div className="text-center mt-8">
            <button className="bg-white w-[143px] h-[52px] text-[#FF9F0D] border border-[#FF9F0D] text-[16px] md:text-base px-6 py-2 mt-20 mb-20 hover:bg-[#FF9F0D] hover:text-white transition">
              View menu
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
