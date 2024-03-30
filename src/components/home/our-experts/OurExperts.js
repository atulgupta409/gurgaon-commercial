import React from 'react'
import "./OurExperts.scss"
import SumitAnand from "../../../images/sumit-anand.jpg";
import AlexaAdver from "../../../images/alexa-adver.jpg";
import { Link } from 'react-router-dom';

const OurExperts = () => {
  return (
    <section className='our_expert_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h4>Contact our experts for best deals in <span style={{ color: 'rgb(250, 45, 45)' }}>Commercial Properties</span></h4>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-md-2"></div>

            <div className="col-md-4">
                <img src={SumitAnand} className="img-fluid" alt="Contact 9999063322" />
            </div>

            <div className="col-md-4">
                <Link to="https://alexandro.in/" target="_blank">
                    <img src={AlexaAdver} className="img-fluid" alt="Alexandro.in" />
                </Link>
            </div>

            <div className="col-md-2"></div>

        </div>
      </div>
    </section>
  )
}

export default OurExperts
