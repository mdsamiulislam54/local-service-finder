import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegramPlane,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="shadow-2xl py-10 ">
      <div className="w-10/12 mx-auto ">
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
          <div>
            <h3 className="mb-8">{currentLang === "bn" ? "যোগাযোগ করুন" : "CONTACT US"}</h3>
            <div className="mb-4">
              <h4 className="mb-1">{currentLang === "bn" ? "ঠিকানা" : "ADDRESS"}</h4>
              <p className="text-sm">
                Level-6, ST Tower, 12 Sonargaon Road, Banglamotor, Dhaka-10.
              </p>
            </div>
            <div  className="mb-4">
              <span>
                {currentLang === "bn" ? "হটলাইন" : "HOTLINE"}{" "}
                <span>{currentLang === "bn" ? "(শনিবার-বৃহঃ: ১০টা-৮টা)" : "(Sat-Thu: 10AM-8PM)"}</span>
              </span>
              <p className="text-sm">+880-1612086842</p>
            </div>
            <div>
              <h4>{currentLang === "bn" ? "ইমেইল" : "EMAIL"}</h4>
              <p className="text-sm">samiulm5332@gmail.com</p>
              <button className="btn my-2">
                {currentLang === "bn" ? "অভিযোগ পাঠান" : "Complain Box"}
              </button>
            </div>
          </div>
          <div>
            <h3 className="mb-8">{currentLang === "bn" ? "গুরুত্বপূর্ণ লিঙ্ক" : "USEFUL LINKS"}</h3>
            <u className="flex gap-4 ">
              <span className="flex flex-col gap-3"><NavLink>{currentLang === "bn" ? "হোম" : "Home"}</NavLink>
              <NavLink>{currentLang === "bn" ? "সেবা" : "Service"}</NavLink>
              <NavLink>{currentLang === "bn" ? "আমাদের সম্পর্কে" : "About Us"}</NavLink>
              <NavLink>{currentLang === "bn" ? "যোগাযোগ" : "Contact Us"}</NavLink></span>
              <span className="flex flex-col gap-3">
                <NavLink>{currentLang === "bn" ? "কিভাবে হায়ার করবেন" : "How to Hire"}</NavLink>
                <NavLink>{currentLang === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy"}</NavLink>
                <NavLink>{currentLang === "bn" ? "প্রশ্নোত্তর" : "FAQ"}</NavLink>
                <NavLink>{currentLang === "bn" ? "সার্ভিস সেন্টার" : "Service Center"}</NavLink>
              </span>
            </u>
          </div>
          <div>
            <h3 className="mb-8">{currentLang === "bn" ? "নিউজলেটার" : "NEWSLETTER"}</h3>
            <div>
              <p className="mb-4 text-sm ">
                {currentLang === "bn"
                  ? "নতুন ইভেন্ট, সেলস এবং অফার জানতে আমাদের নিউজলেটারে যুক্ত হোন।"
                  : "Get All The Latest Information On Events, Sales And Offers. Sign Up For Newsletter Today."}
              </p>
              <span className="relative">
                <input
                  type="text"
                  className="border-b p-2 relative outline-none"
                  placeholder={
                    currentLang === "bn" ? "আপনার ইমেইল দিন" : "Enter Your Email"
                  }
                />
                <span className="absolute top-1 right-0   h-full">
                  <FaTelegramPlane  size={24}/>
                </span>
              </span>
              <span className="my-4 flex  gap-5 ">
                <FaFacebookSquare size={24} />
               
                <FaYoutubeSquare size={24} />
                <FaTwitterSquare size={24} />
                <FaInstagramSquare size={24} />
              </span>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center border-t py-4 mt-2">
          <p>
            {currentLang === "bn"
              ? "কপিরাইট © ২০২৫ সেবা-ফাইন্ডার। সর্বস্বত্ব সংরক্ষিত।"
              : "Copyright © 2025 SebaFinder. All Rights Reserved."}
          </p>
          <div className="flex items-center gap-4">
            <img className="w-14 shadow border rounded-xl border-gray-200" src="https://shop.rangs.com.bd/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fgroups%2Fvisa.20762805975efe2d5cc4a575a16df780.svg&w=128&q=75" alt="" />
            <img className="w-14 shadow border rounded-xl border-gray-200" src="https://shop.rangs.com.bd/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fgroups%2Fmc.7bb04b9494bd7eddad888957d98b009c.svg&w=128&q=75" alt="" />
            <img className="w-14 shadow border rounded-xl border-gray-200"  src="https://shop.rangs.com.bd/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fgroups%2Fbkash.319b1ef868828c5ad82bc732e4f71fdf.svg&w=128&q=75" alt="" />
            <img className="w-14 shadow border rounded-xl border-gray-200" src="https://shop.rangs.com.bd/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fgroups%2Fdbbl.f3a19cfea26601e5debf1de0e68fa715.svg&w=128&q=75" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
