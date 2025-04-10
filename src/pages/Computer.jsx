import CompHero from "../components/Computer/CompHero"; // Import CompHero
import CompPointers from "../components/Computer/CompPointers"; // Import CompPointers
// import ProgramOverview from "../components/Computer/ProgramOverview";
import CompStudying from "../components/Computer/CompStudying";
import CompBrochure from "../components/Computer/CompBrochure";
// import CompHighlights from "../components/Computer/CompHighlights";
import CompRecruiter from "../components/Computer/CompRecruiter";
import CompJoin from "../components/Computer/CompJoin";
// import AutoChatbot from "../components/AutoChatbot"; // Import AutoChatbot
import ComCreative from "../components/Computer/ComCreative";
import ComReasons from "../components/Computer/ComReasons";
import CompOffringICEM from "../components/Computer/CompOffringICEM";
import ComPlacement from "../components/Computer/ComPlacement";
import CompBanner from "../components/Computer/CompBanner";
import CompApply from "../components/Computer/CompApply"
import CompTestimonials from '../components/Computer/CompTestimonials'
import Footer from '../pages/Footer'
function Computer() {
  return (
    <div className="">
      {/* Render the child component */}
      <CompHero />
      <ComPlacement/>
      <CompRecruiter />
      <CompBanner/>
      <ComCreative/>
      <ComReasons/>
      <CompOffringICEM/>
      <CompBrochure />
      {/* <CompPointers /> */}
      <CompStudying />
      <CompTestimonials/>
      <CompApply/>
      <CompJoin />
      <Footer/>
    </div>
  );
}

export default Computer;
