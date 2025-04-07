import React from 'react';
import image1 from '/public/BBA-MBA/rs.jpg';
import image2 from '/public/BBA-MBA/nss.jpg';
import image3 from '/public/BBA-MBA/course.jpg';
import image4 from '/public/BBA-MBA/green_tour.jpg';
import image5 from '/public/BBA-MBA/tech_fest 1.jpg';
import image6 from '/public/BBA-MBA/sports 1.jpg';
import image7 from '/public/BBA-MBA/rising-star.jpg';
 
const images = [
  { src: image1, name: "The rising Star – Freshers party" },
  { src: image2, name: "NSS Activities " },
  { src: image3, name: "Successful completion of Basics of Stock Market" },
  { src: image4, name: "Mahabaleshwar Green Tour" },
  { src: image5, name: "Tech-Fest" },
  { src: image6, name: "Chankya Sports Complex" },
  { src: image7, name: "Rising Star" }
];
 
const Gallery = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 text-center py-4 bg-[#f7f3ef] overflow-hidden">
      <h1 className="text-5xl text-[#555555] font-bold mb-4 py-4">Life At <span className='text-[#f37021]'>ICEM</span></h1>
      {/* <p className="text-lg text-[#555555] mb-8">From tech labs to wellness centers, we have it all</p> */}
 
{/* First Row: 1 Large + 2 Equal Images */}
<div className="flex flex-wrap justify-between gap-4">
  {/* First Image - Takes Half the Width */}
  <div className="relative w-1/2 h-[300px] overflow-hidden rounded-3xl shadow-md">
    <img
      src={images[0].src}
      alt={images[0].name}
      className="w-full h-full object-cover rounded-3xl"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-lg uppercase font-light py-2 flex items-end justify-center">
      {images[0].name}
    </div>
  </div>
 
  {/* Remaining 2 Images - Adjusted Widths */}
  {images.slice(1, 3).map((item, index) => (
    <div key={index + 1} className="relative w-[calc(25%-1rem)] h-[300px] overflow-hidden rounded-3xl shadow-md">
      <img
        src={item.src}
        alt={item.name}
        className="w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-lg uppercase font-light py-2 flex items-end justify-center">
        {item.name}
      </div>
    </div>
  ))}
</div>
 
 
      {/* Second Row: 4 Equal Images */}
      <div className="flex flex-wrap justify-between gap-4 mt-4">
        {images.slice(3, 7).map((item, index) => (
          <div key={index + 3} className="relative flex-1 min-w-[22%] h-[300px] overflow-hidden rounded-3xl shadow-md">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-lg font-light uppercase py-2 flex items-end justify-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Gallery;