import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import './style.css'
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/testimonials.json");
      const data = await res.json();

      setData(data);
    };
    fetchData();
  }, []);

  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div>
      <div className="w-10/12 mx-auto py-10">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          
          modules={[Pagination]}
          className="swiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="  rounded-lg  text-center w-full">
                <FaQuoteLeft className="text-4xl text-green-600 mx-auto mb-4" />
                <p className="text-lg text-gray-700 italic mb-6">
                 { item.name}
                </p>
                <h4 className="text-5xl font-semibold text-gray-800">
                  {currentLang === 'bn'? item.serviceBn : item.serviceEn}
                </h4>
                <p className="text-lg my-4 font-light">
                    {currentLang === 'bn'? item.feedbackBn : item.feedbackEn}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
