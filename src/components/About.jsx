import React from "react";
import "../css/About.scss";
import a1 from "../Images/a1.jfif";
const about = () => {
  return (
    <>
      <section className="about_sec border border-primary">
        <div className="container-fluid">
          <h2 className="text-center about-head fw-bold">About Us</h2>
          <div className="row px-3 ">
            <div className="col-10 mx-auto col-md-5 pb-5 pb-md-0">
              <img src={a1} className="img-fluid rounded"></img>
            </div>
            <div className="col-10 col-md-5 mx-auto py-0 py-md-1 py-lg-5 text-center text-md-start">
              <h2 className="about-sub fw-bold">We have the best service.</h2>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="about_bottom d-flex">
                <div className="about_b_left">
                  <h3 className="about_common_num">192</h3>
                  <h3 className="about_common_text pb-4 m-0">Countries</h3>
                  <h3 className="about_common_num">348</h3>
                  <h3 className="about_common_text">Countries</h3>
                </div>
                <div className="about_b_right">
                  <h3 className="about_common_num">123</h3>
                  <h3 className="about_common_text pb-4 m-0">Rooms</h3>
                  <h3 className="about_common_num">200</h3>
                  <h3 className="about_common_text">Workers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
