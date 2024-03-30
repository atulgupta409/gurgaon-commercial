import React from "react";
import "./BestProjectCard.scss"
import thumbImg from "../../images/thumb.jpg";

const BestProjectCard = () => {
  return (
    <div className="best_projects_card">
      <a href="/" target="_blank">
        <div className="best_projects_body">
          <div className="project_img">
            <img
              src={thumbImg}
              alt="AIPL Joy Street"
              width="250"
              height="250"
            />
          </div>

          <div className="project_title">
            <h3>Aipl Joy Central</h3>
            <p>Golf Course Extn Road, Gurgaon</p>
          </div>

          <div className="project_price">
            <strong>Office 500 Sqft. Onwards</strong>
            <div className="price">
              <span className="rupee">₹</span>
              <span className="rate">65</span>
              <span className="lcr">Lac</span>
              <br />
              <span className="black">Onwards</span>
            </div>
          </div>

          <div className="return_text">
            <p>Return ₹ 54,000/- PM</p>
            <span>Assured Return 10%</span>
          </div>

          <div className="project_footer">
            <p>Lease Gaurantee Post Possession</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BestProjectCard;
