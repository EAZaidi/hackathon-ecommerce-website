import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { LiaCommentDots } from "react-icons/lia";
import { FiShare2 } from "react-icons/fi";

export default function BlogPost() {
  return (
    <div className="w-full bg-black">
      <div className="bg-black text-white py-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="great_vibes text-[#FF9F0D] text-[32px]">Blog Post</p>
          <h2 className="text-[48px] font-bold">
            <span className="text-[#FF9F0D]">La</span>test News & Blog
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 px-24 mb-[120px]">
          {/* Card 1 */}
          <div className="bg-transparent border border-white w-[424px] h-[569px] mx-auto">
            <Image
              src="/blog1.png"
              alt="Burger"
              className="w-[423px] h-[349px] object-cover"
            />
            <div className="p-6">
              <p className="text-[#FF9F0D] text-sm">14 February 2023</p>
              <h3 className="text-xl font-bold mt-2">
                Pellentesque Non Etiam Mi <br />
                Aliquam Convallis Mi Quis
              </h3>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4">
              <a
                href="#"
                className="text-white text-[16px] hover:underline hover:text-[#FF9F0D] whitespace-nowrap px-2"
              >
                Learn More
              </a>
              <div className="flex space-x-3">
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <BiLike />
                </span>
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <LiaCommentDots />
                </span>
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <FiShare2 />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent border border-white w-[424px] h-[569px] mx-auto">
            <Image
              src="/blog2.png"
              alt="Pizza"
              className="w-[423px] h-[349px] object-cover"
            />
            <div className="p-6">
              <p className="text-[#FF9F0D] text-sm">16 February 2023</p>
              <h3 className="text-xl font-bold mt-2">
                Morbi Sodales Tellus Elit, In <br />
                Blandit Risus Suscipit A
              </h3>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4">
              <a
                href="#"
                className="text-white text-[16px] hover:underline hover:text-[#FF9F0D] whitespace-nowrap px-2"
              >
                Learn More
              </a>
              <div className="flex space-x-3">
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <BiLike />
                </span>
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <LiaCommentDots />
                </span>
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <FiShare2 />
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent border border-white w-[424px] h-[569px] mx-auto">
            <Image
              src="/blog3.png"
              alt="Tacos"
              className="w-[423px] h-[349px] object-cover"
            />
            <div className="p-6">
              <p className="text-[#FF9F0D] text-sm">19 February 2023</p>
              <h3 className="text-xl font-bold mt-2">
                Curabitur rutrum velit ac <br />
                congue malesuada
              </h3>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4">
              <a
                href="#"
                className="text-white text-[16px] hover:underline hover:text-[#FF9F0D] whitespace-nowrap px-2"
              >
                Learn More
              </a>
              <div className="flex space-x-3">
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <BiLike />
                </span>
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <LiaCommentDots />
                </span>
                <span className="w-[20px] h-[20px] hover:text-[#FF9F0D]">
                  <FiShare2 />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
