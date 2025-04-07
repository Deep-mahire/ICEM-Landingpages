import React from 'react'
import IntegratedBbaMbaHero from '../components/IntegratedBbaMba/IntegratedBbaMbaHero'
import IntegratedBbaMbaRecruters from '../components/IntegratedBbaMba/IntegratedBbaMbaRecruters'
import IntegratedBbaMbaBanner from '../components/IntegratedBbaMba/IntegratedBbaMbaBanner'
import IntegratedBbaMbaInovation from '../components/IntegratedBbaMba/IntegratedBbaMbaInovation'
import IntegratedBbaMbaReasons from '../components/IntegratedBbaMba/IntegratedBbaMbaReasons'
import IntegratedBbaMbaOfferings from '../components/IntegratedBbaMba/IntegratedBbaMbaOfferings'
import IntegratedBbaMbaBrochure from '../components/IntegratedBbaMba/IntegratedBbaMbaBrochure'
import IntegratedBbaMbaStuddying from '../components/IntegratedBbaMba/IntegratedBbaMbaStuddying'
import IntegratedBbaMbaTestimonials from '../components/IntegratedBbaMba/IntegratedBbaMbaTestimonials'
import IntegratedBbaMbaApply from '../components/IntegratedBbaMba/IntegratedBbaMbaApply'
import IntegratedBbaMbaPointers from '../components/IntegratedBbaMba/IntegratedBbaMbaPointers'
import IntegratedBbaMbaOverview from '../components/IntegratedBbaMba/IntegratedBbaMbaOverview'
import IntegrateMesureRecruters from '../components/IntegratedBbaMba/IntegratedMesureRecruiters'
import IntegratedBbaMbaGallary from '../components/IntegratedBbaMba/IntegratedBbaMbaGallary'
const IntegratedBbaMba  = () => {
  return (
    <div>
      <IntegratedBbaMbaHero/>
      <IntegratedBbaMbaRecruters/>
      <IntegratedBbaMbaPointers/>
      <IntegratedBbaMbaOverview/> 
      <IntegratedBbaMbaBanner/>
      {/* <IntegratedBbaMbaInovation/> */}
      <IntegratedBbaMbaReasons/>
      <IntegrateMesureRecruters/>
      <IntegratedBbaMbaOfferings/>
      <IntegratedBbaMbaBrochure/>
      <IntegratedBbaMbaStuddying/>
      <IntegratedBbaMbaTestimonials/>
      <IntegratedBbaMbaApply/>
      <IntegratedBbaMbaGallary/>
    </div>
  )
}

export default IntegratedBbaMba 
