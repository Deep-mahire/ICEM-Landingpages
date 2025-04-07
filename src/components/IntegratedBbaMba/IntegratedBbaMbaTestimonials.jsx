import { useEffect, useRef, useState, useMemo, memo } from "react";
import Slider from "react-slick";

// Image Imports
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

// Alumni Data Only
const alumniData = [
  {
    name: "Hansala",
    image: hansala,
    details: (
      <>
        "An Indira alumnus who graduated in 2013, secured a position as a
        Mechanical Engineer at Vanderlande. Presently, he is based in Jidah,{" "}
        <strong>Saudi Arabia</strong>."
      </>
    ),
    location: "Jidah, Saudi Arabia",
    degree: "Mechanical Engineer",
    companyLogo: vandar,
  },
  {
    name: "Apoorva Kakkar",
    image: apurv,
    details: (
      <>
        "Our alumni Apoorva Kakkar, a Mechanical Engineering passout works as a
        Business Data Modeller at{" "}
        <strong>ABN Amro Bank, Netherlands.</strong>"
      </>
    ),
    location: "Netherlands",
    degree: "Mechanical Engineering",
    companyLogo: abn,
  },
  {
    name: "Arpita Jha",
    image: arpita,
    details: (
      <>
        "An exemplary scholar from Indira, initially served as a content writer.
        She received an <strong>Internship+ offer from Microsoft</strong>, but
        instead chose her entrepreneurial journey."
      </>
    ),
    location: "India",
    degree: "Computer Engineering",
    companyLogo: micro,
  },
  {
    name: "Major Ankur Tyagi",
    image: ankur,
    details: (
      <>
        "One of our esteemed students, holds the rank of Major in the{" "}
        <strong>Indian Army</strong>. Indira takes immense pride in having him
        as an alumnus."
      </>
    ),
    location: "India",
    degree: "Mechanical Engineering",
    companyLogo: army,
  },
  {
    name: "Nileshkumar Kshirsagar",
    image: nilesh,
    details: (
      <>
        "An alumnus of Indira who graduated in 2011, currently serving as an{" "}
        <strong>IAS officer</strong> in the Chhattisgarh Cadre. (MBA)"
      </>
    ),
    location: "Chhattisgarh, India",
    degree: "MBA",
    companyLogo: ias,
  },
  {
    name: "Nikhil Pawar",
    image: nikhil,
    details: (
      <>
        "A former student of Indira, commenced his professional journey at
        Bridgestone in 2013 & presently holds the esteemed position of a{" "}
        <strong>global supply manager at Tesla in Germany</strong>."
      </>
    ),
    location: "Germany",
    degree: "Mechanical Engineering",
    companyLogo: tesla,
  },
];

// Slider settings
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
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

// Memoized card component
const JourneyCard = memo(({ alum, maxHeight }) => (
  <div
    className="relative border-4 border-[#555555] rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[90%] sm:w-auto mx-auto"
    style={{ minHeight: maxHeight ? `${maxHeight}px` : "auto", display: "flex", flexDirection: "column" }}
  >
    <div className="absolute top-[-30px] left-[-30px] w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#555555] shadow-md bg-white z-10">
      <img src={alum.companyLogo} alt={alum.name} className="w-full h-full object-contain" loading="lazy" />
    </div>
    <div className="flex justify-center mb-4 pt-6">
      <img src={alum.image} alt={alum.name} className="w-16 h-16 rounded-full border-2 border-white shadow-lg" loading="lazy" />
    </div>
    <p className="text-lg font-semibold text-[#555555] text-center">{alum.name}</p>
    <p className="text-sm text-[#4e4e4e] text-center">{`${alum.degree} | ${alum.location}`}</p>
    <hr className="my-2 border-t border-[#555555]" />
    <p className="text-[#4e4e4e] text-sm text-center">{alum.details}</p>
  </div>
));

function AlumniJourneys() {
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const updateHeights = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".relative");
      const heights = Array.from(cards).map((el) => el.offsetHeight);
      setMaxHeight(Math.max(...heights));
    };

    const observer = new ResizeObserver(updateHeights);
    if (containerRef.current) observer.observe(containerRef.current);

    window.addEventListener("resize", updateHeights);
    updateHeights();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  const renderedCards = useMemo(
    () =>
      alumniData.map((alum, index) => (
        <div key={`${alum.name}-${index}`} className="py-8 px-8">
          <JourneyCard alum={alum} maxHeight={maxHeight} />
        </div>
      )),
    [maxHeight]
  );

  return (
    <div className="px-4 md:px-16 bg-[#FCFAF0] overflow-hidden">
      <div ref={containerRef} className="bg-[#f7f3ef] shadow-lg overflow-hidden">
        <h2 className="text-3xl md:text-4xl mt-4 font-semibold text-[#555555] text-center">
          Our <span className="text-[#f37021]">Alumni</span> Journeys
        </h2>
        <Slider {...sliderSettings}>{renderedCards}</Slider>
      </div>
    </div>
  );
}

export default AlumniJourneys;
