import React from 'react';
import bgImage from '../../assets/images/bca/bcaheroo.jpg';

function BcaHero() {
  return (
    <div className="relative lg:min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-12 lg:py-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="hidden md:block absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: '60% center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0"></div>

      {/* Left Side Content */}
      <div className="relative z-10 text-black text-center lg:text-left max-w-2xl lg:mb-0">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
        One <span className='text-[#f37021]'>Integrated</span> Path. Endless Tech Opportunities.
        </h1>

        {/* 🔶 Custom Banner Box */}
        <div className="mt-6 inline-block">
          {/* Top small box */}
          <div className="bg-transparent border border-[#ff9900] text-[#600000] px-3 py-1 text-sm font-semibold rounded-t-md tracking-wide">
            ADMISSIONS OPEN FOR
          </div>

          {/* Bottom big box */}
          <div className="bg-[#f37021] text-[#600000] px-6 py-3 rounded-b-md shadow-md">
            <div className="text-lg font-semibold">Integrated</div>
            <div className="text-3xl lg:text-5xl font-extrabold tracking-wide">BCA + MCA</div>
          </div>
        </div>

        <p className="mt-6 text-sm md:text-lg lg:text-xl mb-4">
          Get future-ready with our Integrated <br></br><b>BCA + MCA programme</b><br></br>where tech dreams begin <br></br>and careers take off!
        </p>
      </div>

      {/* Form Section */}
      <div className="relative z-10 w-full max-w-md">
        <div
          className="p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-2"
          style={{
            borderImage: "linear-gradient(to right, #f37021, #f37021) 1",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <h2 className="text-black text-2xl font-semibold mb-4 text-center">Apply Now</h2>

          <form className="space-y-3 sm:space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-transparent border border-black text-black placeholder-gray-800 focus:outline-none focus:border-[#018697]" required />
            <input type="tel" placeholder="Mobile No." className="w-full p-3 rounded-lg bg-transparent border border-black text-black placeholder-gray-800 focus:outline-none focus:border-[#018697]" required />
            <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-transparent border border-black text-black placeholder-gray-800 focus:outline-none focus:border-[#018697]" required />
            {/* <select className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:border-[#018697]" required>
              <option value="" disabled selected className="bg-[#003C84] text-white">Select Your Course</option>
              <option value="bca" className="bg-[#003C84] text-white">BCA</option>
              <option value="mca" className="bg-[#003C84] text-white">MCA</option>
              <option value="integrated-bca-mca" className="bg-[#003C84] text-white">Integrated BCA + MCA</option>
            </select> */}
            <button type="submit" className="w-full bg-[#f37021] text-white font-semibold p-3 rounded-lg hover:bg-[#f78e4f] transition">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BcaHero;
