import React from "react";
import Navbar from "../components/hero/Navbar";
import Hero from "../components/hero/Hero";
import TrendyPlant from "../components/hero/TrendyPlant";
import SellingPlant from "../components/topselling/SellingPlant";
import Testimonials from "../components/reviews/Testimonials";
import BestPlant from "../components/bestselling/BestPlant";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <div
        className="relative w-full min-h-screen bg-local bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('src/assets/images/banner.jpg')`,
          backgroundSize: window.innerWidth < 640 ? "cover" : "100% auto",
          backgroundPosition:
            window.innerWidth < 640 ? "center top" : "center -280px",
        }}
      >
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <TrendyPlant />
        </div>
      </div>
      <div className="bg-[#1B2316] min-h-screen">
        <SellingPlant />
        <Testimonials />
        <BestPlant />
        <div className="h-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
