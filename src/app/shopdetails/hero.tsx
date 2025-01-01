import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { PiBag } from "react-icons/pi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiVk } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

const ShopDetail = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative h-[350px] flex items-center justify-center text-white">
        <Image
          src="/header.png"
          alt="Shop Details Header"
          fill
          className="object-cover"
        />
        <div className="absolute z-10 text-center">
          <h1 className="text-5xl font-bold">Shop Details</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
                      Home <MdArrowForwardIos/> <span className="text-[#FF9F0D]">Shop Details</span>
                    </p>
        </div>
      </div>

      <div className="max-w-[85%] mx-auto px-4 py-10 mt-12 mb-12">
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Product Images Section */}
          <div className="lg:w-1/2 flex gap-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-4 ">
              {[
                "/product1.png",
                "/product2.png",
                "/product3.png",
                "/product4.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative w-[132px] h-[129px] cursor-pointer hover:border hover:border-[#FF9F0D] rounded overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Product Image */}
            <div className="relative w-[647px] h-[566px] cursor-pointer hover:border hover:border-[#FF9F0D] rounded overflow-hidden">
              <Image
                src="/productmain.png"
                alt="Main Product"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-2/3 space-y-6 pl-10">
            {/* Title and Availability */}
            <div className="flex gap-64">
              <div className="flex justify-start">
                <button className="bg-[#FF9F0D] text-white w-[86px] h-[28px] px-4 py-1 flex justify-start rounded-md text-sm">
                  In Stock
                </button>
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-end items-center gap-4 text-[#828282]">
                <button className="flex items-center hover:text-[#FF9F0D] gap-2 text-[18px]"><FaArrowLeftLong className="w-[24px] h-[24px]"/> Prev</button>
                <button className="flex items-center hover:text-[#FF9F0D] gap-2 text-[18px]">Next <FaArrowRightLong className="w-[24px] h-[24px]"/></button>
              </div>
            </div>
            <h2 className="text-3xl font-bold">Yummy Chicken Chup</h2>

            {/* Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam <br /> pellentesque bibendum non dui volutpat fringilla
              bibendum. Urna, urna, <br /> vitae feugiat pretium donec id
              elementum. Ultrices mattis sed vitae <br /> mus risus. Lacus nisi,
              et ac dapibus sit eu velit in consequat.
            </p>

            {/* Price, Rating, and Reviews */}
            <div className="flex items-center gap-4">
              <span className="text-[32px] font-bold text-[#333333]">
                $54.00
              </span>
            </div>
            <div className="flex text-[#FF9F0D] text-[20px] gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < 5 ? "★" : "☆"}</span>
              ))}

              <p className="text-[#A9A9A9]">|</p>
              <span className="text-[#828282]">5.0 Rating</span>
              <p className="text-[#A9A9A9]">|</p>
              <span className="text-[#828282]">22 Reviews</span>
            </div>

            <div className="text-[18px] text-[#333333]">
              Dictum/cursus/Risus
            </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center gap-6">
              {/* Quantity Selector */}
              <div className="flex items-center justify-center">
                <button className="px-4 py-2 text-[#828282] border border-[#828282] h-[50px] hover:text-white hover:bg-[#FF9F0D]">
                  <FiMinus className="w-[20px] h-[20px]" />
                </button>
                <span className="px-4 py-2 text-[#333333] border-t border-b border-[#828282] w-[50px] h-[50px] text-[20px] flex justify-center">
                  1
                </span>
                <button className="px-4 py-2 text-[#1F242E] border border-[#828282] h-[50px] hover:text-white hover:bg-[#FF9F0D]">
                  <FiPlus className="w-[20px] h-[20px]" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex items-center justify-center gap-2 bg-[#FF9F0D] text-white text-[18px] w-[191px] h-[50px] px-6 py-3 hover:bg-orange-400">
                <PiBag className="w-[20px] h-[20px]" /> Add to Cart
              </button>
            </div>

            <div className="border-b pt-4"></div>

            {/* Wishlist Button */}
            <div className="flex gap-4">
              <button className="flex gap-2 items-center justify-start bg-transparent py-1 text-[19px] text-[#4F4F4F]">
                <IoHeartOutline className="w-[20px] h-[20px]" /> Add to Wishlist
              </button>
              <button className="flex gap-2 items-center justify-start bg-transparent py-1 text-[19px] text-[#4F4F4F]">
                <IoIosGitCompare className="w-[20px] h-[20px]" /> Compare
              </button>
            </div>

            {/* Categories and Tags */}
            <div className="space-y-1">
              <p className="block text-[#333333] text-[18px]">
                Category: <span className="text-[#4F4F4F] ">Pizza</span>
              </p>
              <span className="block text-[#333333] text-[18px]">
                Tag: <span className="text-[#4F4F4F] ">Our Shop</span>
              </span>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 text-[#333333] text-[18px]">
              <span>Share:</span>
              <div className="flex items-center gap-2">
                <FaYoutube className="w-[30px] h-[30px]" />
                <FaFacebook className="w-[24px] h-[24px]" />
                <AiFillTwitterCircle className="w-[28px] h-[28px]" />
                <SiVk className="w-[24px] h-[24px]" />
                <PiInstagramLogoFill className="w-[28px] h-[28px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-10">
          <div className="flex text-[16px] text-[#333333]">
            <button className="px-6 py-4 hover:text-white hover:bg-[#FF9F0D] w-[165px]">
              Description
            </button>
            <button className="px-6 py-4 hover:text-white hover:bg-[#FF9F0D] w-[165px]">
              Reviews (4)
            </button>
          </div>
          <div className="mt-6 text-[#828282] pb-32">
            <p className="text-[16px]">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla
              sed purus augue, eu euismod tellus. Nam mattis eros nec mi
              sagittis sagittis. Vestibulum suscipit cursus <br />
              bibendum. Integer at justo eget sem auctor auctor eget vitae arcu.
              Nam tempor malesuada porttitor. Nulla quis dignissim ipsum.
              Aliquam pulvinar iaculis justo, sit amet <br />
              interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla
              facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
            </p>
            <br />
            <p className="text-[16px]">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex.
              Curabitur blandit justo urna, id porttitor est dignissim nec.
              Pellentesque scelerisque hendrerit posuere. Sed at dolor <br />
              quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam
              accumsan lectus quis auctor. Curabitur rutrum massa at volutpat
              placerat. Duis sagittis vehicula fermentum. <br />
              Integer eu vulputate justo. Aenean pretium odio vel tempor
              sodales. Suspendisse eu fringilla leo, non aliquet sem.
            </p>
            <h3 className="mt-6 text-[18px] pb-6 text-[#4F4F4F]">
              Key Benefits:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
                nisl.
              </li>
              <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
              <li>Mauris eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-10">
          <div className="flex justify-between mb-6">
          <h2 className="text-[32px] font-bold text-[#333333]">
            Similar Products
          </h2>
          <div className="flex justify-end items-center gap-2">
          <p className="flex justify-center items-center w-[40px] h-[39px] p-2 bg-[#FAF7F2] rounded-full hover:bg-[#FF9F0D]"><FaArrowLeftLong className="w-[20px] h-[19.5px] text-[#333333] hover:text-white"/></p>
          <p className="flex justify-center items-center w-[40px] h-[39px] p-2 bg-[#FAF7F2] rounded-full hover:bg-[#FF9F0D]"><FaArrowRightLong className="w-[20px] h-[19.5px] text-[#333333] hover:text-white"/></p>
          </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white overflow-hidden">
              <Image
                src="/similar1-4.png"
                alt="Product 1"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Fresh Lime
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">
                    $38.00{" "}
                    <span className="text-[#828282] line-through">$45.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/similar2.png"
                alt="Product 1"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Chocolate Muffin
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$28.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/similar3.png"
                alt="Similar Product 3"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">Burger</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$21.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/similar1-4.png"
                alt="Similar Product 4"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Fresh Lime
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">
                    $38.00{" "}
                    <span className="text-[#828282] line-through">$45.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
