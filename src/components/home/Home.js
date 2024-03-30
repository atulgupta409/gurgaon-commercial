import React from 'react'
import Banner from './banner/Banner'
import CommercialPropertyGurgaon from './commercial-property-gurgaon/CommercialPropertyGurgaon'
import FeatureProperties from './feature-properties/FeatureProperties'
import PropertyLocation from './property-location/PropertyLocation'
import LocalityByProperties from './locality-by-properties/LocalityByProperties'
import BestProject from './best-project/BestProject'
import ServiceApartments from './service-apartments/ServiceApartments'
import OurExperts from './our-experts/OurExperts'

const Home = () => {
  return (
    <>
    <Banner />
    <CommercialPropertyGurgaon />
    <FeatureProperties />
    <PropertyLocation />
    <LocalityByProperties heading={"Commercial Projects in Golf Course Extension Road"}  />
    <LocalityByProperties heading={"Commercial Projects in Golf Course Road"} />
    <LocalityByProperties heading={"Commercial Projects in Sohna Road"} />
    <BestProject />
    <ServiceApartments />
    <OurExperts />
    </>
  )
}

export default Home
