import React from "react";
import "./PropertyCard.scss"

const PropertyCard = () => {
  return (
    <div className="property_card main-box clearfix no-bdr">
      <a href="/" target="_blank">
        <div className="card homepage_card">
          <img
            src="https://www.gurgaoncommercial.co.in/projects/m3m-cosmopolitan/images/thumb.jpg"
            className="card-img-top"
            alt="M3M Cosmopolitan"
          />
          <div className="card-body">
            <h5 className="card-title">M3M Cosmopolitan</h5>
            <p className="card-text">Size 1000 Sq.ft. Onwards</p>
            <div className="row">
              <div className="col-6 bdr-right card_p">
                <p className="mb-0">
                  <span className="red">Sale</span> ₹
                  8500/-*
                </p>
                <p className="mb-0">(Per Sq.ft.)</p>
              </div>
              <div className="col-6 text-end card_p">
                <p className="mb-0">
                  <span className="green">Rent</span> ₹
                  60/-
                </p>
                <p className="mb-0">(Per Sq.ft.)</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PropertyCard;
