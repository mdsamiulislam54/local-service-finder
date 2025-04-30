import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle,FaCommentDots } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Swal from "sweetalert2";

const Details = ({ data }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [subscribe, setSubscribe] = useState({})
  if (!data || !data.description_en) {
    return <div>Loading...</div>;
  }

  const Subscribe = (item)=>{
    document.getElementById('my_modal_2').showModal()
    setSubscribe(item)
  }

  const handleBook = (e)=>{
    e.preventDefault()
    const name = e.target.name.value
    document.getElementById('my_modal_2').close()
    Swal.fire({
      icon: 'success',
      
      title: `🎉 Booking Successful! (বুকিং সফল হয়েছে!) (${name})`,
      text: 'Please wait, your service booking is being processed. (অপেক্ষা করুন, আপনার সার্ভিস বুকিং প্রসেস করা হচ্ছে।)',
      confirmButtonText: 'ঠিক আছে / Okay'
    })
    
  }

  return (
    <div className=" gap-6 p-4">
      {/* Left: Features */}
      <div className=" grid lg:grid-cols-3">
        <div className="shadow  rounded-xl col-span-1">
          <h2 className="text-md font-semibold mb-4 hover:border-r-2 border-red-500 pl-2 py-2  duration-300 transition-all">
           {currentLang === 'bn'? 'সার্ভিস ওভারভিউ':' Service Overview'}
          </h2>
          <h2 className="text-md font-semibold mb-4 hover:border-r-2 border-red-500 pl-2 py-2  duration-300 transition-all">
          {currentLang === 'bn'? "প্রায়শই জিজ্ঞাসিত প্রশ্ন":" Faq"}
           
          </h2>
          <h2 className="text-md font-semibold mb-4 hover:border-r-2 border-red-500 pl-2 py-2  duration-300 transition-all">
            {currentLang==='bn'? "কি কি অন্তর্ভুক্ত আছে":"What's Included"}
          </h2>
          <h2 className="text-md font-semibold mb-4 hover:border-r-2 border-red-500 pl-2 py-2  duration-300 transition-all">
            {currentLang === 'bn'? ' অর্ডার করার নিয়ম':'How to order'}
          </h2>
          <h2 className="text-md font-semibold mb-4 hover:border-r-2 border-red-500 pl-2 py-2  duration-300 transition-all">
            {currentLang === 'bn'? ' রিভিউস':'Reviews'}
          </h2>
        </div>
        <div className="col-span-2 flex justify-center items-center shadow">
          <img src={data.images} className="w-full " />
        </div>
      </div>

      {/* Center: Content */}
      <div className="shadow p-4 rounded-xl col-span-4">
        <h2 className="text-xl font-semibold mb-4">{currentLang === "bn" ? data.serviceBn:data.serviceEn}</h2>
        <p className=" mb-3">{currentLang === 'bn'? data.description_bn?.part1 :data.description_en?.part1}</p>
        <p className=" mb-3">{currentLang === 'bn'? data.description_bn?.part2 :data.description_en?.part2}</p>
        <p className=" mb-3">{currentLang === 'bn'? data.description_bn?.part3 :data.description_en?.part3}</p>
        <p className="">{currentLang === 'bn'? data.description_bn?.part4 :data.description_en?.part4}</p>
        <div className="ml-8 my-6">
          {
           (currentLang === "bn" ? data.comments_bn : data.comments_en).map((item)=><div className="flex items-center gap-10 ">
           <span className="bg-white p-2 rounded-full "><FaCommentDots color='red' size={20}/></span>
           <div className="mb-8">
             <p className="text-xl font-bold mb-2">{item.name}</p>
           <div className="flex gap-2 mb-2">
            
           
            <span><FaStar size={14} color="red" /></span>
            <span><FaStar size={14} color="red" /></span>
            <span><FaStar size={14} color="red" /></span>
            <span><FaStar size={14} color="red" /></span>
            <span><FaStar size={14} color="red" /></span>
          
           </div>
           <p className="text-sm">{item.comment}</p>
           </div>
          
         </div>)
          }
          
        </div>
      </div>
      <div className="shadow p-4 rounded-xl  col-span-2">
        <h2 className="text-xl font-semibold mb-4">Pricing</h2>
        <div className="space-y-2 flex justify-between items-center gap-3">
          {data?.pricing?.map((item, index) => (
            <div
              key={index}
              className="card w-96 h-96 bg-base-100 shadow-sm relative"
            >
              <div className="card-body border-r">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <span className="text-xl">৳{item.price}/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  {(currentLang === "bn"
                    ? item.benefits_bn
                    : item.benefits
                  ).map((b) => (
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 absolute bottom-0 btn-block left-0 px-3">
                  <button className="btn bg-red-500 btn-block text-white" onClick={()=>Subscribe(item)}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
        <div className="card  w-full max-w-sm mx-auto shrink-0 ">
          <div className="flex justify-between items-center">
            <span>{subscribe.name}</span>
            <span className="font-extrabold">৳{subscribe.price}</span>
          </div>
      <div className="card-body w-full">
        <form onSubmit={handleBook} className="fieldset">
          <label className="label">Name</label>
          <input required type="text" name="name" className="input" placeholder="Enter Your Full Name.."  />
          <label className="label">Phone</label>
          <input  type="text" className="input" placeholder="Enter Your Phone Number.." />
          <label className="label">Phone2 (Optional)</label>
          <input required type="text" className="input" placeholder="Enter Your Phone Number.." />
          <label className="label">Address</label>
          <input required type="text" className="input" placeholder="Enter Your Full Address.." />
          <label className="label">Email</label>
          <input required type="email" className="input" placeholder="Enter Your Email.." />
          <label className="label">Date</label>
          <input required type="date" className="input" placeholder="Enter Your Email.." />
          
          <button type="submit" className="btn bg-red-500 text-white mt-4" >Book</button>
        </form>
      </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        </div>
      </dialog>

      {/* Right: Price Card */}
    </div>
  );
};

export default Details;
