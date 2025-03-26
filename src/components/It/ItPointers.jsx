import { useEffect } from 'react';
import { FaLaptopCode } from 'react-icons/fa'; // Laptop code icon for IT
import { FaNetworkWired } from 'react-icons/fa'; // Network wired icon for IT
import { FaCloud } from 'react-icons/fa'; // Cloud icon for IT

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function ItPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="px-8 md:px-16 pt-8 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#e1f1fb] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center justify-center ">
            <FaLaptopCode size={40} className="text-[#001E5D]" />
            <div className="text-center mt-4">
              <h2 className="text-[#001E5D] text-xl sm:text-2xl font-semibold">Program Format</h2>
              <p className="text-xl sm:text-2xl font-semibold text-[#001E5D]">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#e1f1fb] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center justify-center ">
            <FaNetworkWired size={40} className="text-[#001E5D]" />
            <div className="text-center mt-4">
              <h2 className="text-[#001E5D] text-xl sm:text-2xl font-semibold">Duration</h2>
              <p className="text-xl sm:text-2xl font-semibold text-[#001E5D]">4 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#e1f1fb] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center justify-center ">
            <FaCloud size={40} className="text-[#001E5D]" />
            <div className="text-center mt-4">
              <h2 className="text-[#001E5D] text-xl sm:text-2xl font-semibold">Program Fees</h2>
              <p className="text-xl sm:text-2xl font-semibold text-[#001E5D]">Rs. 120000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItPointers;
