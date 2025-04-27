import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Details from "./Details";

const ServicesDetails = () => {
  const { serviceName } = useParams();
  const [services, setServices] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/serviceData.json");
      const data = await res.json();
      const filteredData = data.find((item) => item.name === serviceName);
      setServices(filteredData);
    };
    fetchData();
  }, []);
  console.log(services);

  const images =
    "https://img.freepik.com/free-photo/portrait-modern-man-cleaning-doing-household-chores_23-2151468739.jpg?uid=R160180879&ga=GA1.1.965207152.1738055117&semt=ais_hybrid&w=740";
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div>
      <div
        className="bg-cover bg-no-repeat h-[80vh] relative z-10"
        style={{ backgroundImage: `url(${images})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-black/50 z-20">
        <div className="z-100 text-white flex flex-col justify-center items-center mt-[14%]">
          <h2 className="text-5xl font-bold tracking-wider">
            {currentLang === "bn" ? services.serviceBn : services.serviceEn}
          </h2>
        </div>
        </div>
      
      </div>
      <div className="w-10/12 mx-auto">
        <Details data = {services}/>
      </div>
    </div>
  );
};

export default ServicesDetails;
