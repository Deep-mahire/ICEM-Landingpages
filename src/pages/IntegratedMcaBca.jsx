import React from 'react'
import IntegratedMcaBcaHero from '../components/IntegratedMcaBca/IntegratedMcaBcaHero'
import IntegratedMcaBcaRecruiters from '../components/IntegratedMcaBca/IntegratedMcaBcaRecruiters'
import IntegratedMcaBcaPlacement from '../components/IntegratedMcaBca/IntegratedMcaBcaPlacement'
import IntegratedMcaBcaInnovation from '../components/IntegratedMcaBca/IntegratedMcaBcaInnovation'
import IntegratedMcaBcaStudying from '../components/IntegratedMcaBca/IntegratedMcaBcaStudying'
import IntegratedMcaBcaBanner from '../components/IntegratedMcaBca/IntegratedMcaBcaBanner'
import IntegratedBcaMcaOfferings from '../components/IntegratedMcaBca/IntegratedMcaBcaOfferings'
import IntegratedMcaBcaReasons from '../components/IntegratedMcaBca/IntegratedMcaBcaReasons'
import IntegratedMcaBcaBrochure from '../components/IntegratedMcaBca/IntegratedMcaBcabrochure'
import IntegratedMcaBcaTestimonials from '../components/IntegratedMcaBca/IntegratedMcaBcaTestimonials'
import IndustrySlider from '../components/IntegratedMcaBca/IndustrySlider'
import IntegratedMcaBcaPointers from '../components/IntegratedMcaBca/IntegratedMcaBcaPointers'
import IntegratedMcaBcaMajorRecruiters from '../components/IntegratedMcaBca/IntegratedMcaBcaMajorRecruiters'
import IntegratedMcaBcaOverview from '../components/IntegratedMcaBca/IntegratedMcaBcaOverview'
import IntegratedMcaBcaApply from '../components/IntegratedMcaBca/IntegratedMcaBcaApply'




const IntegratedMcaBca = () => {
  return (
    <div>
        <IntegratedMcaBcaHero/>
        {/* <IntegratedMcaBcaPlacement/> */}
        <IntegratedMcaBcaRecruiters/>
        <IntegratedMcaBcaPointers/>
        <IntegratedMcaBcaOverview/>
        <IntegratedMcaBcaBanner/>
        {/* <IntegratedMcaBcaInnovation/> */}
        <IntegratedMcaBcaReasons/>
        <IntegratedMcaBcaMajorRecruiters/>
        <IntegratedBcaMcaOfferings/>
        <IntegratedMcaBcaBrochure/>
        <IntegratedMcaBcaStudying/>
        <IntegratedMcaBcaApply/>
        <IndustrySlider/>
        <IntegratedMcaBcaTestimonials/>
        
        
        
        
    </div>
    
  )
}

export default IntegratedMcaBca