import React from "react";
 
// Import your custom icons (ensure they are optimized in size before use)
import offlineIcon from '../../assets/images/bca/logo1.png';
import durationIcon from '../../assets/images/bca/logo2.png';
import feesIcon from '../../assets/images/bca/logo3.png';
import recruitersIcon from '../../assets/images/bca/logo4.png';
 
const data = [
  {
    icon: offlineIcon,
    value: "Program Format",
    description: "Offline", // Using \n for line breaks
  },
  {
    icon: durationIcon,
    value: "Duration",
    description: "BCA: 3 Years\nMCA: 2 Years\nI-MCA: 5 Years", // Using \n for line breaks
  },
  {
    icon: feesIcon,
    value: "Program Fees",
    description: "Rs.77,368.00/-  ", // Using \n for line breaks
  },
  {
    icon: recruitersIcon,
    value: "450+",
    description: "Total Recruiters", // Using \n for line breaks
  },
];
 
export default function IntegratedBbaMbaPointers() {
  return (
    <section className="bg-[#f7f3ef] py-12 px-4 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2 items-center">
        {/* Left content */}
        <div className="space-y-4">
          <h2 className="text-[36px] md:text-[44px] font-bold leading-tight text-gray-900">
            ICEM: The Gateway to
            <br />
            <span className="text-[#f37021]">Exceptional Careers</span>
          </h2>
          <p className="text-[20px] text-gray-700 font-medium">
            Your Pathway to Success and World-Class Opportunities
          </p>
        </div>
 
        {/* Right icons */}
        <div className="grid grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={item.icon}
                alt={`${item.value} Icon`}
                className="w-12 h-12"
              />
              <div>
                <div className="text-2xl font-bold text-gray-800">{item.value}</div>
                <div className="text-sm text-gray-600 font-medium">
                  {item.description.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < item.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}