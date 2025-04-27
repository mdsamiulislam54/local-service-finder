import  { useTranslation } from 'react-i18next'
import { Wrench, Zap, Home, AlertTriangle } from "lucide-react";
const services = [
  {
    icon: <Zap size={32} className="text-blue-600" />,
    en: {
      title: "Fan & Light Installation",
      description: "Safe and fast installation of fans and lights in your home.",
    },
    bn: {
      title: "ফ্যান ও লাইট ইন্সটলেশন",
      description: "আপনার ঘরে নিরাপদ এবং দ্রুত ফ্যান ও লাইট লাগানোর সেবা।",
    },
  },
  {
    icon: <Wrench size={32} className="text-green-600" />,
    en: {
      title: "Switch & Socket Repair",
      description: "Fix broken switches and sockets with expert care.",
    },
    bn: {
      title: "সুইচ ও সকেট মেরামত",
      description: "ভাঙ্গা সুইচ এবং সকেট দক্ষভাবে মেরামতের সেবা।",
    },
  },
  {
    icon: <Home size={32} className="text-purple-600" />,
    en: {
      title: "Home Electrical Wiring",
      description: "Complete wiring solutions for new and old homes.",
    },
    bn: {
      title: "বাসার সম্পূর্ণ ইলেকট্রিক তারের কাজ",
      description: "নতুন বা পুরাতন বাসার জন্য সম্পূর্ণ তারের সেবা।",
    },
  },
  {
    icon: <AlertTriangle size={32} className="text-red-600" />,
    en: {
      title: "Short Circuit & Fuse Fix",
      description: "Quick response to fix short circuits and blown fuses.",
    },
    bn: {
      title: "শর্ট সার্কিট ও ফিউজ ঠিক করা",
      description: "শর্ট সার্কিট ও ব্লোন ফিউজ দ্রুত ঠিক করার ব্যবস্থা।",
    },
  },
];

const OurService = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
  return (
    <section className="py-22 ">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 "> {currentLang === "bn" ? "আমাদের সেবা সমূহ ":"Our Services"}</h2>
           <p className="text-center  mb-12"> {currentLang === "bn"? "আমরা আপনার প্রয়োজন অনুযায়ী বিভিন্ন ধরনের ইলেকট্রিক্যাল সেবা প্রদান করি।":"We offer a wide range of electrical services to meet your needs."}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border  border-gray-200 shadow p-6 flex flex-col items-center hover:shadow-lg transition"
          >
                <div className="mb-4">{service.icon}</div>
            <div className="mb-4">{currentLang === 'bn'? service.bn.title : service.en.title}</div>
            <h3 className="text-xl font-semibold mb-2 ">{currentLang === 'bn'? service.bn.title : service.en.title}</h3>
            <p className="text-sm">{currentLang === 'bn'? service.bn.title : service.en.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurService