import React from 'react';
import './FeatureProperties.scss';
import aiplJoyStreet from "../../../images/feature-property/aipl-joy-street.jpg";
import aiplJoySquare from "../../../images/feature-property/aipl-joy-square.jpg";
import aiplJoyCentral from "../../../images/feature-property/aipl-joy-central.jpg";
import aiplRhythmResidences from "../../../images/feature-property/aipl-rhythm-residences.jpg";
import highlightAds from "../../../images/feature-property/highlight-ads.png";
import { Link } from 'react-router-dom';

const FeatureProperties = () => {

    const FeatureProperties = [
        {id:1, img: aiplJoyStreet, name: "AIPL Joy Street", url: "/"},
        {id:2, img: aiplJoySquare, name: "AIPL Joy Square", url: "/"},
        {id:3, img: aiplJoyCentral, name: "AIPL Joy Central", url: "/"},
        {id:4, img: aiplRhythmResidences, name: "AIPL Rhythm Residences", url: "/"},
    ]
    
  return (
    <section className='feature_property_sec'>
        <div className="container">
            <div className="row">
                {FeatureProperties.map((featureItem) => 
                    <div className="col-md-3">
                        <Link to={featureItem.url} className='feature_item'>
                            <img src={featureItem.img} alt={featureItem.name} className='img-fluid' />
                            <div className="content">
                                <p>{featureItem.name}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="highlight_ads">
                        <img src={highlightAds} alt="Highlight ads" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureProperties
