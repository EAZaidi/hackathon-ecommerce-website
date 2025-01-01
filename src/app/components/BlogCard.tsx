import Image from 'next/image';
import { PiArrowLineUpRight } from "react-icons/pi";
import { LiaComments } from "react-icons/lia";
import { PiUserCirclePlus } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";


const BlogCard= () => {
  return (
    <div className='w-full md:w-[85%] flex flex-col md:mt-[30px] mt-[50px] mb-[50px] bg-white'>
                                  
                                  {/* Blog # 1 */}
      <div className='mb-14'>
      {/* Image Section */}
      <div className='relative md:w-[872px] h-[300px] md:h-[520px]'>
        
        <Image
          src={'/blogcard1.png'}
          alt='Blog Image'
          layout='fill'
          objectFit='cover'
          className='object-cover'
        />
        {/* Label */}
        <div className="absolute flex flex-col items-center justify-center rounded-md top-6 left-6 bg-[#FF9F0D] w-[60px] h-[60px]  px-4 py-1">
          <span className='text-white text-[18px] font-bold'>14</span>
          <span className='text-[16px] text-white'>Feb</span>
        </div>
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
        <hr className='my-4 border-b' />

        {/* Paragraph */}
        <p className='text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, <br /> 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <br />
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et <br />
        dolore magna aliquyam erat
        </p>

        {/* Read More Button */}
        <button className='w-[172px] h-[52px] mt-6 flex border-[1px] gap-2 border-[#FF9F0D] p-2 rounded-md items-center justify-center text-[16px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white'>
          Read More <PiArrowLineUpRight/>
        </button>
      </div>
    </div>
                                          {/* Blog # 2 */}
      <div className='mb-14'>
      {/* Image Section */}
      <div className='relative md:w-[872px] h-[300px] md:h-[520px]'>
        
        <Image
          src={'/blogcard2.png'}
          alt='Blog Image'
          layout='fill'
          objectFit='cover'
          className='object-cover w-[871px] h-[520px]'
        />
        {/* Label */}
        <div className="absolute flex flex-col items-center justify-center rounded-md top-6 left-6 bg-[#FF9F0D] w-[60px] h-[60px]  px-4 py-1">
          <span className='text-white text-[18px] font-bold'>14</span>
          <span className='text-[16px] text-white'>Feb</span>
        </div>
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
        Traditional Soft Pretzels with Sweet Beer Cheese
        </h2>

        {/* Horizontal Line */}
        <hr className='my-4 border-b' />

        {/* Paragraph */}
        <p className='text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, <br /> 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <br />
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et <br />
        dolore magna aliquyam erat
        </p>

        {/* Read More Button */}
        <button className='w-[172px] h-[52px] mt-6 flex border-[1px] gap-2 border-[#FF9F0D] p-2 rounded-md items-center justify-center text-[16px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white'>
          Read More <PiArrowLineUpRight/>
        </button>
      </div>
    </div>

                                  {/* Blog # 3 */}
    <div className='mb-14'>
                                  {/* Image Section */}
      <div className='relative md:w-[872px] h-[300px] md:h-[520px]'>
        
        <Image
          src={'/blogcard3.png'}
          alt='Blog Image'
          layout='fill'
          objectFit='cover'
          className='object-cover w-[871px] h-[520px]'
        />
        {/* Label */}
        <div className="absolute flex flex-col items-center justify-center rounded-md top-6 left-6 bg-[#FF9F0D] w-[60px] h-[60px]  px-4 py-1">
          <span className='text-white text-[18px] font-bold'>14</span>
          <span className='text-[16px] text-white'>Feb</span>
        </div>
      </div>

      {/* Text Content */}
      <div >
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
          <PiUserCirclePlus className='text-[#FF9F0D] w-[24px] h-[24px] ml-2'/> 
          Admin
          </div>
        </div>

        {/* Title */}
        <h2 className='mt-4 text-[16px] md:text-[24px] font-bold leading-[24px] text-[#333333] pb-4'>
        The Ultimate Hangover Burger: Egg in a Hole Burger
        </h2>

        {/* Horizontal Line */}
        <hr className='my-4 border-b' />

        {/* Paragraph */}
        <p className='text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, <br /> 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <br />
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et <br />
        dolore magna aliquyam erat
        </p>

        {/* Read More Button */}
        <button className='w-[172px] h-[52px] mt-6 flex border-[1px] gap-2 border-[#FF9F0D] p-2 rounded-md items-center justify-center text-[16px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white'>
          Read More <PiArrowLineUpRight/>
        </button>
      </div>
      </div>                              
                                  {/* Blog # 4 */}
                                  {/* Image Section */}
      <div className='relative md:w-[872px] h-[300px] md:h-[520px]'>
        
        <Image
          src={'/blogcard4.png'}
          alt='Blog Image'
          layout='fill'
          objectFit='cover'
          className='object-cover w-[871px] h-[520px]'
        />
        {/* Label */}
        <div className="absolute flex flex-col items-center justify-center rounded-md top-6 left-6 bg-[#FF9F0D] w-[60px] h-[60px]  px-4 py-1">
          <span className='text-white text-[18px] font-bold'>14</span>
          <span className='text-[16px] text-white'>Feb</span>
        </div>
      </div>

      {/* Text Content */}
      <div className=''>
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
          <PiUserCirclePlus className='text-[#FF9F0D] w-[24px] h-[24px] ml-2'/> 
          Admin
          </div>
        </div>

        {/* Title */}
        <h2 className='mt-4 text-[16px] md:text-[24px] font-bold leading-[24px] text-[#333333] pb-4'>
        My Favorite Easy Black Pizza Toast Recipe
        </h2>

        {/* Horizontal Line */}
        <hr className='my-4 border-b' />

        {/* Paragraph */}
        <p className='text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, <br /> 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <br />
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et <br />
        dolore magna aliquyam erat
        </p>

        {/* Read More Button */}
        <button className='w-[172px] h-[52px] mt-6 flex border-[1px] gap-2 border-[#FF9F0D] p-2 rounded-md items-center justify-center text-[16px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white'>
          Read More <PiArrowLineUpRight/>
        </button>
      </div>
    </div>

    
  );
};

export default BlogCard;
