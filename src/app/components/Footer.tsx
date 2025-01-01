import { FaPinterestP } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialInstagram } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto flex flex-wrap items-center justify-center w-[85%]">
        {/* Subscribe Section */}
        <div className="py-6 border-b border-[#FF9F0D]">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center gap-[260px] md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg text-white font-semibold">
                Still You Need Our Support?
              </h3>
              <p className="text-sm text-gray-400">
                Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.
              </p>
            </div>
            <form className="flex w-[459px] h-[55px] sm:w-auto">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow md:flex-grow-0 w-[459px] h-[56px] px-4 py-2 bg-[#FF9F0D] text-black rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 w-[163px] h-[56px] bg-white text-[#FF9F0D] rounded-r-md hover:bg-orange-600"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us.</h3>
            <p className="text-sm">
              Corporate clients and leisure travelers have been relying on
              GroundLink for dependable, safe, and professional chauffeured car
              services in major cities across the world.
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <div className="bg-[#FF9F0D] text-white w-[102px] h-[100px] flex items-center justify-center rounded-sm">
                <img src="/clock.png" alt="clock" />
              </div>

              <div>
                <h4 className="text-orange-500 font-medium">Opening Hours</h4>
                <p className="text-sm">Mon - Sat: 8:00 - 6:00</p>
                <p className="text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Center Left - Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Center Right - Help */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help?</h3>
            <ul className="space-y-2 text-sm gap-6">
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Reporting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Support Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9F0D]">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Recent Post
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex space-x-4 hover:text-[#FF9F0D]">
                  <img
                    src="/recentPost.png"
                    alt="Post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Is fast food good for your body?
                    </p>
                    <p className="text-xs text-gray-500">February 28, 2022</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex space-x-4 hover:text-[#FF9F0D]">
                  <img
                    src="/recentPost.png"
                    alt="Post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Change your food habit with organic food
                    </p>
                    <p className="text-xs text-gray-500">February 28, 2022</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex space-x-4 hover:text-[#FF9F0D]">
                  <img
                    src="/recentPost.png"
                    alt="Post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Do you like fast food for your life?
                    </p>
                    <p className="text-xs text-gray-500">February 28, 2022</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-[#4F4F4F] py-4">
        <div className="container mx-auto text-center flex justify-between text-sm text-white w-[85%]">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-[#FF9F0D] bg-white">
              <i><TfiFacebook className="w-[12px] h-[18px] text-black"/></i>
            </a>
            <a href="#" className="hover:text-[#FF9F0D] bg-white">
              <i><RxTwitterLogo className="w-[16px] h-[18px] text-black"/></i>
            </a>
            <a href="#" className="hover:text-[#FF9F0D] bg-white">
              <i ><SlSocialInstagram className="w-[16px] h-[18px] text-black"/></i>
            </a>
            <a href="#" className="hover:text-[#FF9F0D] bg-white">
              <i ><PiYoutubeLogoLight className="w-[18px] h-[18px] text-black" /></i>
            </a>
            <a href="#" className="hover:text-[#FF9F0D] bg-white">
              <i ><FaPinterestP className="w-[16px] h-[18px] text-black"/></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
