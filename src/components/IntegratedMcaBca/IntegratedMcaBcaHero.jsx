import React from 'react';
import bgImage from '../../assets/images/bca/bcahero.png'; // Adjust the path as needed

function BcaHero() {
  return (
    <div className="relative lg:min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-12 lg:py-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: '60% center',
          backgroundSize: 'cover',
          // transform: 'scaleX(-1)',
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Left Side Content */}
      <div className="relative z-10 text-white text-center lg:text-left max-w-2xl mb-10 lg:mb-0">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Elevate Your Career <br /> with Integrated BCA + MCA
        </h1>
        <p className="mt-4 text-lg lg:text-xl">
          Unlock endless opportunities in IT with our specially designed
          Integrated BCA + MCA program.
        </p>
      </div>

      {/* Form Section */}
      <div className="relative z-10 w-full max-w-md">
        <div
          className="p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-2"
          style={{
            borderImage: "linear-gradient(to right, #003C84, #018697) 1",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            maxHeight: "80vh", // Prevent form overflow
            overflowY: "auto", // Enable scrolling if needed
          }}
        >
          <h2 className="text-white text-2xl font-semibold mb-4 text-center">Apply Now</h2>

          <form className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:border-[#018697]"
              required
            />
            <input
              type="tel"
              placeholder="Mobile No."
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:border-[#018697]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:border-[#018697]"
              required
            />
            <select
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:border-[#018697]"
              required
            >
              <option value="" disabled selected className="bg-[#003C84] text-white">
                Select Your Course
              </option>
              <option value="bca" className="bg-[#003C84] text-white">
                BCA
              </option>
              <option value="mca" className="bg-[#003C84] text-white">
                MCA
              </option>
              <option value="integrated-bca-mca" className="bg-[#003C84] text-white">
                Integrated BCA + MCA
              </option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#018697] text-white font-semibold p-3 rounded-lg hover:bg-[#003C84] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BcaHero;
