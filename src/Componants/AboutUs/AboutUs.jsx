import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="py-32">
      <div className="w-10/12 mx-auto">
        <div className="lg:grid grid-cols-5 gap-4">
          <div className="col-span-3 relative">
            <img
              className="relative"
              src="https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/layout01-img01.jpg"
              alt=""
            />
            <picture className="absolute -bottom-22 left-0">
              <img
                className="w-100"
                src="https://img.freepik.com/free-photo/high-voltage-post-high-voltage-tower_1127-3215.jpg?uid=R160180879&ga=GA1.1.965207152.1738055117&semt=ais_hybrid&w=740"
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-2 mt-30 lg:mt-0">
            <h4  className="text-blue-500 text-lg font-semibold uppercase mb-2">{t("about.heading")}</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">{t("about.title")}</h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">{t("about.description")}</p>
            <ul className="text-left space-y-3 text-gray-700 text-base md:text-lg list-disc list-inside">
              <li>{t("about.list.item1")}</li>
              <li>{t("about.list.item2")}</li>
              <li>{t("about.list.item3")}</li>
              <li>{t("about.list.item4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
