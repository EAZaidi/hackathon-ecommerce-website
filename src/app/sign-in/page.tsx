import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <title className="flex items-center justify-start">Sign In</title>

      {/* Header Section */}
                    <div className="relative h-[350px] flex items-center justify-center">
                      <Image
                        src="/header.png"
                        alt="Menu Header"
                        fill
                        className="object-cover"
                      />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
          <h2 className="text-white text-[48px] font-bold">Sign In</h2>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos />{" "}
          <span className="text-[#FF9F0D]">Sign in</span>
          </p>
        </div>
      </div>
      
      {/* Sign-In Form Section */}
      <div className="flex flex-grow items-center justify-center py-[120px] shadow-xl shadow-[#FF9F0D]">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
          <h1 className="text-[20px] text-[#333333] font-semibold flex text-center mb-6">Sign In</h1>
          <form>
            <div className="mb-4">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm hover:border-[#FF9F0D] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm hover:border-[#FF9F0D] sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#FF9F0D] border-gray-300"
                />
                <span className="ml-2 text-[#333333]">Remember me?</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF9F0D] text-white py-2 px-4 rounded-sm hover:bg-orange-400 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Sign In
            </button>
            <a
              href="#"
              className="text-sm flex justify-end pt-2 text-[#828282] hover:underline hover:text-[#FF9F0D]"
            >
              Forgot password?
            </a>
          </form>
          <div className="my-6 text-center text-gray-500">OR</div>
          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-4 px-4 py-2 border border-gray-300 rounded-sm shadow-sm bg-white text-[#4F4F4F] hover:bg-gray-50">
              <FcGoogle className="w-[20px] h-[20px]" />
              Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center gap-4 px-4 py-2 border border-gray-300 rounded-sm shadow-sm bg-white text-[#4F4F4F] hover:bg-gray-50">
              <FaApple className="w-[20px] h-[20px]" />
              Sign in with Apple
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
