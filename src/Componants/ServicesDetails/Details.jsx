import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

const Details = ({ data }) => {
    if (!data || !data.description_en) {
        return <div>Loading...</div>;
      }
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {/* Left: Features */}
      <div className="shadow p-4 rounded-xl bg-white">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2">
          {data?.benefits?.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-green-500" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Center: Content */}
      <div className="shadow p-4 rounded-xl bg-white">
        <h2 className="text-xl font-semibold mb-4">{data.serviceEn}</h2>
        <p className="text-gray-700 mb-3">{data.description_en?.part1}</p>
        <p className="text-gray-700 mb-3">{data.description_en?.part2}</p>
        <p className="text-gray-700 mb-3">{data.description_en?.part3}</p>
        <p className="text-gray-700">{data.description_en?.part4}</p>
      </div>

      {/* Right: Price Card */}
      <div className="shadow p-4 rounded-xl bg-white">
        <h2 className="text-xl font-semibold mb-4">Pricing</h2>
        <ul className="space-y-2">
          {data?.pricing?.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <MdOutlineAttachMoney className="text-blue-600" />{" "}
              <span className="font-medium">{item.name}</span> -{" "}
              <span className="font-semibold">{item.price}৳</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
