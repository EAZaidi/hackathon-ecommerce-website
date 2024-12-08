export default function StatsSection() {
    return (
      <section
        className="relative bg-cover bg-center py-16 p-8"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative container mx-auto text-center text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Professional Chefs */}
          <div className="flex flex-col items-center">
            <img
              src="/group1.png"
              alt="Professional Chefs"
              className="h-[120px] w-[120px] mb-4"
            />
            <h3 className="text-[24px] font-[Helvetica] font-semibold">Professional Chefs</h3>
            <p className="text-[40px] font-bold mt-2">420</p>
          </div>
          {/* Items of Food */}
          <div className="flex flex-col items-center">
            <img
              src="/group2.png"
              alt="Items of Food"
              className="h-[120px] w-[120px] mb-4"
            />
            <h3 className="text-[24px] font-[Helvetica] font-semibold">Items Of Food</h3>
            <p className="text-[40px] font-bold mt-2">320</p>
          </div>
          {/* Years of Experience */}
          <div className="flex flex-col items-center">
            <img
              src="/group3.png"
              alt="Years of Experience"
              className="h-[120px] w-[120px] mb-4"
            />
            <h3 className="text-[24px] font-[Helvetica] font-semibold">Years Of Experienced</h3>
            <p className="text-[40px] font-bold mt-2">30+</p>
          </div>
          {/* Happy Customers */}
          <div className="flex flex-col items-center">
            <img
              src="/group4.png"
              alt="Happy Customers"
              className="h-[120px] w-[120px] mb-4"
            />
            <h3 className="text-[24px] font-[Helvetica] font-semibold">Happy Customers</h3>
            <p className="text-[40px] font-bold mt-2">220</p>
          </div>
        </div>
      </section>
    );
  }
  