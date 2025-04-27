import React from 'react'

const Brand = () => {
    const brands = [
        {
          id: 1,
          name: "Walton",
          logo: "https://upload.wikimedia.org/wikipedia/bn/thumb/0/0b/%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2%E0%A6%9F%E0%A6%A8_%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A7%81%E0%A6%AA.svg/1920px-%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2%E0%A6%9F%E0%A6%A8_%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A7%81%E0%A6%AA.svg.png",
        },
        {
          id: 2,
          name: "Singer",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Singer_Bangladesh_Ltd_Logo.svg/1920px-Singer_Bangladesh_Ltd_Logo.svg.png",
        },
        {
          id: 3,
          name: "Vision",
          logo: "https://vision.com.bd/images/logos/16/V.-logo-200x80.png",
        },
        {
          id: 4,
          name: "Marsel",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Stop_hand_nuvola.svg/800px-Stop_hand_nuvola.svg.png",
        },
        {
          id: 5,
          name: "Minister",
          logo: "	https://ministerbd.com/media/logo/websites/1/Minister_Web_LOGO-03.png",
        },
        {
          id: 6,
          name: "Jamuna",
          logo: "data:image/png;base64,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",
        },
        {
          id: 7,
          name: "Singer",
          logo: "	https://singerbd.com/media/logo/stores/1/PNG_123.png",
        },
        {
          id: 8,
          name: "Rangs",
          logo: "https://shop.rangs.com.bd/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fgroups%2Frangs_logo.821f065dfa455f2124dec6db339038c0.svg&w=1920&q=75",
        },
        {
          id: 9,
          name: "LG",
          logo: "https://media.us.lg.com/m/4f3e261da34f4910/original/lg_logo.svg",
        },
        {
          id: 10,
          name: "Samsung",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
        },
      ];
  return (
    <div className="py-12 ">
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Trusted Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Brand