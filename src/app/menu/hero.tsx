import Image from 'next/image';
import { PiCoffee } from "react-icons/pi";
import StatsSection from "../components/StatsSection";
import { MdArrowForwardIos } from "react-icons/md";

export default function Menu() {
  return (
    
    <div className="bg-white text-white ">
      {/* Header Section */}
      <div className="relative h-[350px] flex items-center justify-center">
        <Image
          src="/header.png"
          alt="Menu Header"
          fill
          className="object-cover"
        />
        <div className="absolute z-10 text-center">
          <h1 className="text-[48px] font-bold">Our Menu</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos/> <span className="text-[#FF9F0D]">Menu</span>
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container bg-white text-[#333333] mx-auto px-2 py-40 w-[85%]">
        {/* Starter Menu */}
        <div className="mb-12">

          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div>
              <Image
                src="/menu1.png" // Replace with your starter dish image path
                alt="Starter Dish"
                width={448}
                height={626}
                className="object-cover"
              />
            </div>
            <div>
            <PiCoffee className="text-[#FF9F0D] w-[24px] h-[24px]"/>
            <h2 className="text-[48px] font-bold inline-block mb-6">
                        Starter Menu
                    </h2>
              <ul className="space-y-6">
                <li className="flex justify-between items-start">
                    
                  <div>
                  
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Alder Grilled Chinook Salmon</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Mixed greens, hazelnut brown butter, potato</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">32$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Berries and creme tart</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Vegetables, zucchini, beetle, sage</p>
                    <span className="text-[#828282] text-[16px]">700 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">43$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Tormentoso Bush Pizza Pintoage</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Ground cumin, avocados, peeled and cubed</p>
                    <span className="text-[#828282] text-[16px]">1000 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">14$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Spicy Vegan Potato Curry</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Spreadable cream cheese, crumbled blue cheese</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">35$</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Course */}
        <div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-28">

            <div>
            <PiCoffee className="text-[#FF9F0D] w-[24px] h-[24px]"/>
          <h2 className="text-[48px] font-bold inline-block mb-6">
            Main Course
          </h2>
              <ul className="space-y-6">
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Optic Big Breakfast Combo Menu</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Toasted French bread topped with romano, cheddar</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">32$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                  <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Cashew Chicken With Stir-Fry</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                    <span className="text-[#828282] text-[16px]">700 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">43$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                  <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Vegetables & Green Salad</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Ground cumin, avocados, peeled and cubed</p>
                    <span className="text-[#828282] text-[16px]">1000 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">14$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                  <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Spicy Vegan Potato Curry</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Spreadable cream cheese, crumbled blue cheese</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">35$</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-end pt-8 pb-8">
              <Image
                src="/menu2.png"
                alt="Main Course"
                width={448}
                height={626}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section From Landing Page */}
      
      <StatsSection/>

      {/* 2nd Menu Content */}
      <div className="container bg-white text-[#333333] mx-auto px-2 py-40 w-[85%]">
        {/* Dessert */}
        <div className="mb-12">

          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div>
              <Image
                src="/dessert.png"
                alt="Starter Dish"
                width={448}
                height={626}
                className="object-cover"
              />
            </div>
            <div>
            <PiCoffee className="text-[#FF9F0D] w-[24px] h-[24px]"/>
            <h2 className="text-[48px] font-bold inline-block mb-6">
            Dessert
                    </h2>
              <ul className="space-y-6">
                <li className="flex justify-between items-start">
                    
                  <div>
                  
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Fig and lemon cake</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Toasted French bread topped with romano, cheddar</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">32$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Creamy mascarpone cake</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                    <span className="text-[#828282] text-[16px]">700 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">43$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Pastry, blueberries, lemon juice</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Ground cumin, avocados, peeled and cubed</p>
                    <span className="text-[#828282] text-[16px]">1000 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">14$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Pain au chocolat</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Spreadable cream cheese, crumbled blue cheese</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">35$</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Drinks */}
        <div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-28">

            <div>
            <PiCoffee className="text-[#FF9F0D] w-[24px] h-[24px]"/>
          <h2 className="text-[48px] font-bold inline-block mb-6">
          Drinks
          </h2>
              <ul className="space-y-6">
                <li className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Caffè macchiato</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Toasted French bread topped with romano, cheddar</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">32$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                  <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Aperol Spritz Capacianno</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                    <span className="text-[#828282] text-[16px]">700 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">43$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                  <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Caffe Latte Campuri</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Ground cumin, avocados, peeled and cubed</p>
                    <span className="text-[#828282] text-[16px]">1000 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">14$</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                  <h3 className="text-[24px] font-semibold text-[#333333] pb-2">Tormentoso BushTea Pintoage</h3>
                    <p className="text-sm text-[#4F4F4F] pb-2">Spreadable cream cheese, crumbled blue cheese</p>
                    <span className="text-[#828282] text-[16px]">560 CAL</span>
                  </div>
                  <span className="text-[#FF9F0D] text-[24px] font-bold">35$</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-end pt-8 pb-8">
              <Image
                src="/drinks.png"
                alt="Main Course"
                width={448}
                height={626}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partners & Clients Section */}
        <div className="container mx-auto text-center pt-12 pb-40">
          <h3 className="text-[18px] text-[#333333]">Partners & Clients</h3>
          <h2 className="text-[48px] text-[#333333] font-bold mt-2">We work with the best people</h2>
          <div className="flex flex-wrap justify-center gap-[70px] mt-8">
            <Image
              src="/partner1.png" // Replace with actual logo paths
              alt="Partner 1"
              width={240.96}
              height={129.23}
              className="object-contain"
            />
            <Image
              src="/partner2.png"
              alt="Partner 2"
              width={166.04}
              height={128.68}
              className="object-contain"
            />
            <Image
              src="/partner3.png"
              alt="Partner 3"
              width={143.98}
              height={127.01}
              className="object-contain"
            />
            <Image
              src="/partner4.png"
              alt="Partner 4"
              width={130.98}
              height={129.37}
              className="object-contain"
            />
            <Image
              src="/partner5.png"
              alt="Partner 5"
              width={170}
              height={129}
              className="object-contain"
            />
            <Image
              src="/partner6.png"
              alt="Partner 6"
              width={114}
              height={129}
              className="object-contain"
            />
          </div>
        </div>
    </div>
    
  );
}

