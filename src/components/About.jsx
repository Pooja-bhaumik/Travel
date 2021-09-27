import React from "react";
import "../css/About.scss";
import a1 from "../Images/a1.jfif";
const about = () => {
  return (
    <>
      <section className="about_sec">
        <div className="container-fluid">
          <h2 className="text-center mt-5">About Us</h2>
          <div className="row px-3">
            <div className="col-4">
              <img src={a1} className="img-fluid"></img>
            </div>
            <div className="col-8"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
