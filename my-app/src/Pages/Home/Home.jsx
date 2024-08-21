import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Announcements from "../../Components/Announcements/Announcements";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import { Products } from "../../Components/Products/Products";
import News from "../../Components/News/News";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Announcements />

      <Navbar />

      <Slider />

      <Categories />

      <Products />

      <News />

      <Footer />
    </div>
  );
};

export default Home;
