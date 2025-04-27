import { useTranslation } from "react-i18next";
import { FaFan, FaPlug, FaHome, FaBolt } from "react-icons/fa";

const FeatureSection = () => {
    const features = [
        {
          id: 1,
          titleEn: "Fan & Light Installation",
          titleBn: "ফ্যান ও লাইট লাগানো",
          descriptionEn: "Looking to upgrade your home or office lighting? Our expert electricians specialize in fast and professional Fan & Light Installation services. We ensure a seamless setup, providing you with a safe and stylish lighting solution tailored to your needs. Whether it’s installing new fans, lights, or upgrading existing fixtures, we’ve got you covered. Our team guarantees quality service and complete satisfaction!",
          descriptionBn: "আপনার বাড়ি বা অফিসের আলো পরিবর্তন করতে চান? আমাদের দক্ষ ইলেকট্রিশিয়ানরা দ্রুত এবং পেশাদার ফ্যান ও লাইট লাগানোর সেবা প্রদান করে। আমরা আপনাকে একটি নিরাপদ এবং আধুনিক আলো ব্যবস্থা প্রদান করতে প্রতিশ্রুতিবদ্ধ, যা আপনার প্রয়োজন অনুযায়ী কাস্টমাইজ করা হবে। নতুন ফ্যান, লাইট ইনস্টলেশন বা পুরানো ফিক্সচার আপগ্রেড — সব কাজই আমরা পারফেক্টভাবে সম্পন্ন করি। আমাদের টিম সেরা মানের সেবা এবং পূর্ণ সন্তুষ্টি নিশ্চিত করে!",
          btn: "বিস্তারিত দেখুন",
          ben:"View Details",
          
          icon: <FaFan className="text-4xl text-green-600 mb-4" />,
        },
        {
          id: 2,
          titleEn: "Switch & Socket Repair",
          titleBn: "সুইচ ও সকেট মেরামত",
          descriptionEn: "Is your switch or socket malfunctioning? Our skilled electricians provide expert Switch & Socket Repair services to ensure your home or office is safe and fully functional. Whether it's a broken switch, faulty socket, or damaged wiring, we deliver prompt and reliable repairs. We prioritize safety, ensuring that all repairs are carried out with the highest standard of care. Choose us for a fast, professional solution that restores power to your space in no time!",
          descriptionBn: "আপনার সুইচ বা সকেট কাজ করছে না? আমাদের দক্ষ ইলেকট্রিশিয়ানরা পেশাদার সুইচ ও সকেট মেরামত সেবা প্রদান করে, যাতে আপনার বাড়ি বা অফিস নিরাপদ এবং সম্পূর্ণ কার্যকর থাকে। একটি ভাঙা সুইচ, ত্রুটিপূর্ণ সকেট, অথবা নষ্ট হওয়া তারের সমস্যায় আমরা দ্রুত এবং নির্ভরযোগ্য মেরামত সেবা প্রদান করি। আমরা সুরক্ষাকে সর্বোচ্চ গুরুত্ব দিই এবং নিশ্চিত করি যে সব মেরামত উচ্চ মানের তত্ত্বাবধানে করা হবে। আমাদের সাথে নির্বাচন করুন দ্রুত, পেশাদার সমাধানের জন্য, যা আপনার স্থানকে আবারও নিরাপদ ও কার্যকর করে তুলবে!",
          btn: "বিস্তারিত দেখুন",
          ben:"View Details",
         
          icon: <FaPlug className="text-4xl text-green-600 mb-4" />,
        },
        {
          id: 3,
          titleEn: "Home Electrical Wiring",
          titleBn: "সম্পূর্ণ ঘরের তারের কাজ",
          descriptionEn: "Looking for a reliable electrical wiring service for your home? Our team of expert electricians specializes in Home Electrical Wiring to ensure your space is powered safely and efficiently. Whether you’re building a new home, renovating, or upgrading your existing electrical system, we offer tailored solutions that meet the highest safety standards. Our work is fast, reliable, and performed with the utmost attention to detail, ensuring long-lasting results for your home’s electrical needs.",
          descriptionBn: "আপনার ঘরের জন্য নির্ভরযোগ্য তারের কাজ খুঁজছেন? আমাদের দক্ষ ইলেকট্রিশিয়ানদের টিম সম্পূর্ণ ঘরের তারের কাজ তদারকি করে, যাতে আপনার স্থান নিরাপদ এবং কার্যকরীভাবে বিদ্যুৎ সংযোগ থাকে। নতুন বাড়ি নির্মাণ, রেনোভেশন বা বিদ্যুতের সিস্টেম আপগ্রেড করতে চাইলে, আমরা আপনাকে সর্বোচ্চ নিরাপত্তা মান বজায় রেখে কাস্টমাইজড সমাধান প্রদান করি। আমাদের কাজ দ্রুত, নির্ভরযোগ্য এবং বিস্তারিত মনোযোগ দিয়ে করা হয়, যাতে আপনার বাড়ির বিদ্যুতের প্রয়োজন মেটাতে দীর্ঘস্থায়ী ফলাফল নিশ্চিত হয়।",
          btn: "প্যাকেজ দেখুন",
          ben:"View Details",
          
          icon: <FaHome className="text-4xl text-green-600 mb-4" />,
        },
        {
          id: 4,
          titleEn: "Short Circuit & Fuse Fix",
          titleBn: "শর্ট সার্কিট ও ফিউজ ঠিক করা",
          descriptionEn: "Experiencing electrical issues like a short circuit or blown fuse? Our expert electricians provide quick and reliable Short Circuit & Fuse Fix services to resolve any electrical hazards in your home or office. Whether it's a minor short circuit or a major fuse blowout, we ensure fast and effective repairs that restore power and safety to your space. We prioritize safety and efficiency, providing you with peace of mind knowing that your electrical system is in capable hands.",
          descriptionBn: "শর্ট সার্কিট বা ফিউজ ফাটার মতো বৈদ্যুতিক সমস্যায় ভুগছেন? আমাদের দক্ষ ইলেকট্রিশিয়ানরা দ্রুত এবং নির্ভরযোগ্য শর্ট সার্কিট ও ফিউজ ঠিক করা সেবা প্রদান করে, যা আপনার বাড়ি বা অফিসের বৈদ্যুতিক বিপদগুলো সমাধান করবে। ছোট শর্ট সার্কিট বা বড় ফিউজ সমস্যা যাই হোক না কেন, আমরা দ্রুত এবং কার্যকরী মেরামত নিশ্চিত করি, যাতে আপনার স্থানটি আবারও নিরাপদ এবং কার্যকরী হয়ে ওঠে। আমরা সুরক্ষাকে সর্বোচ্চ গুরুত্ব দিয়ে কাজ করি, এবং নিশ্চিত করি যে আপনার বৈদ্যুতিক সিস্টেম সঠিকভাবে কাজ করছে।",
          btn: "আরও জানুন",
          ben:"View Details",
       
          icon: <FaBolt className="text-4xl text-green-600 mb-4" />,
        },
      ];

      const { i18n } = useTranslation();
        const currentLang = i18n.language;
      

  return (
    <section className="py-16 ">
        <div className="w-10/12 mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-8">{currentLang === 'bn'?  " কেন আমাদের বেছে নেবেন " :"Why Choose Us"}</h2>
        <p className="text-center  mb-12"> 
          {currentLang === 'bn' ? "  আমরা ফ্যান এবং লাইট ইনস্টলেশন, সুইচ ও সকেট মেরামত, সম্পূর্ণ বাড়ির ওয়্যারিং, শর্ট সার্কিট এবং ফিউজ ঠিক করা সহ বিভিন্ন ইলেকট্রিক্যাল সার্ভিস প্রদান করি। আমাদের দক্ষ ইলেকট্রিশিয়ানরা নিরাপদ, নির্ভরযোগ্য এবং কার্যকর সমাধান প্রদান করতে প্রতিশ্রুতিবদ্ধ। ":"  We offer a wide range of electrical services, including fan and light installation, switch and socket repair, complete home wiring, and short circuit & fuse fixing. Our skilled electricians are dedicated to providing safe, reliable, and efficient solutions tailored to your needs, ensuring your home and office are always powered and secure."}
      
        </p>
        </div>
      <div className="w-10/12 mx-auto  grid lg:grid-cols-2 gap-12">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center shadow-lg border border-gray-200 rounded-3xl  overflow-hidden"
          >
            {/* Content */}
            <div className="p-3 text-center md:text-left">
              <div className="flex justify-center md:justify-start ">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2">{currentLang === 'bn'? item.titleBn:item.titleEn}</h2>
              
              <p className=" mb-4">{currentLang === 'bn' ? item.descriptionBn:item.descriptionEn}</p>
              <button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700 transition">
                {currentLang === 'bn' ? item.btn : item.ben}
              </button>
            </div>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
