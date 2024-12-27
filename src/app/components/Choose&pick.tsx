// pages/index.js
import Image from 'next/image';

export default function ChoosePick() {
  const menuItems = [
    { name: "Lettuce Leaf", price: "12.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/lettuce.png" },
    { name: "Glow Cheese", price: "12.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/glow-cheese.png" },
    { name: "Fresh Breakfast", price: "14.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/fresh-breakfast.png" },
    { name: "Italian Pizza", price: "14.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/italianpizza.png" },
    { name: "Mild Butter", price: "12.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/mild-butter.png" },
    { name: "Slice Beef", price: "12.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/slice-beef.png" },
    { name: "Fresh Bread", price: "12.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/bread.png" },
    { name: "Mushroom Pizza", price: "12.5", description: "Lacus nisi, et ac dapibus velit in consequat.", image: "/mush-pizza.png" },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
        <div  className='w-[85%] pt-20'>
      <h1 className="great_vibes text-[#FF9F0D] text-[32px] mb-2 flex justify-center">Choose & pick</h1>
      <h2 className="text-[48px] font-bold flex justify-center"><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h2>
      <div className="flex justify-start mt-6 space-x-6 text-[20px] text-white gap-24">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((category) => (
          <button key={category} className="hover:underline hover:text-[#FF9F0D]">{category}</button>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6">
        <div>
          <Image src="/choose1.png" alt="Salad" width={515} height={406} className="flex justify-center" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className=" flex items-center space-x-2">
              <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
              <div>
                <h3 className="text-[20px] font-bold">{item.name}</h3>
                <p className="text-[14px] text-white">{item.description}</p>
                <p className="text-[#FF9F0D] text-[18px] font-bold">{item.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
