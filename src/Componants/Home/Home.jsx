import React from "react";
import OurService from '../OurServices/OurService.jsx'
import AboutUs from '../AboutUs/AboutUs'
import FeatureSection from '../FeatureSection/FeatureSection.jsx'
import Testimonials from '../Testimonials/Testimonials.jsx'
import Brand from '../Brand/Brand.jsx'
import Banner from '../Banner/Banner.jsx'
const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <OurService />
      <FeatureSection />
      <Testimonials />
      <Brand />
    </div>
  );
};

export default Home;
