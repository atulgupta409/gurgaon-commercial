import React from 'react'
import './CommercialPropertyGurgaon.scss'
import { Link } from 'react-router-dom';
import GurgaonCommercialMobile from "../../../images/gurgaon-commercial-mobile.png";

const CommercialPropertyGurgaon = () => {

    const CommercialPropertyGurgaon = [
        {id:1, name:"Office Space", url:"/", class:"item_heading1", tagLine: "Standard Offices, IT Parks & Special Economic Zones."},
        {id:2, name:"Co-working Space", url:"/", class:"item_heading2", tagLine: "The new office destination"},
        {id:3, name:"Shop / Retail Space", url:"/", class:"item_heading3", tagLine: "SCO, High Street Markets, Malls"},
        {id:4, name:"Pre-Rented Property", url:"/", class:"item_heading4", tagLine: "Property investment with Fixed Returns"},
        {id:5, name:"Assured Return", url:"/", class:"item_heading5", tagLine: "ROI on Property from day one"},
        {id:6, name:"Service Apartment", url:"/", class:"item_heading6", tagLine: "Apartments with Hotel Services."},
    ]

    return (
        <section className='commercialPropertyGurgaon_section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Commercial Property in Gurgaon</h3>
                    </div>
                </div>
                <div className="row align-items-center mt-4">
                    <div className="col-md-4">
                        {CommercialPropertyGurgaon.slice(0,3).map(
                            (item, index) => <div key={index} className="property_item text-center">
                                <Link to={item.url}><h4 className={item.class}>{item.name}</h4></Link>
                                <p>{item.tagLine}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={GurgaonCommercialMobile} alt="Commercial Property in Gurgaon" />
                    </div>
                    <div className="col-md-4">
                        {CommercialPropertyGurgaon.slice(3).map(
                            (item, index) => <div key={index+3} className="property_item text-center">
                                <Link to={item.url}><h4 className={item.class}>{item.name}</h4></Link>
                                <p>{item.tagLine}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommercialPropertyGurgaon
