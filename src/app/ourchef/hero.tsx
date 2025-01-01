import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export default function Chefs() {
    return (
      <div className="bg-white">
        {/* Header Section */}
              <div className="relative h-[350px] flex items-center justify-center">
                <Image
                  src="/header.png"
                  alt="Menu Header"
                  fill
                  className="object-cover"
                />
                <div className="absolute z-10 text-center">
                  <h1 className="text-white text-[48px] font-bold">Our Menu</h1>
                  <p className="text-[20px] text-white mt-2 flex items-center justify-center gap-2">
                    Home <MdArrowForwardIos/> <span className="text-[#FF9F0D]">Menu</span>
                  </p>
                </div>
              </div>
  
        {/* Chef Grid */}
        <div className="container mx-auto w-[85%] px-6 py-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Chef Card 1 */}
            <div className="bg-white text-gray-800 w-[312px] overflow-hidden">
              <img
                src="tahminarumi.png"
                alt="Chef 1"
                className="w-[312px] h-[379.17px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-[20px] text-[#333333] font-bold">Tahmina Rumi</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
  
            {/* Chef Card 2 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="/jorinabegum.png"
                alt="Chef 2"
                className="w-[312px] h-[379.17px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Jorina Begum</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
  
            {/* Chef Card 3 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="mmohammad.png"
                alt="Chef 3"
                className="w-[312px] h-[379.17px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">M.Mohammad</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
  
            {/* Chef Card 4 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="munnakathy.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Munna Kathy</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
            
            {/* Chef Card 5 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="tahmina.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Tahmina Rumi</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
            
            {/* Chef Card 6 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="bisnu.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Bisnu Devgon</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
            
            {/* Chef Card 7 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="motin.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Motin Molladsf</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>

            {/* Chef Card 8 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="william.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">William Rumi</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
            
            {/* Chef Card 9 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="kets.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Kets William Roy</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
           
            {/* Chef Card 10 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="mahmud.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Mahmud Kholil</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
            
            {/* Chef Card 11 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="rahman.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Ataur Rahman</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
            
            {/* Chef Card 12 */}
            <div className="bg-white w-[312px] overflow-hidden">
              <img
                src="monalisa.png"
                alt="Chef 4"
                className="w-[312px] h-[379.19px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-arial text-[20px] text-[#333333] font-bold">Monalisa Holly</h3>
                <p className="text-[18px] text-[#333333]">Chef</p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  