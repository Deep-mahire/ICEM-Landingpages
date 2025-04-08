import Mechhero from '../components/Mech/MechHero'  // Import the Mechhero component (adjust the path as needed)
import MechPointers from '../components/Mech/MechPointers'
import MechInovation from "../components/Mech/MechInovation.jsx"
import MechOverview from '../components/Mech/MechOverview'
import MechOfferings from '../components/Mech/MechOfferings'
import MechStudying from '../components/Mech/MechStudying'
import MechBrochure from '../components/Mech/MechBrochure'
import MechHighlights from '../components/Mech/MechHighlights'
import MechCarrer from '../components/Mech/MechCarrer'
import MechApply from '../components/Mech/MechApply'
import MechTestimonials from '../components/Mech/MechTestimonials'
// import AutoChatbot from '../components/AutoChatbot'  // Import AutoChatbot
import MechJourny from '../components/Mech/MechJourny'
import MechReasons from '../components/Mech/MechReasons.jsx'
import MechRecruiters from '../components/Mech/MechRecruiters.jsx'
import MechPlacement from '../components/Mech/MechPlacement.jsx'
import Footer from '../pages/Footer'
function Mechanical() {
  return (
    <div>
      <Mechhero />
      <MechPlacement/>
      <MechRecruiters/>  
      <MechInovation/>
      <MechReasons/>
      <MechOfferings />
      <MechBrochure />
      <MechPointers />  
      <MechStudying /> 
      {/* <MechHighlights />  Call the MechHighlights component */}
      <MechTestimonials />  {/* Call the MechTestimonials component */}
      {/* <MechCarrer /> */}
      <MechApply />
      {/* <MechJourny/> */}
      <Footer/>
    </div>
  )
}

export default Mechanical
