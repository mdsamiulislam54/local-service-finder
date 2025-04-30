import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  const {  i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className=" min-h-screen p-6 text-white">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center">
          {currentLang === 'en' ? 'Contact Our Company' : 'আমাদের কোম্পানির সাথে যোগাযোগ করুন'}
        </h1>

        {/* Card 1: Company Info */}
        <div className="bg-white text-black rounded-xl shadow-lg p-5 space-y-3">
          <h2 className="text-2xl font-bold">
            {currentLang === 'en' ? 'Company Name:' : 'কোম্পানির নাম:'} {currentLang==='bn'? "সেবা খুঁজুন":"SebaFinder"}
          </h2>
          <p>
            📞 <FaPhoneAlt className="inline mr-2" />
            {currentLang === 'en' ? 'Emergency Contact:' : 'জরুরী যোগাযোগ:'} +880 1234 567890
          </p>
          <p>
            📧 {currentLang === 'en' ? 'Email:' : 'ইমেইল:'} example@gmail.com
          </p>
          <p>
            🕑 {currentLang === 'en' ? 'Office Hours:' : 'অফিস সময়:'} 9AM - 9PM (Everyday)
          </p>
        </div>

        {/* Card 2: Services */}
        <div className="bg-white text-black rounded-xl shadow-lg p-5 space-y-3">
          <h3 className="text-xl font-semibold">
            {currentLang === 'en' ? 'Our Services:' : 'আমাদের সার্ভিস সমূহ:'}
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>{currentLang === 'en' ? 'House Wiring' : 'হাউস ওয়্যারিং'}</li>
            <li>{currentLang === 'en' ? 'Fan/Light Installation' : 'ফ্যান/লাইট লাগানো'}</li>
            <li>{currentLang === 'en' ? 'Switch/Socket Repair' : 'সুইচ/সকেট মেরামত'}</li>
            <li>{currentLang === 'en' ? 'AC Installation' : 'এসি ইনস্টলেশন'}</li>
          </ul>
        </div>

        {/* Card 3: Social Links */}
        <div className="bg-white text-black rounded-xl shadow-lg p-5 space-y-3">
          <h3 className="text-xl font-semibold">
            {currentLang === 'en' ? 'Follow Us:' : 'ফলো করুন:'}
          </h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Card 4: Google Map */}
        <div className="bg-white text-black rounded-xl shadow-lg p-5">
          <h3 className="text-xl font-semibold mb-3">
            {currentLang === 'en' ? 'Our Location:' : 'আমাদের অবস্থান:'}
          </h3>
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9026027250353!2d90.39154721498198!3d23.750903684588402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b856f20259bd%3A0x8f5d14449f2e5588!2sShariatpur!5e0!3m2!1sen!2sbd!4v1683200587265!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
