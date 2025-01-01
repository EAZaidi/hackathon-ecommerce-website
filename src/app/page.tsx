
import AboutUs from "./components/AboutUs";
import BlogPost from "./components/BlogPost";
import Chefs from "./components/Chefs";
import ChoosePick from "./components/Choose&pick";
import FoodBanner from "./components/FoodBanner";
import FoodCategory from "./components/FoodCategory";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChooseUs/>
      <StatsSection/>
      <ChoosePick/>
      <Chefs/>
      <Testimonials/>
      <FoodBanner/>
      <BlogPost/>
      <Footer/>
    </div>
  );
}
