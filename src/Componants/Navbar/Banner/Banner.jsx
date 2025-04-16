import React from "react";
import BannerImages from "../../../assets/banner-min.jpg";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[100vh]"
      style={{ backgroundImage: `url(${BannerImages})` }}
    >
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content div */}
      <div className="relative z-10 w-10/12 mx-auto pt-52">
        <h1 className="text-4xl md:text-5xl font-bold text-white whitespace-pre-line leading-18">
          {t("banner.title")}
        </h1>
        <p className="py-6 text-lg text-gray-200 whitespace-pre-line">
          <Trans i18nKey="banner.description" />
        </p>
        <button className="btn btn-primary px-6 py-2 text-base font-semibold">
          {t("banner.button")}
        </button>
      </div>
    </div>
  );
};

export default Banner;
