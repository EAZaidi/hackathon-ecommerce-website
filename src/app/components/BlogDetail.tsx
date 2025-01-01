import Image from "next/image";
import { LuReplyAll } from "react-icons/lu";
import { PiCalendarBlankLight } from "react-icons/pi";
import { LiaComments } from "react-icons/lia";
import { PiUserCirclePlus } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

export default function BlogDetail() {
    return (
      <div className="bg-white py-7">
        <div className="container mx-auto px-4">
          {/* Main Post */}
          <div className="bg-white overflow-hidden">
            <div className='mb-14'>
                  {/* Image Section */}
                  <div className='relative md:w-[872px] h-[300px] md:h-[520px]'>
                    
                    <Image
                      src={'/blogdetail.png'}
                      alt='Blog Image'
                      layout='fill'
                      objectFit='cover'
                      className='object-cover w-[871px] h-[520px]'
                    />
                  </div>
            
                  {/* Text Content */}
                  <div>
                    {/* Date and Admin Info */}
                    <div className='flex mt-6 items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#4F4F4F]'>
                      <div className='gap-2 flex'>
                      <IoCalendarNumberOutline className='text-[#FF9F0D] w-[24px] h-[24px] ml-2'/> 
                      Feb 14, 2022 <span>/</span>
                      </div>
            
                      <div className='gap-2 flex'>
                      <LiaComments className='text-[#FF9F0D] w-[24px] h-[24px] ml-2'/>
                      <p>3 <span>/</span></p>
                      </div>
            
                      <div className='gap-2 flex'>
                      <PiUserCirclePlus className='text-[#FF9F0D] w-[24px] h-[24px] ml-2'/> Admin
                      </div>
                    </div>
            
                    {/* Title */}
                    <h2 className='mt-4 text-[16px] md:text-[24px] font-bold leading-[24px] text-[#333333] pb-4'>
                    10 Reasons To Do A Digital Detox Challenge
                    </h2>
            
                    {/* Horizontal Line */}
                    <hr className='my-4 border-b w-[694.83px]' />
            
                    {/* Paragraph */}
                    <p className='text-[14px] md:text-[16px] font-normal leading-[24px] text-[#4F4F4F]'>
                    Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse
                    potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a 
                    ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo
                    erat aliquam ut himenaeos.
                    </p>
                    <br />
                    <p className='text-[14px] md:text-[16px] font-normal leading-[24px] text-[#4F4F4F]'>
                    Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. <br />
                    Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat <br />
                    himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
                    </p>
                  </div>
                </div>
  
                    {/* Quote */}
                <div className="flex items-center justify-start bg-[#FF9F0D] mt-14 mb-14 w-[853px] h-[176px] gap-4">
                    <Image
                    src="/whitequotes.png"
                    alt="quotes"
                    width={48}
                    height={48}
                    className="w-[48px] h-[48px] relative text-black flex items-start justify-start font-bold mb-[104px] ml-6"
                    />
                <p className="font-bold text-white mt-6 mb-6 mr-6 text-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris <br />
                nisi ut aliquip. 
                </p>
              </div>
                <div className="mb-4">
              <p className="text-[#4F4F4F] [15.5px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              </div>

              
              <div className="my-4 flex items-start justify-start mb-6 gap-6">
                <p className="text-[#4F4F4F] [16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat, sed diam voluptua. At vero 
                eos et accusam et justo duo dolores et ea rebum. Stet clita 
                kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam 
                voluptua. At vero eos et accusam et justo duo dolores et 
                ea rebum.
                <br />
                <br />
                <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat, sed diam voluptua. At vero 
                eos et accusam et justo duo dolores et ea rebum. Stet clita 
                kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                sadipscing
                </span>
                </p> 
                {/* Inline Image */}
                <Image
                  src="/blogdetail2.png"
                  alt="Dish"
                  className="w-[424px] h-[366px]"
                />
              </div>

           
              <p className="text-[#4F4F4F] text-[15.5px] mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <p className="text-[#4F4F4F] text-[15.5px] mb-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              

              {/* Tags and Share */}
              <div className="flex justify-between border items-center h-[60px] mt-6">
                <div className="w-[297px] h-[24px] px-6">
                  <span className="text-[#333333] mr-2 font-bold">Tags:</span>
                  <span className="text-[#828282] px-1 py-1">
                    Restaurant,
                  </span>
                  <span className="text-[#828282] px-1 py-1">
                    Dinner,
                  </span>
                  <span className="text-[#828282] px-1 py-1">
                    Pizza,
                  </span>
                  <span className="text-[#828282] px-1 py-1">
                    Yummy,
                  </span>
                </div>
                <div className="flex items-center pr-6 gap-5">
                  <p className="text-[16px] text-[#333333] font-bold">Share:</p>
                  <div className="flex gap-5">
                  <FaFacebookF className="w-[10px] h-[18px] text-[#4F4F4F]" />
                  <FaTwitter className="w-[16px] h-[18px] text-[#4F4F4F]" />
                  <SlSocialInstagram className="w-[14px] h-[18px] text-[#4F4F4F]" />
                  <FaPinterest className="w-[16px] h-[18px] text-[#4F4F4F]" />
                  </div>
                </div>
              </div>
            </div>
          
  
          {/* Comments Section */}
          <div className="mt-10 mb-14">
            <h2 className="text-[32px] text-[#333333] font-bold mb-8">Comments - 03</h2>
  
            {/* Comment 1 */}
            <div className="flex mb-6">
              <Image
                src="/sojibkhan.png"
                alt="Md Moon Khan"
                className="w-[65.41px] h-[65px] rounded-full mr-4"
              />
              <div>
                <div className="flex flex-col justify-start items-start mb-2">
                  <div className="flex gap-2">
                  <h4 className="font-bold text-[16px] text-[#333333]">MD Sojib Khan </h4>
                  <div className="text-[#333333] hover:text-[#FF9F0D] cursor-pointer">
                  <p className="flex gap-1 text-[14px]"><LuReplyAll className="w-[17.5px] h-[18px]"/>Reply</p>
                  </div>
                  </div>
                <p className="flex items-center gap-1 text-[14px] text-[#828282]"><PiCalendarBlankLight className="w-[24.46px] h-[24px] text-[#FF9F0D]"/>June 22, 2020</p>
                </div>
                <p className="text-[16px] text-[#4F4F4F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet <br />
                sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. 
                </p>
              </div>
            </div>
  
            {/* Comment 2 */}
            <div className="flex mb-6 ml-[81px]">
              <Image
                src="/moonkhan.png"
                alt="Md Moon Khan"
                className="w-[65.41px] h-[65px] rounded-full mr-4"
              />
              <div>
                <div className="flex flex-col justify-start items-start mb-2">
                  <div className="flex gap-2">
                  <h4 className="font-bold text-[16px] text-[#333333]">MD Moon Khan </h4>
                  <div className="text-[#333333] hover:text-[#FF9F0D] cursor-pointer">
                  <p className="flex gap-1 text-[14px]"><LuReplyAll className="w-[17.5px] h-[18px]"/>Reply</p>
                  </div>
                  </div>
                  <p className="flex items-center gap-1 text-[14px] text-[#828282]"><PiCalendarBlankLight className="w-[24.46px] h-[24px] text-[#FF9F0D]"/>June 22, 2020</p>
                </div>
                <p className="text-[16px] text-[#4F4F4F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet
                sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. 
                </p>
              </div>
            </div>
  
            {/* Comment 3 */}
            <div className="flex mb-6">
              <Image
                src="/gullikhan.png"
                alt="Md Moon Khan"
                className="w-[65.41px] h-[65px] rounded-full mr-4"
              />
              <div>
                <div className="flex flex-col justify-start items-start mb-2">
                  <div className="flex gap-2">
                  <h4 className="font-bold text-[16px] text-[#333333]">MD Gulli Khan </h4>
                  <div className="text-[#333333] hover:text-[#FF9F0D] cursor-pointer">
                  <p className="flex gap-1 text-[14px]"><LuReplyAll className="w-[17.5px] h-[18px]"/>Reply</p>
                  </div>
                  </div>
                <p className="flex items-center gap-1 text-[14px] text-[#828282]"><PiCalendarBlankLight className="w-[24.46px] h-[24px] text-[#FF9F0D]"/>June 22, 2020</p>
                </div>
                <p className="text-[16px] text-[#4F4F4F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet <br />
                sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. 
                </p>
              </div>
            </div>
          </div>
  
          {/* Post a Comment */}
          <div className="mt-8 mb-[120px]">
            <h2 className="text-[24px] text-[#333333] font-bold mb-6">Post a Comment</h2>
            <div className="text-[#E0E0E0] border-b mb-6 "></div>
            <form className="space-y-4">
              <div className="flex flex-cols-1 md:flex-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name*"
                  className="border px-2 py-2 w-[424px] h-[56px]"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="border px-2 py-2 w-[424px] h-[56px]"
                />
              </div>
              <div className="flex flex-col ">
              <textarea
                placeholder="Write a comment"
                
                className="border border-gray-300 px-2 py-4 h-[244px]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#FF9F0D] w-[212px] h-[56px] text-white mt-6 px-6 py-2 hover:bg-orange-400"
              >
                Post a comment
              </button>
              </div>
            </form>
          </div>
          </div>
        </div>
    );
  }
  