import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Images1 from "../../../assets/s-1.jpg";
import Images2 from "../../../assets/s-2.jpg";
import Images3 from "../../../assets/s-3.jpg";
import Images4 from "../../../assets/s-4.jpg";
import Images5 from "../../../assets/s-5.jpg";
import './style.css'

import { useTranslation } from "react-i18next";

const bannerData = [
  {
    image: Images1,
    title_en: "Happy Family, Reliable Service.",
    title_bn: "হ্যাপি ফ্যামিলি সার্ভিস",
    desc_en: "Serving families with love and care.",
    desc_bn: "ভালবাসা ও যত্নে পরিবারকে সেবা দেই।",
  },
  {
    image: Images2,
    title_en: "Fan and Light Installation",
    title_bn: "ফ্যান ও লাইট ইন্সটলেশন",
    desc_en: "Professional installation for a\nbrighter, breezier home.",
    desc_bn: "আলোকিত ও বাতাসভরা ঘরের জন্য পেশাদার ইন্সটলেশন।",
  },
  {
    image: Images3,
    title_en: "Switch and Socket Repair",
    title_bn: "সুইচ ও সকেট সার্ভিস",
    desc_en: "Fix your power with safe\nand quick service.",
    desc_bn: "নিরাপদ ও দ্রুত সার্ভিসে পাওয়ার ঠিক করুন।",
  },
  {
    image: Images4,
    title_en: "Complete Home Electrical Wiring",
    title_bn: "সম্পূর্ণ বাড়ির ইলেকট্রিক তারকাটা",
    desc_en: "Total wiring solution by skilled electricians.",
    desc_bn: "দক্ষ ইলেকট্রিশিয়ান দ্বারা সম্পূর্ণ তারকাটা সমাধান।",
  },
  {
    image: Images5,
    title_en: "Short Circuit & Fuse Fixing",
    title_bn: "শর্ট সার্কিট ও ফিউজ মেরামত",
    desc_en: "Serving families with love and care.",
    desc_bn: "আপনার বাসাকে নিরাপদ রাখতে জরুরি সার্ভিস।",
  },
];

const Banner = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="w-full h-[400px] lg:h-[600px] relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        zoom= 'true'
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {bannerData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={item.image}
                alt="Banner"
                className="w-full h-full object-cover scale-110 animate-zoom duration-[4000ms]"
              />
              <div className="absolute top-0 left-0 w-full h-[100vh] bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-3xl lg:text-5xl font-bold mb-3 drop-shadow">
                  {currentLang === "bn" ? item.title_bn : item.title_en}
                </h2>
                <p className="text-lg mb-4">
                  {currentLang === "bn" ? item.desc_bn : item.desc_en}
                </p>
                <button className="px-5 py-2 bg-primary rounded text-white hover:bg-primary/80 transition">
                  {currentLang === "bn" ? "বুক করুন" : "Book Now"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
