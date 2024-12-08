import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Header/>
      <Head>
        <title className='flex items-center justify-start'>Sign Up</title>
      </Head>
      {/* Top Image Section */}
      <div className="relative w-full h-64">
        <img
          src="/signin.png"
          alt="Decorative Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50">
          <h2 className='text-white text-3xl font-bold'>404 Error</h2>
          <p className='text-white'>Home &gt; <span className='text-[#ff9a00]'>Sign In</span></p>          
        </div>

      </div>
      {/* Sign-In Form Section */}
      <div className="flex flex-grow items-center justify-center pt-40 pb-40">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>
          <form>
            <div className="mb-4">
              
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-[#ff9a00] focus:border-[#ff9a00] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-[#ff9a00] focus:[#ff9a00] sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-[#ff9a00] border-gray-300" />
                <span className="ml-2 text-gray-700">Remember me?</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Sign In
            </button>
            <a href="#" className="text-sm flex justify-end pt-2 text-gray-600 hover:underline">
                Forgot password?
              </a>
          </form>
          <div className="my-6 text-center text-gray-500">OR</div>
          <div className="flex flex-col gap-3">
            <button
              className="w-full flex items-center justify-center gap-4 px-4 py-2 border border-gray-300 rounded-sm shadow-sm bg-white text-gray-700 hover:bg-gray-50"
            >
              <FcGoogle className='w-[20px] h-[20px]'/>
              Sign in with Google
            </button>
            <button
              className="w-full flex items-center justify-center gap-4 px-4 py-2 border border-gray-300 rounded-sm shadow-sm bg-white text-gray-700 hover:bg-gray-50"
            >
              <FaApple className='w-[20px] h-[20px]'/>
              Sign in with Apple
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
