import React from "react";

const FoodCategory = () => {
  return (
    <section className="bg-black text-white py-32 px-6">
        <div className="container mx-auto flex flex-wrap items-center justify-center w-[85%]">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="great_vibes text-[#ff9a00] text-lg ">Food Category</h2>
        <h1 className="text-white font-bold font-[Helvetica] text-[48px]">
          <span className="font-[Helvetica] text-[48px] text-[#ff9a00]">Choose</span> Food Item
        </h1>
      </div>

      {/* Food Items Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Food Item 1 */}
        <div className="relative group gap-2">
          <img
            src="/food1.png"
            alt="Desert"
            className="rounded-lg group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="w-[125px] h-[30px] bg-white text-[#ff9a00] text-sm py-2 px-6 flex items-center justify-center rounded-lg font-medium">
              Save 30% <br />
              </span>
              <span className="w-[206px] h-[46px] text-white text-sm bg-[#ff9a00] rounded-lg flex items-center justify-center">
                Desert
              </span>
          </div>
        </div>

        {/* Food Item 2 */}
        <div className="relative group">
          <img
            src="/food2.png" // Replace with your image
            alt="Burger"
            className="rounded-lg group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="w-[125px] h-[30px] bg-white text-[#ff9a00] text-sm py-2 px-6 flex items-center justify-center rounded-lg font-medium">
              Save 30% <br />
              </span>
              <span className="w-[206px] h-[46px] text-white text-sm bg-[#ff9a00] rounded-lg flex items-center justify-center">
                Fast Food Dish
              </span>
          </div>
        </div>

        {/* Food Item 3 */}
        <div className="relative group">
          <img
            src="/food3.png" // Replace with your image
            alt="Healthy Dish"
            className="rounded-lg group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="w-[125px] h-[30px] bg-white text-[#ff9a00] text-sm py-2 px-6 flex items-center justify-center rounded-lg font-medium">
              Save 30% <br />
              </span>
              <span className="w-[206px] h-[46px] text-white text-sm bg-[#ff9a00] rounded-lg flex items-center justify-center">
                Healthy Dish
              </span>
          </div>
        </div>

        {/* Food Item 4 */}
        <div className="relative group">
          <img
            src="/food4.png" // Replace with your image
            alt="Donuts"
            className="rounded-lg group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="w-[125px] h-[30px] bg-white text-[#ff9a00] text-sm py-2 px-6 flex items-center justify-center rounded-lg font-medium">
              Save 30% <br />
              </span>
              <span className="w-[206px] h-[46px] text-sm text-white bg-[#ff9a00] rounded-lg flex items-center justify-center">
                Donuts
              </span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FoodCategory;
