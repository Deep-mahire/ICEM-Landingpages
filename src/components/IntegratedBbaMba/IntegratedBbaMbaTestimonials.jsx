import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

// Image Imports
import vikramImage from "../../assets/images/AIDS-Imagegs/user-aids.avif";
import vandar from "../../assets/images/MECH-images/abc.avif";
import micro from "../../assets/images/MECH-images/Microsoft.avif";
import ias from "../../assets/images/MECH-images/ias.avif";
import tesla from "../../assets/images/MECH-images/tesla.avif";
import army from "../../assets/images/MECH-images/army.avif";
import abn from "../../assets/images/MECH-images/abn.avif";
import hansala from "../../assets/images/Hansala.png";
import arpita from "../../assets/images/Arpita.png";
import nikhil from "../../assets/images/Nikhil.png";
import ankur from "../../assets/images/Ankur.png";
import nilesh from "../../assets/images/Nileshkumar.png";
import apurv from "../../assets/images/Apoorva.png";

// Combined Data (Testimonials + Alumni Journeys)
const combinedData = [
  {
    type: "journey",
    data: {
      name: "Hansala",
      image: hansala,
      details:
        "An Indira alumnus who graduated in 2013, secured a position as a Mechanical Engineer at Vanderlande. Presently, he is based in Jidah, Saudi Arabia.",
      location: "Jidah, Saudi Arabia",
      degree: "Mechanical Engineer",
      companyLogo: vandar,
    },
  },
  {
    type: "journey",
    data: {
      name: "Arpita Jha",
      image: arpita,
      details:
        "An exemplary scholar from Indira, initially served as a content writer. She received an Internship+ offer from Microsoft, but instead she chose her entrepreneurial journey.",
      location: "India",
      degree: "Computer Engineering",
      companyLogo: micro,
    },
  },
  {
    type: "journey",
    data: {
      name: "Nikhil Pawar",
      image: nikhil,
      details:
        "A former student of Indira, commenced his professional journey at Bridgestone in 2013 & presently holds the esteemed position of a global supply manager at Tesla in Germany.",
      location: "Germany",
      degree: "Mechanical Engineering",
      companyLogo: tesla,
    },
  },
  {
    type: "journey",
    data: {
      name: "Major Ankur Tyagi",
      image: ankur,
      details:
        "One of our esteemed students, holds the rank of Major in the Indian Army. Indira takes immense pride in having him as an alumnus.",
      location: "India",
      degree: "Mechanical Engineering",
      companyLogo: army,
    },
  },
  {
    type: "journey",
    data: {
      name: "Nileshkumar Kshirsagar",
      image: nilesh,
      details:
        "An alumnus of Indira who graduated in 2011, has displayed exceptional achievements and is currently serving as an IAS officer in the Chhattisgarh Cadre. (MBA)",
      location: "Chhattisgarh, India",
      degree: "MBA",
      companyLogo: ias,
    },
  },
  {
    type: "journey",
    data: {
      name: "Apoorva Kakkar",
      image: apurv,
      details:
        "Our alumni Apoorva Kakkar, a Mechanical Engineering passout, works as a Business Data Modeller at ABN Amro Bank, Netherlands.",
      location: "Netherlands",
      degree: "Mechanical Engineering",
      companyLogo: abn,
    },
  },
];

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function TestimonialsAndJourneys() {
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const updateMaxHeight = () => {
      const heights = cardRefs.current
        .map((ref) => ref && ref.offsetHeight)
        .filter(Boolean);
      setMaxHeight(Math.max(...heights, 0));
    };

    updateMaxHeight();
    const resizeObserver = new ResizeObserver(updateMaxHeight);
    cardRefs.current.forEach((ref) => ref && resizeObserver.observe(ref));
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, []);

  return (
    <div className="px-4 md:px-16 overflow-hidden">
      {/* Large Screen Section */}
      <div className="bg-white shadow-lg overflow-hidden hidden md:block">
        <h2 className="text-3xl md:text-4xl mt-4 font-semibold text-[#018697] text-center">
          What Our Students Say & Alumni Journeys
        </h2>
        <Slider {...sliderSettings}>
          {combinedData.map((item, index) => (
            <div key={index} className="py-8 px-8">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative border-4 border-[#018697] rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[90%] sm:w-auto mx-auto"
                style={{
                  minHeight: `${maxHeight}px`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {item.type === "journey" && (
                  <div className="absolute top-[-30px] left-[-30px] w-32 h-32 rounded-full overflow-hidden border-2 border-[#018697] shadow-md bg-white z-10">
                    <img
                      src={item.data.companyLogo}
                      alt={item.data.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div className="flex justify-center mb-4 pt-6">
                  <img
                    src={item.data.image}
                    alt={item.data.name}
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                  />
                </div>

                <p className="text-lg font-semibold text-[#018697] text-center">
                  {item.data.name}
                </p>
                <p className="text-sm text-[#4e4e4e] text-center">
                  {item.type === "testimonial"
                    ? `${item.data.department} | ${item.data.year}`
                    : `${item.data.degree} | ${item.data.location}`}
                </p>

                <hr className="my-2 border-t border-[#018697]" />
                <p className="text-[#4e4e4e] text-sm text-center">
                  {item.type === "testimonial"
                    ? item.data.text
                    : item.data.details}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Small Screen Section */}
      <div className="bg-white shadow-lg overflow-hidden block md:hidden">
        <h2 className="text-3xl font-semibold text-[#018697] text-center">
          What Our Students Say & Alumni Journeys
        </h2>
        <Slider {...sliderSettings}>
          {combinedData.map((item, index) => (
            <div key={index} className="py-8 px-8">
              <div
                className="relative border-4 border-[#018697] rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[90%] sm:w-auto mx-auto"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {item.type === "journey" && (
                  <div className="absolute top-[-30px] left-[-30px] w-16 h-16 rounded-full overflow-hidden border-2 border-[#6095ff] shadow-md bg-white z-10">
                    <img
                      src={item.data.companyLogo}
                      alt={item.data.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div className="flex justify-center mb-4 pt-6">
                  <img
                    src={item.data.image}
                    alt={item.data.name}
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                  />
                </div>

                <p className="text-lg font-semibold text-[#018697] text-center">
                  {item.data.name}
                </p>
                <p className="text-sm text-[#4e4e4e] text-center">
                  {item.type === "testimonial"
                    ? `${item.data.department} | ${item.data.year}`
                    : `${item.data.degree} | ${item.data.location}`}
                </p>

                <hr className="my-2 border-t border-[#018697]" />
                <p className="text-[#4e4e4e] text-sm text-center">
                  {item.type === "testimonial"
                    ? item.data.text
                    : item.data.details}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialsAndJourneys;
