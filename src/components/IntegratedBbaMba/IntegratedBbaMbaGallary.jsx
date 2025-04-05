import React from 'react';
import image1 from '../../assets/Images/bbambaImages/innovative1.webp';
import image2 from '../../assets/Images/bbambaImages/innovative2.webp';
import image3 from '../../assets/Images/bbambaImages/innovative3.webp';
import image4 from '../../assets/Images/bbambaImages/innovative4.webp';
import image5 from '../../assets/Images/bbambaImages/innovative5.webp';
import image6 from '../../assets/Images/bbambaImages/innovative6.webp';
import image7 from '../../assets/Images/bbambaImages/innovative7.webp';
 
const images = [
  { src: image1, name: "Imac Lab" },
  { src: image2, name: "Space Lab" },
  { src: image3, name: "Central Instrumentation Facility" },
  { src: image4, name: "Innovation Lab" },
  { src: image5, name: "Swimming Pool" },
  { src: image6, name: "Gym Facility" },
  { src: image7, name: "Uni Mall" }
];
 
const Gallery = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 text-center py-4 bg-[#f7f3ef]">
      <h1 className="text-3xl text-[#555555] font-bold mb-4 mt-4">Where Possibilities Are Infinite</h1>
      <p className="text-lg text-[#555555] mb-8">From tech labs to wellness centers, we have it all</p>
 
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