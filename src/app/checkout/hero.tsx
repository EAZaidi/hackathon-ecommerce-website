import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative w-full h-[350px] flex items-center justify-center">
        <Image
          src="/header.png"
          alt="404 Background"
          fill
          className="object-cover"
        />
        <div className="absolute z-10 text-center text-white">
          <h1 className="text-[48px] font-bold">Checkout Page</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos/> <span className="text-[#FF9F0D]">Checkout</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container w-[85%] mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-28 mb-20">
        {/* Left Section - Shipping and Billing Address */}
        <div className="lg:col-span-2 bg-white p-4">
          <h2 className="text-[20px] text-[#333333] font-semibold mb-4">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-[16px] text-[#333333]">First Name
              <input
                type="text"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
            <p className="text-[16px] text-[#333333] ml-4">Last Name
              <input
                type="text"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
            <p className="text-[16px] text-[#333333]">Email Address
              <input
                type="email"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
            <p className="text-[16px] text-[#333333] ml-4">Phone Number
              <input
                type="tel"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
            <p className="text-[16px] text-[#333333]">Company
              <input
                type="text"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
            <p className="text-[16px] text-[#333333] ml-4">Country
              <select
                className="border border-[#E0E0E0] w-[424px] h-[56px] bg-white"
              >
                <option value="">Choose Country</option>
                <option value="pk">Pakistan</option>
              </select>
            </p>
            <p className="text-[16px] text-[#333333]">City
              <select
                className="border border-[#E0E0E0] w-[424px] h-[56px] bg-white"
              >
                <option value="">Choose City</option>
                <option value="khi">Karachi</option>
                <option value="hbd">Hyderabad</option>
                <option value="lhr">Lahore</option>
                <option value="skt">Sialkot</option>
              </select>
            </p>
            <p className="text-[16px] text-[#333333] ml-4">Zip Code
              <input
                type="text"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
            <p className="text-[16px] text-[#333333]">Address 1
              <input
                type="text"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
            <p className="text-[16px] text-[#333333] ml-4">Address 2
              <input
                type="text"
                className="border border-[#E0E0E0] w-[424px] h-[56px]"
              />
            </p>
          </form>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Same as shipping address</span>
            </label>
          </div>

          <div className="flex justify-between mt-6 gap-6">
            <div>
              <button className="w-[424px] h-[56px] border hover:bg-[#FF9F0D] text-[16px] text-[#4F4F4F] flex items-center justify-center hover:text-white gap-2">
                <MdArrowBackIos />Back to cart
              </button>
            </div>
            <div>
              <button className="w-[424px] h-[56px] border border-[#E0E0E0] hover:bg-[#FF9F0D] text-[16px] text-[#4F4F4F] flex items-center justify-center hover:text-white gap-2">
                Proceed to shipping<MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="bg-white p-6 border ml-4 w-[424px] h-[700px]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start justify-start space-x-4">
                <img
                  src="/tikka.png"
                  alt="Product"
                  className="w-[82.72px] h-[88px]"
                />
                <div className="flex-1">
                  <p className="text-[16px] font-bold pb-2">Chicken Tikka Kabab</p>
                  <p className="text-[14px] text-[#4F4F4F] pb-2">150 gm net</p>
                  <p className="text-[14px] text-[#4F4F4F]">50$</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-[16px] text-[#4F4F4F]">Sub-total</span>
              <span className="text-[16px] text-[#333333]">$130</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] text-[#4F4F4F]">Shipping</span>
              <span className="text-[16px] text-[#333333]">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] text-[#4F4F4F]">Discount</span>
              <span className="text-[16px] text-[#333333]">25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] text-[#4F4F4F]">Tax</span>
              <span className="text-[16px] text-[#333333]">54.76$</span>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <span className="text-[18px] text-[#333333]">Total</span>
              <span className="text-[18px] font-bold text-[#333333]">432.65$</span>
            </div>
          </div>

          <button className="w-[376px] h-[58px] flex items-center justify-center gap-4 mt-4 bg-[#FF9F0D] text-[18px] text-white py-2 rounded">
            Place an order <FaArrowRightLong className="w-[20px] h-[19.5px] text-white"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
