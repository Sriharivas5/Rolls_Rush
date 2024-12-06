import React from "react";
import "./HeroSection.css";

const Car3 = React.lazy(() => import("../Gltf/Car3/Car3"));
const Navbar = React.lazy(() => import("../../../Components/Navbar/Navbar"));
const Video = React.lazy(() => import("../Video/Video"));
const ServicesCards = React.lazy(() =>
  import("../ServicesCards/ServicesCards")
);
const Slider = React.lazy(() => import("../Slider/Slider"));
const Marquee = React.lazy(() => import("../Marquee/Marquee"));
const Card3d = React.lazy(() => import("../Cards3d/Cards3d"));
const RapidCount = React.lazy(() => import("../RapidCount/RapidCount"));
const AvailableCards = React.lazy(() =>
  import("../AvailableCards/AvailableCards")
);
const Hero = React.lazy(() => import("../Hero/Hero"));
const Footer = React.lazy(() => import("../../../Components/Footer/Footer"));
const Cursor = React.lazy(() => import("../../../Cursor"));

// import Navbar from "../../../Components/Navbar/Navbar";
// import Video from "../Video/Video";
// import ServicesCards from "../ServicesCards/ServicesCards";
// import Slider from "../Slider/Slider";
// import Marquee from "../Marquee/Marquee";
// import Card3d from "../Cards3d/Cards3d";
// import RapidCount from "../RapidCount/RapidCount";
// import AvailableCards from "../AvailableCards/AvailableCards";
// import Hero from "../Hero/Hero";
// import Footer from "../../../Components/Footer/Footer";
// import Cursor from "../../../Cursor";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <Cursor />
      <Navbar />
      <Hero />
      <RapidCount />
      <AvailableCards />
      <Car3 />
      <ServicesCards />
      <Video />
      <Card3d />
      <Slider />
      <Marquee />
      <Footer />
    </div>
  );
};

export default HeroSection;
