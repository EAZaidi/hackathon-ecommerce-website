import Image from "next/image";


 const WhyChooseUs = () => {
   return (
     <div className="bg-black text-white py-32 px-6 ">
       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-72 w-[85%]">
         {/* Image Grid Section */}
         <div className="grid grid-cols-3 grid-rows-2 gap-1 relative">
           {/* Image 1: Large image spanning two rows */}
           <Image
             src="/shawarma.png"
             alt="Large Image"
             className="col-span-2 row-span-2 rounded-lg h-[356px] w-[362px] object-cover"
           />

           {/* Image 2 */}
           <Image
             src="/food2.png"
             alt="Small Image"
             className="rounded-lg w-[281px] h-[231px] object-cover"
           />

           {/* Image 3 */}
           <Image
             src="/beef.png"
             alt="Small Image"
             className="rounded-lg w-[161px] h-[168px] object-cover"
           />

           {/* Image 4 */}
           <Image
             src="/nuggets.png"
             alt="Small Image"
             className="rounded-lg w-[244px] h-[306px] object-cover"
           />

           {/* Image 5 */}
           <Image
             src="/cheese.png"
             alt="Small Image"
             className="rounded-lg w-[221px] h-[226px] object-cover"
           />

           {/* Image 6 */}
           <Image
             src="/salad.png"
             alt="Small Image"
             className="rounded-lg w-[161px] h-[166px] object-cover"
           />
         </div>

         {/* Text and Info Section */}
         <div className="flex flex-col justify-center">
           {/* Header */}
           <h3 className="great_vibes text-[#ff9a00] text-[32px]">Why Choose Us</h3>
           <h1 className="text-white text-[48px] font-bold mt-2">
             <span className="text-[#ff9a00]">Ex</span>tra ordinary Taste <br />
             And Experienced
           </h1>
           <p className="text-gray-400 mt-4">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
           pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br />
           augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />
           sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />
           consequat.
           </p>

           {/* Features Section */}
           <div className="flex flex-cols-3 gap-8 mt-8">
             {/* Feature 1 */}
             <div className="flex flex-col items-center">
               <div className="bg-[#FF9F0D] text-white w-[102px] h-[100px] flex items-center justify-center rounded-md">
                 <Image src="/Hamburger.png" alt="burger" />
               </div>
               <span className="text-white hover:text-[#FF9F0D] hover:cursor-pointer mt-2">Fast Food</span>
             </div>

             {/* Feature 2 */}
             <div className="flex flex-col items-center">
               <div className="bg-[#FF9F0D] text-white w-[102px] h-[100px] flex items-center justify-center rounded-md">
                 <Image src="/Cookie.png" alt="" />
               </div>
               <span className="text-white hover:text-[#FF9F0D] hover:cursor-pointer mt-2">Lunch</span>
             </div>

             {/* Feature 3 */}
             <div className="flex flex-col items-center">
               <div className="bg-[#FF9F0D] text-white w-[102px] h-[100px] flex items-center justify-center rounded-md">
               <Image src="/Wine.png" alt="wine" />
               </div>
               <span className="text-white hover:text-[#FF9F0D] hover:cursor-pointer mt-2">Dinner</span>
             </div>
           </div>

           {/* Experience Section */}
           <div className="mt-8">
             <div className="bg-white border-l-[18px] border-[#ff9a00] w-[374px] h-[93px] flex flex-col-2 items-center justify-between text-black px-6 py-4 rounded-lg">
               <h2 className="text-5xl text-[#ff9a00] font-bold">30+</h2>
               <p className="text-[20px]">Years of <br />
               <span className="font-bold text-[24px]">Experienced</span></p>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default WhyChooseUs;

