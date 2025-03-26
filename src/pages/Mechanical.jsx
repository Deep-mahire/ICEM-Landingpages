import Mechhero from '../components/Mech/MechHero'  // Import the Mechhero component (adjust the path as needed)
import MechPointers from '../components/Mech/MechPointers'
import MechInovation from "../components/Mech/MechInovation.jsx"
import MechOverview from '../components/Mech/MechOverview'
import MechOfferings from '../components/Mech/MechOfferings'
import MechStudying from '../components/Mech/MechStudying'
import MechBrochure from '../components/Mech/MechBrochure'
import MechHighlights from '../components/Mech/MechHighlights'
// import MechCarrer from '../components/Mech/MechCarrer'
import MechApply from '../components/Mech/MechApply'
import MechTestimonials from '../components/Mech/MechTestimonials'
// import AutoChatbot from '../components/AutoChatbot'  // Import AutoChatbot
import MechJourny from '../components/Mech/MechJourny'
import MechReasons from '../components/Mech/MechReasons.jsx'
function Mechanical() {
  return (
    <div>
      <Mechhero />  {/* Call the Mechhero component */}
      <MechPointers />  {/* Call the MechPointers component */}
      <MechInovation/>
      <MechOverview />  {/* Call the MechOverview component */}
      <MechReasons/>
      <MechOfferings />  {/* Call the MechOfferings component */}
      <MechStudying />  {/* Call the MechStudying component */}
      <MechBrochure />  {/* Call the MechBrochure component */}
      <MechHighlights />  {/* Call the MechHighlights component */}
      {/* <MechCarrer />  Call the MechCarrer component */}
      <MechApply />  {/* Call the MechApply component */}
      <MechTestimonials />  {/* Call the MechTestimonials component */}
      <MechJourny/>
    </div>
  )
}

export default Mechanical
