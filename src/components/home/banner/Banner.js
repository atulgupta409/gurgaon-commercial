import React from 'react'
import './Banner.scss'
import bannerBg from '../../../images/main-banner-bg.jpg'

const Banner = () => {
  return (
    <section className='main_banner' style={{backgroundImage : `url(${bannerBg})`}}>
      <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="banner_content">
                    <h1>GurgaonCommercial.co.in</h1>
                    <p>Buy Commercial Property in Gurgaon for best returns on your investments. As per the investors vision and budget we have top commercial projects in Gurgaon to choose from. We have curated a list of best commercial projects in Gurgaon to make the decision making simpler for the buyer. Buy Commercial office space in Gurgaon, Buy Shop in Gurgaon, Buy Food Court in Gurgaon , Buy Restaurant Spaces in Gurgaon, Buy Service Apartments in Gurgaon , Buy Industrial Plot in Gurgaon, Buy commercial land in Gurgaon through our property experts. We have listed the best projects for Assured Returns Property in Gurgaon. Exclusive deals for Pre Rented properties and Pre leased properties in Gurgaon with good returns are listed with us. We have a team of Leasing experts which enables our clients to get their vacant spaces leased to top Corporates & MNC’s. Our advisors are experts in Commercial market of Gurgaon and have in-depth knowledge about property law.</p>
                    <p className='banner_tagline'><span class="blued">Profit on Investments</span>, <span class="greend">Growth of Assets</span> and the <span class="cinnab">Returns on Capital</span> for our clients is our top priority.</p>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
      </div>
    </section>
  )
}

export default Banner
