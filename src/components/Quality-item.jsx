import React from "react";
import { NavLink } from "react-router-dom";
const QualityItem = ({ imgsrc, title, decs }) => {
  return (
    <>
      <div className="col-sm-10 m-sm-auto col-md-4 pb-4 text-center q_item">
        <div className="q-icon centermid">
          <img src={imgsrc} />
        </div>
        <h3 className="quality-sub-title fw-bold">{title}</h3>
        <p className="common_s_text">{decs}</p>
        <span className="q-learn">
          <NavLink to="" className="fw-bold">
            Learn More
          </NavLink>
          <i class="fa fa-arrow-right ps-2" aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
};
export default QualityItem;
