import React from 'react';
import image1 from '/public/BBA-MBA/rs.jpg';
import image2 from '/public/BBA-MBA/nss.jpg';
import image3 from '/public/BBA-MBA/course.jpg';
import image4 from '/public/BBA-MBA/green_tour.jpg';
import image5 from '/public/BBA-MBA/tech_fest 1.jpg';
import image6 from '/public/BBA-MBA/sports 1.jpg';
import image7 from '/public/BBA-MBA/prarambh-bca.jpg';

const images = [
  { src: image1, name: "The rising Star – Freshers party" },
  { src: image2, name: "NSS Activities " },
  { src: image3, name: "Successful completion of Basics of Stock Market" },
  { src: image4, name: "Mahabaleshwar Green Tour" },
  { src: image5, name: "Tech-Fest" },
  { src: image6, name: "Chanakya Sports Complex" },
  { src: image7, name: "Induction Program Prarambh" }
];

const Gallery = () => {
  return (
    <div className=" mx-auto px-4 md:px-10 lg:px-16 text-center py-8 bg-[#f7f3ef]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#555555] font-bold mb-6">
        Life At <span className="text-[#f37021]">ICEM</span>
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="relative basis-full sm:basis-[48%] lg:basis-[48%] h-[250px] md:h-[300px] overflow-hidden rounded-3xl shadow-md">
          <img
            src={images[0].src}
            alt={images[0].name}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-sm md:text-base lg:text-lg uppercase font-light py-2 flex items-end justify-center">
            {images[0].name}
          </div>
        </div>

        {images.slice(1, 3).map((item, index) => (
          <div
            key={index + 1}
            className="relative basis-full sm:basis-[48%] md:basis-[24%] h-[250px] md:h-[300px] overflow-hidden rounded-3xl shadow-md"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-sm md:text-base lg:text-lg uppercase font-light py-2 flex items-end justify-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {images.slice(3, 7).map((item, index) => (
          <div
            key={index + 3}
            className="relative basis-full sm:basis-[48%] md:basis-[23%] h-[250px] md:h-[300px] overflow-hidden rounded-3xl shadow-md"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-sm md:text-base lg:text-lg uppercase font-light py-2 flex items-end justify-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
