import React from "react";
import "./ServiceApartmentsCard.scss"
import ApartmentsImg from "../../images/room-central-park.jpg";

const ServiceApartmentsCard = () => {
  return (
    <div className="card apartment_card">
      <img
        src={ApartmentsImg}
        className="card-img-top"
        alt="The Room Central Park"
      />
      <div className="card-body">
        <h5 className="card-title">The Room Central Park</h5>
        <p className="mb-0">Sohna Road</p>
        <div className="row">
          <div className="col-12 bdr-right card_p">
            <p className="mb-0">
              <span className="db-lock lg-black inline purple"></span>1.35* Cr
              Onwards
            </p>
            <p className="mb-0">Ready to Move in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceApartmentsCard;
