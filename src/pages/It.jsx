import React from 'react';
import ItHero from '../components/It/ItHero';  // Import the ItHero component
// import ItPointers from '../components/It/ItPointers';  // Import the ItPointers component
import ItOfferings from '../components/It/ItOfferings';
import ItStudying from '../components/It/ItStudying';
import ItBrochure from '../components/It/ItBrochure';
import ItHighlights from '../components/It/ItHighlights';
import ItApply from '../components/It/ItApply';
import ItTestimonials from '../components/It/ItTestimonials';
// import AutoChatbot from '../components/AutoChatbot'; // Import AutoChatbot
import MechJourny from '../components/Mech/MechJourny';
import ItInovation from '../components/It/ItInovation';
// import ItOverview from '../components/It/ItOverview';
import ItReasons from '../components/It/ItReasons';
import ItPlacement from '../components/It/ItPlacement';
import CompRecruter from '../components/Computer/CompRecruiter';
import ItBanner from '../components/It/ItBanner';
import Footer from '../pages/Footer'
function It() {
  return (
    <div>
      <ItHero />
      <ItPlacement/>
      <CompRecruter/>
      <ItBanner/>  
      {/* <ItPointers />   */}
      <ItInovation/>
      <ItStudying /> 
      <ItReasons/>
      <ItOfferings />
      <ItBrochure />  
      <ItHighlights /> 
      <ItTestimonials />
      <ItApply />  
      <Footer/>
    </div>
  );
}

export default It;
