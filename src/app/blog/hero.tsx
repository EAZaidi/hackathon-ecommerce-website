import React from "react";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

function Blogs() {
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
          <h1 className="text-[48px] font-bold">Blog List</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos />{" "}
            <span className="text-[#FF9F0D]">Blog</span>
          </p>
        </div>
      </div>

                                    {/* Blog List Section */}

      <section className="flex flex-col md:flex-row justify-center md:m-[50px] md:gap-6">
        {/* Blog Card Container */}
        <div className="flex-col w-[871px]">
          {/* Individual Blog Card with image source */}
          <BlogCard />
        </div>

                                    {/* Searchbar Container */}

        <div className="flex-col">
          <div className="flex pt-7">
            <h6>
              <input
                type="text"
                placeholder="Search Your Keyword"
                className="border p-4 md:mb-[24px] h-[70px] md:w-[350px] md:ml-0 ml-3 w-[350px]"
              />
            </h6>
            <p className="border-[#FF9F0D] border bg-[#FF9F0D] w-[74px] h-[70px] flex items-center justify-center hover:cursor-pointer">
              <CiSearch className="text-white w-[24px] h-[24px]" />
            </p>
          </div>
                                    {/* Review Portion */}

          <div className="w-[424px] h-[450px] flex flex-col items-center justify-center mb-[24px] border">
            {/* Profile Picture Image */}
            <Image
              src="/princeimg.png"
              alt="Profile Picture"
              width={148}
              height={130}
              className="object-cover rounded-full"
            />

            {/* Name and Review */}
            <div className="text-center mt-[30px] ">
              <p className="font-bold text-[20px] text-[#333333]">
                Prince Miyako
              </p>
              <p className="text-[16px] text-[#828282] flex justify-center pt-2">
                Blogger/Photographer
              </p>
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="flex text-[#FF9F0D]">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <p className="text-[14px] text-[#828282]">(1 Review)</p>
              </div>
              <p className="text-[#828282] text-center pt-2 text-[16px]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipisicing elit.Veritatis distinctio, odio <br />
                eligendi suscipit reprehenderit atque
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Facebook Icon */}
              <FaFacebookF className="w-[12px] h-[16px] text-black" />
              {/* Twitter Icon */}
              <FaTwitter className="w-[18px] h-[20px] text-black" />
              {/* Instagram Icon */}
              <SlSocialInstagram className="w-[16px] h-[20px] text-black" />
              {/* Pinterest Icon */}
              <FaPinterest className="w-[16px] h-[18px] text-black" />
            </div>
          </div>
          
                                                {/* Recent Post Portion */}

          <div className="w-[423px] h-[592px] bg-white border p-8 mb-[24px] flex flex-col justify-center items-start">
            {/* Recent Post Heading */}
            <h2 className="font-bold text-[20px] text-[#333333] mb-6">
              Recent Post
            </h2>

            {/* Posts */}
            <div className="flex flex-col space-y-4">
              
              {/* First Post */}
              <div className="flex items-start gap-4 pb-4 border-b">
                {/* Image */}
                <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/recentpost1.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <p className="text-[14px] text-[#828282] font-medium mb-2">
                    June 22, 2020
                  </p>
                  <p className="font-normal text-[16px] text-[#4F4F4F] leading-[24px]">
                    Lorem ipsum dolor sit cing elit, <br />
                    sed do.
                  </p>
                </div>
              </div>

              {/* Second Post */}
              <div className="flex items-start gap-4 pb-4 border-b">
                {/* Image */}
                <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/recentpost2.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <p className="text-[14px] text-[#828282] font-medium mb-2">
                    June 23, 2020
                  </p>
                  <p className="font-normal text-[16px] text-[#4F4F4F] leading-[24px]">
                    Lorem ipsum dolor sit cing elit, <br />
                    sed do.
                  </p>
                </div>
              </div>

              {/* Third Post */}
              <div className="flex items-start gap-4 pb-4 border-b">
                {/* Image */}
                <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden">
                  <Image
                    src="/recentpost3.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <p className="text-[14px] text-[#828282] font-medium mb-2">
                    June 24, 2020
                  </p>
                  <p className="font-normal text-[16px] text-[#4F4F4F] leading-[24px]">
                    Lorem ipsum dolor sit cing elit, <br />
                    sed do.
                  </p>
                </div>
              </div>

              {/* Fourth Post */}
              <div className="flex items-start gap-4 pb-4 border-b">
                {/* Image */}
                <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/recentpost4.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <p className="text-[14px] text-[#828282] font-medium mb-2">
                    June 25, 2020
                  </p>
                  <p className="font-normal text-[16px] text-[#4F4F4F] leading-[24px]">
                    Lorem ipsum dolor sit cing elit, <br />
                    sed do.
                  </p>
                </div>
              </div>
            </div>
          </div>

                                        {/* Filter By Menu Portion */}

          <div className="w-[423px] h-[592px] bg-white border p-8 mb-[24px] flex flex-col justify-center items-start">
            {/* Filter By Menu Heading */}
            <h2 className="font-bold text-[20px] text-[#333333] mb-6">
              Filter By Menu
            </h2>
          
          {/* Items Section */}
            <div className="flex flex-col space-y-4">
              {/* First Item */}
              <div className="flex items-center gap-4 pb-4">
                {/* Image */}
                <div className="w-[67px] h-[62px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/item1.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="flex items-center justify-evenly">
                  <p className="font-bold text-[16px] text-[#4F4F4F] leading-[24px]">
                    Seekh Kabab
                  </p>
                  <p className="text-[16px] text-[#333333]">26</p>
                </div>
              </div>

              {/* Second Item */}
              <div className="flex items-center gap-4 pb-4">
                {/* Image */}
                <div className="w-[67px] h-[62px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/item2.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="flex items-center justify-evenly">
                  <p className="font-bold text-[16px] text-[#4F4F4F] leading-[24px]">
                    Meat Balls
                  </p>
                  <p className="text-[16px] text-[#333333]">46</p>
                </div>
              </div>

              {/* Third Item */}
              <div className="flex items-center gap-4 pb-4">
                {/* Image */}
                <div className="w-[67px] h-[62px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/item3.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="flex items-center justify-evenly">
                  <p className="font-bold text-[16px] text-[#4F4F4F] leading-[24px]">
                    Cake
                  </p>
                  <p className="text-[16px] text-[#333333]">16</p>
                </div>
              </div>

              {/* Fourth Item */}
              <div className="flex items-center gap-4 pb-4">
                {/* Image */}
                <div className="w-[67px] h-[62px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/item4.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="flex items-center justify-evenly">
                  <p className="font-bold text-[16px] text-[#4F4F4F] leading-[24px]">
                    Burger Food
                  </p>
                  <p className="text-[16px] text-[#333333]">36</p>
                </div>
              </div>

              {/* Fifth Item */}
              <div className="flex items-center gap-4 pb-4">
                {/* Image */}
                <div className="w-[67px] h-[62px] rounded-[6px] overflow-hidden bg-gray-300">
                  <Image
                    src="/item5.png"
                    alt="Post Image"
                    width={99}
                    height={91.58}
                    className="object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="flex items-center justify-evenly">
                  <p className="font-bold text-[16px] text-[#4F4F4F] leading-[24px]">
                    Sandwich
                  </p>
                  <p className="text-[16px] text-[#333333]">16</p>
                </div>
              </div>
            </div>
          </div>


            
                                        {/* Popular Tags Portion */}
        
        <div className="w-full md:w-[423px] h-auto bg-white border p-8 mb-[24px] mt-4">
            <h2 className="font-bold text-[20px] text-[#333333] mb-6">
              Popular Tags
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 w-[115px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Sandwich
              </span>
              <span className="px-3 py-1 w-[87px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Tikka
              </span>
              <span className="px-3 py-1 w-[79px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Bbq
              </span>
              <span className="px-3 py-1 w-[126px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Restaurant
              </span>
              <span className="px-3 py-1 w-[158px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Chicken Shawarma
              </span>
              <span className="px-3 py-1 w-[95px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Health
              </span>
              <span className="px-3 py-1 w-[109px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Fastfood
              </span>
              <span className="px-3 py-1 w-[88px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Food
              </span>
              <span className="px-3 py-1 w-[89px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Pizza
              </span>
              <span className="px-3 py-1 w-[97px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Burger
              </span>
              <span className="px-3 py-1 w-[105px] h-[38px] flex items-center justify-center border border-[#E0E0E0] text-[14px] text-[#4F4F4F]">
                Chicken
              </span>
            </div>
          </div>

                                            {/* Photo Gallery Portion */}

          <div className="w-full bg-white mb-[24px] border p-8 mt-4">
            {/* Photo Gallery Heading */}
            <h2 className="font-bold text-[20px] text-[#333333] mb-6">
              Photo Gallery
            </h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3">
              <div className="w-[110px] h-[92px] overflow-hidden">
                <Image
                  src="/gallery1.png"
                  alt="Gallery Image 1"
                  width={110}
                  height={92}
                  className="object-cover"
                />
              </div>
              <div className="w-[110px] h-[92px] relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    className="w-[24px] h-[22px]"
                  >
                    <FaRegEye className="text-white" />
                  </svg>
                </div>
                <Image
                  src="/gallery2.png"
                  alt="Gallery Image 2"
                  width={110}
                  height={92}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="w-[110px] h-[92px] overflow-hidden">
                <Image
                  src="/gallery3.png"
                  alt="Gallery Image 3"
                  width={110}
                  height={92}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[110px] h-[92px] overflow-hidden">
                <Image
                  src="/gallery4.png"
                  alt="Gallery Image 4"
                  width={110}
                  height={92}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[110px] h-[92px] overflow-hidden">
                <Image
                  src="/gallery5.png"
                  alt="Gallery Image 5"
                  width={110}
                  height={92}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[110px] h-[92px] overflow-hidden">
                <Image
                  src="/gallery6.png"
                  alt="Gallery Image 6"
                  width={110}
                  height={92}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

                                              {/* Follow Us section  */}

          <div className="w-full p-8 border">
            <h2 className="font-bold text-[20px] text-[#333333] mb-6">
              Follow Us
            </h2>
            <div className="flex justify-start gap-3">
              {/* Twitter Icon */}
              <div className="w-[52px] h-[46.51px] flex justify-center items-center bg-[#FAF7F2] hover:bg-[#FF9F0D] hover:cursor-pointer p-3">
                <FaTwitter className="w-[18px] h-[21px] text-black" />
              </div>

              {/* YouTube Icon */}
              <div className="w-[52px] h-[46.51px] flex justify-center items-center bg-[#FAF7F2] hover:bg-[#FF9F0D] hover:cursor-pointer p-3">
                <FaYoutube className="w-[27px] h-[21px] text-black" />
              </div>

              {/* Pinterest Icon with orange background */}
              <div className="w-[52px] h-[46.51px] flex justify-center items-center bg-[#FAF7F2] hover:bg-[#FF9F0D] hover:cursor-pointer p-3">
                <FaPinterest className="w-[23px] h-[21px] text-black" />
              </div>

              {/* Instagram Icon */}
              <div className="w-[52px] h-[46.51px] flex justify-center items-center bg-[#FAF7F2] hover:bg-[#FF9F0D] hover:cursor-pointer p-3">
                <SlSocialInstagram className="w-[21px] h-[21px] text-black" />
              </div>

              {/* Facebook Icon */}
              <div className="w-[52px] h-[46.51px] flex justify-center items-center bg-[#FAF7F2] hover:bg-[#FF9F0D] hover:cursor-pointer p-3">
                <FaFacebookF className="w-[15px] h-[21px] text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
