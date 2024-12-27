// import Image from "next/image";

// const Shopping = () => {
//   return (
//     <div className="bg-white">
//       {/* Header Section */}
//       <div className="relative h-[350px] flex items-center justify-center text-white">
//         <Image
//           src="/header.png"
//           alt="Shop Header"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute z-10 text-center">
//           <h1 className="text-5xl font-bold">Shopping Cart</h1>
//           <p className="text-[20px] mt-4 hover:cursor-pointer">
//             Home &gt; <span className="text-[#FF9F0D] text-[20px]">Shopping cart</span>
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-10">
//         {/* Table */}
//         <div className="bg-white overflow-hidden">
//           <table className="min-w-full">
//             <thead className="bg-white">
//               <tr>
//                 <th className="px-6 py-4 text-left text-[#333333] font-[18px]">Product</th>
//                 <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Price</th>
//                 <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Quantity</th>
//                 <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Total</th>
//                 <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { name: "Burger", price: 35.00, quantity: 1, total: 221.00, image: "/cartburger.png", rating: 3 },
//                 { name: "Fresh Lime", price: 25.00, quantity: 1, total: 521.00, image: "/cartfreshlime.png", rating: 3 },
//                 { name: "Pizza", price: 15.00, quantity: 1, total: 421.00, image: "/cartpizza.png", rating: 3 },
//                 { name: "Chocolate Muffin", price: 45.00, quantity: 1, total: 521.00, image: "/cartmuffin.png", rating: 3 },
//                 { name: "Chicken Butter", price: 15.00, quantity: 1, total: 325.00, image: "/cartcheesebutter.png", rating: 3 },
//               ].map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="px-6 py-4 flex space-x-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-[93.12px] h-[97.13px] rounded object-cover"
//                     />
//                     <div>
//                       <span className="font-bold">{item.name}</span>
//                       <div className="flex text-[#FF9F0D] w-[20px] h-[20px] mt-1">
//                         {Array.from({ length: 5 }, (_, i) => (
//                           <span key={i}>
//                             {i < item.rating ? "★" : "☆"}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-center text-[#333333]">${item.price.toFixed(2)}</td>
//                   <td className="px-6 py-4 text-center">
//                     <div className="flex items-center justify-center space-x-2 border rounded-full">
//                       <button className="px-2 py-1 bg-transparent text-[16px] text-[#333333] rounded hover:bg-[#FF9F0D]">
//                         -
//                       </button>
//                       <span className="text-gray-700">{item.quantity}</span>
//                       <button className="px-2 py-1 bg-transparent text-[16px] text-[#333333] rounded hover:bg-[#FF9F0D]">
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-center text-[#333333] font-bold">${item.total.toFixed(2)}</td>
//                   <td className="px-6 py-4 text-center">
//                     <button className="text-[#333333] hover:text-[#FF9F0D]">X</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
//           {/* Coupon Section */}
          
//           <h2 className="text-lg font-bold mb-4">Coupon Code</h2>
//           <div className="bg-white shadow rounded-lg p-6 w-full lg:w-1/2">
            
//             <p className="text-sm text-gray-500 mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
//             Quisque diam pellentesque bibendum non
//             </p>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Enter coupon code"
//                 className="flex-1 px-4 py-2 h-[62px] border rounded"
//               />
//               <button className="px-4 py-2 w-[89px] h-[62px] bg-[#FF9F0D] text-white rounded hover:bg-orange-400">
//                 Apply
//               </button>
//             </div>
//           </div>

//           {/* Total Bill Section */}
//           <h2 className="text-lg font-bold mb-4">Total Bill</h2>
//           <div className="bg-white shadow rounded-lg p-6 w-full lg:w-1/3">
            
//             <div className="space-y-2">
//               <div className="flex justify-between text-gray-600">
//                 <span>Cart Subtotal:</span>
//                 <span>$53.48</span>
//               </div>
//               <div className="flex justify-between text-gray-600">
//                 <span>Shipping Charge:</span>
//                 <span>$2.50</span>
//               </div>
//               <div className="flex justify-between text-gray-800 border-t border-b font-bold">
//                 <span>Total Amount:</span>
//                 <span>$55.98</span>
//               </div>
//             </div>
//             <button className="mt-6 w-full px-4 py-2 bg-[#FF9F0D] text-white rounded hover:bg-orange-400">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shopping;

import Image from "next/image";
import { PiCheckSquareOffsetLight } from "react-icons/pi";

const Shopping = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative h-[350px] flex items-center justify-center text-white">
        <Image
          src="/header.png"
          alt="Shop Header"
          fill
          className="object-cover"
        />
        <div className="absolute z-10 text-center">
          <h1 className="text-5xl font-bold">Shopping Cart</h1>
          <p className="text-[20px] mt-4 hover:cursor-pointer">
            Home &gt; <span className="text-[#FF9F0D] text-[20px]">Shopping cart</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Table */}
        <div className="bg-white overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-4 text-left text-[#333333] font-[18px]">Product</th>
                <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Price</th>
                <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Quantity</th>
                <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Total</th>
                <th className="px-6 py-4 text-center text-[#333333] font-[18px]">Remove</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Burger", price: 35.0, quantity: 1, total: 221.0, image: "/cartburger.png", rating: 3 },
                { name: "Fresh Lime", price: 25.0, quantity: 1, total: 521.0, image: "/cartfreshlime.png", rating: 3 },
                { name: "Pizza", price: 15.0, quantity: 1, total: 421.0, image: "/cartpizza.png", rating: 3 },
                { name: "Chocolate Muffin", price: 45.0, quantity: 1, total: 521.0, image: "/cartmuffin.png", rating: 3 },
                { name: "Chicken Butter", price: 15.0, quantity: 1, total: 325.0, image: "/cartcheesebutter.png", rating: 3 },
              ].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4 flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[93.12px] h-[97.13px] rounded object-cover"
                    />
                    <div>
                      <span className="font-bold">{item.name}</span>
                      <div className="flex text-[#FF9F0D] w-[20px] h-[20px] mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-[#333333]">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center space-x-2 border rounded-full">
                      <button className="px-2 py-1 bg-transparent text-[16px] text-[#333333] rounded hover:bg-[#FF9F0D]">
                        -
                      </button>
                      <span className="text-gray-700">{item.quantity}</span>
                      <button className="px-2 py-1 bg-transparent text-[16px] text-[#333333] rounded hover:bg-[#FF9F0D]">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-[#333333] font-bold">${item.total.toFixed(2)}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-[#333333] hover:text-[#FF9F0D]">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 p-6 flex flex-col lg:flex-row justify-between items-start lg:items-start gap-6 space-y-6 lg:space-y-0 text-[#333333]">
          {/* Coupon Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] font-bold mb-4">Coupon Code</h2>
            <div className="bg-white shadow border border-[#BDBDBD] rounded-md p-6">
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
                Quisque diam pellentesque bibendum non
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter Code Here"
                  className="flex-1 px-4 py-2 h-[62px] border rounded"
                />
                <button className="px-4 py-2 w-[89px] h-[62px] bg-[#FF9F0D] text-white rounded hover:bg-orange-400">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Total Bill Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] font-bold mb-4">Total Bill</h2>
            <div className="bg-white shadow border border-[#BDBDBD] rounded-md p-5">
              <div className="space-y-2">
                <div className="flex justify-between text-[#333333] font-bold">
                  <span className="text-[20px]">Cart Subtotal</span>
                  <span className="text-[18px]">$120.00</span>
                </div>
                <div className="flex justify-between text-[#333333] text-[18px] border-b-2">
                  <span>Shipping Charge</span>
                  <span>$00.00</span>
                </div>
                <div className="flex justify-between text-gray-800 font-bold pt-6">
                  <span className="text-[20px]">Total Amount</span>
                  <span className="text-[18px]">$205.00</span>
                </div>
              </div>
            </div>
            <button className=" flex items-center justify-center gap-2 mt-6 w-full h-[64px] px-4 py-2 bg-[#FF9F0D] text-white text-[18px] rounded hover:bg-orange-400">
              Proceed to Checkout<PiCheckSquareOffsetLight className="w-[20px] h-[20px]"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
