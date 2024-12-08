
import AboutUs from "./components/AboutUs";
import FoodCategory from "./components/FoodCategory";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChooseUs/>
      <StatsSection/>
      <Footer/>
    </div>
  );
}
