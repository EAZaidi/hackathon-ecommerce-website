import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";


export default function Shop() {
  return (
    <div className="text-white">
      {/* Header Section */}
      <div className="relative h-[350px] flex items-center justify-center">
        <Image
          src="/header.png"
          alt="Shop Header"
          fill
          className="object-cover"
        />
        <div className="absolute z-10 text-center">
          <h1 className="text-[48px] font-bold">Our Shop</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos/> <span className="text-[#FF9F0D]">Shop</span>
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12 w-[85%]">
        {/* Sort By and Show Dropdowns */}
        <div className="flex justify-start items-center mb-6 gap-6">
          <div className="flex items-center gap-4">
            <label htmlFor="sortBy" className="text-[#333333] text-[20px]">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="bg-transparent text-[#BDBDBD] p-2 rounded-md border w-[236px] h-[46px]"
            >
              <option value="default">Newest</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="show" className="text-[#333333] text-[20px]">
              Show:
            </label>
            <select
              id="show"
              className="bg-transparent text-[#BDBDBD] p-2 rounded-md border w-[236px] h-[46px]"
            >
              <option value="6" className="text-[#BDBDBD]">
                Default
              </option>
              <option value="9" className="text-[#BDBDBD]">
                9
              </option>
              <option value="12" className="text-[#BDBDBD]">
                12
              </option>
              <option value="15" className="text-[#BDBDBD]">
                15
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Product List */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white overflow-hidden">
              <Image
                src="/freshlime.png"
                alt="Product 1"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Fresh Lime
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">
                    $38.00{" "}
                    <span className="text-[#828282] line-through">$45.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/muffin.png"
                alt="Product 2"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Chocolate Muffin
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#FF9F0D] text-[16px]">$28.00</span>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/shopburger.png"
                alt="Product 3"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">Burger</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">
                    $21.00{" "}
                    <span className="text-[#828282] line-through">$45.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/countryburger.png"
                alt="Product 4"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Country Burger
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#FF9F0D] text-[16px]">$45.00</span>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/shopdrink.png"
                alt="Product 5"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">Drink</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">
                    $23.00{" "}
                    <span className="text-[#828282] line-through">$45.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/shoppizza.png"
                alt="Product 6"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">Pizza</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$43.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/cheesebutter.png"
                alt="Product 7"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Cheese Butter
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$10.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/shopsandwiches.png"
                alt="Product 8"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Sandwiches
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$25.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/chickenchup.png"
                alt="Product 9"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Chicken Chup
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$12.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/countryburger.png"
                alt="Product 10"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Country Burger
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#FF9F0D] text-[16px]">$45.00</span>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/shopdrink.png"
                alt="Product 11"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">Drink</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">
                    $23.00{" "}
                    <span className="text-[#828282] line-through">$45.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/shoppizza.png"
                alt="Product 12"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">Pizza</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$43.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/cheesebutter.png"
                alt="Product 13"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Cheese Butter
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$10.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/shopsandwiches.png"
                alt="Product 14"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Sandwiches
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$25.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden">
              <Image
                src="/chickenchup.png"
                alt="Product 15"
                width={312}
                height={267}
                className="object-cover"
              />
              <div className="pt-2">
                <h4 className="text-[18px] text-[#333333] font-bold">
                  Chicken Chup
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#FF9F0D] text-[16px]">$12.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Filters */}
          <aside className="bg-white text-black p-6 lg:col-span-1 border">
            <div className="flex flex-col-2 border items-center mb-6 text-center">
              <input
                type="text"
                placeholder="Search Product"
                className="flex w-[248px] h-[46px] border bg-[#FFF5E7] p-2"
              />
              <CiSearch className="bg-[#FF9F0D] w-[50px] h-[46px] text-white" />
            </div>

            {/* Categories */}
            <div className="mb-6 text-[#333333]">
              <h4 className="text-[20px] font-bold mb-2 text-[#333333]">
                Category
              </h4>
              <ul className="space-y-4">
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Sandwiches
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Burger
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Chicken Chup
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Drink
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Pizza
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Thi
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Non Veg
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-[18px]">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    Uncategorized
                  </label>
                </li>
              </ul>
            </div>
            {/* Side Banner Image */}
            <Image
              src="banner.png"
              alt="banner"
              className="w-[248px] h-[286px] mb-6"
            />

            {/* Filter by Price */}
            <div className="mb-6">
              <h4 className="text-[20px] font-bold mb-2 text-[#333333]">
                Filter by Price
              </h4>
              <div className="flex flex-col justify-between items-center gap-2">
                <input type="range" min="0" max="8000" className="w-full h-2 bg-[#FF9F0D] appearance-none cursor-pointer dark:bg-[#FF9F0D]" />
                <div className="flex justify-between gap-32 text-[16px] text-[#4F4F4F]">
                  <span className="">$0 to $8000</span>
                  <p>Filter</p>
                </div>
              </div>
            </div>

            {/* Latest Products */}
            <div className="mb-6">
              <h4 className="text-[20px] font-bold mb-2 text-[#333333]">
                Latest Products
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Image
                    src="/product.png"
                    alt="Latest Product 1"
                    width={72}
                    height={65}
                    className="object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-[16px] text-[#4F4F4F]">
                      Pizza
                    </p>
                    <div className="flex space-x-1">
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                    </div>
                    <p className="text-[14px] text-[#4F4F4F]">$35.00</p>
                  </div>
                </li>

                <li className="flex items-center">
                  <Image
                    src="/product.png"
                    alt="Latest Product 2"
                    width={72}
                    height={65}
                    className="object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-[16px] text-[#4F4F4F]">
                      Cupcake
                    </p>
                    <div className="flex space-x-1">
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                    </div>
                    <p className="text-[14px] text-[#4F4F4F]">$35.00</p>
                  </div>
                </li>

                <li className="flex items-center">
                  <Image
                    src="/product.png"
                    alt="Latest Product 3"
                    width={72}
                    height={65}
                    className="object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-[16px] text-[#4F4F4F]">
                      Cookies
                    </p>
                    <div className="flex space-x-1">
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                    </div>
                    <p className="text-[14px] text-[#4F4F4F]">$35.00</p>
                  </div>
                </li>

                <li className="flex items-center">
                  <Image
                    src="/product.png"
                    alt="Latest Product 4"
                    width={72}
                    height={65}
                    className="object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-[16px] text-[#4F4F4F]">
                      Burger
                    </p>
                    <div className="flex space-x-1">
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#FF9F0D] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                      <h1 className="text-[#E0E0E0] w-[10px]">★</h1>
                    </div>
                    <p className="text-[14px] text-[#4F4F4F]">$35.00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-[20px] font-bold mb-2 text-[#333333]">
                Product Tags
              </h4>
              <div className="flex flex-wrap flex-col-3 gap-2">
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Services
                </span>
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Our Menu
                </span>
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Pizza
                </span>
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Cupcake
                </span>
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Burger
                </span>
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Cookies
                </span>
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Our Shop
                </span>
                <span className="text-[#4F4F4F] border-b px-3 py-1 text-[16px] cursor-pointer">
                  Tandoori Chicken
                </span>
              </div>
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="bg-transparent border text-[#FF9F0D] font-bold w-[50px] h-[50px] hover:text-white hover:bg-[#FF9F0D]">
              &lt;&lt;
            </button>
            <button className="bg-transparent border text-[#FF9F0D] font-bold w-[50px] h-[50px] hover:text-white hover:bg-[#FF9F0D]">
              1
            </button>
            <button className="bg-transparent border text-[#FF9F0D] font-bold w-[50px] h-[50px] hover:text-white hover:bg-[#FF9F0D]">
              2
            </button>
            <button className="bg-transparent border text-[#FF9F0D] font-bold w-[50px] h-[50px] hover:text-white hover:bg-[#FF9F0D]">
              3
            </button>
            <button className="bg-transparent border text-[#FF9F0D] font-bold w-[50px] h-[50px] hover:text-white hover:bg-[#FF9F0D]">
              &gt;&gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
