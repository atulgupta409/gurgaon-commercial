import React from 'react';
import PropertyCard from '../../property-card/PropertyCard';
import "./LocalityByProperties.scss";

const LocalityByProperties = (props) => {

    const propertyCards = new Array(4).fill(null);

  return (
    <section className='locality_Properties_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3>{props.heading}</h3>
                </div>
            </div>

            <div className="row mt-3 mb-4">
                {propertyCards.map((_, index) => (
                    <div key={index} className="col-md-3">
                        <PropertyCard />
                    </div>
                ))}
            </div>
            
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <a className='site_btn' href='/'>View all Projects on this Location</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocalityByProperties
