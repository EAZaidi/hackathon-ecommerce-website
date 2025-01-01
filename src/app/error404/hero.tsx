// pages/404.tsx
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white text-gray-800">
      {/* Header Section */}
      <div className="relative w-full h-[350px] flex items-center justify-center bg-black">
        <Image
          src="/header.png"
          alt="404 Background"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute z-10 text-center text-white">
        <h1 className="text-[48px] font-bold">404 Error</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos/> <span className="text-[#FF9F0D]">404</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center text-center px-6 m-32">
        <h2 className="text-[96px] font-bold text-[#FF9F0D]">404</h2>
        <p className="mt-4 text-[32px] font-bold text-[#333333]">
          Oops! Looks like something going wrong
        </p>
        <p className="mt-2 text-[18px] text-[#4F4F4F]">
        Page Cannot be found! we&apos;ll have it figured out in no time.
        </p>
        <p className="text-[18px] text-[#4F4F4F]">
        Meanwhile, cheek out these fresh ideas:
        </p>
        <Link href="/" className="mt-6 flex items-center justify-center w-[197px] h-[58px] bg-[#FF9F0D] text-white text-[18px] px-6 py-2 rounded-md shadow-lg hover:bg-orange-500">
            Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
