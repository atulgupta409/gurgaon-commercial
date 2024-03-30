import React from 'react'
import './PropertyLocation.scss'
import locationBlue from "../../../images/location-icon-blue.png";
import locationYellow from "../../../images/location-icon-yellow.png";
import locationGreen from "../../../images/location-icon-green.png";
import locationRed from "../../../images/location-icon-red.png";
import { Link } from 'react-router-dom';

const PropertyLocation = () => {

    const locationList = [
        {id:1, name: "Golf Course Extn Road", url: "/", img:locationBlue, class: "blueBox"},
        {id:2, name: "Golf Course Road", url: "/", img:locationYellow, class: "yellowBox"},
        {id:3, name: "Sohna Road", url: "/", img:locationGreen, class: "greenBox"},
        {id:4, name: "MG Road", url: "/", img:locationRed, class: "redBox"},
        {id:5, name: "New Gurgaon", url: "/", img:locationRed, class: "redBox"},
        {id:6, name: "DLF Cyber City", url: "/", img:locationGreen, class: "greenBox"},
        {id:7, name: "Udyog Vihar", url: "/", img:locationYellow, class: "yellowBox"},
        {id:8, name: "Dwarka Expressway", url: "/", img:locationBlue, class: "blueBox"}
    ]

  return (
    <section className='property_location_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <h3>Find Property by <span style={{color: "#fa2d2d"}}>Location</span></h3>
                </div>
            </div>

            <div className="row mt-4">
                {locationList.map((locationItem) =>
                    <div className='col-md-3'>
                        <Link To={locationItem.url} style={{textDecorationLine: 'none'}} target="_blank">
                            <div className={`location_card card text-center mb-xs-4 ${locationItem.class}`}>
                                <div className="card-body card_body_location">
                                    <img src={locationItem.img} className="img-fluid" alt={locationItem.name} />
                                </div>
                                <div className="card-header bg-primary">
                                    <h4 className="text-center text-white">{locationItem.name}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>                    
                )}
            </div>
        </div>
    </section>
  )
}

export default PropertyLocation
