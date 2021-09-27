import React from "react";
import "../css/Home.scss";
import "../App.scss";
import "../css/variable.scss";
import Button from "./Button.jsx";
import h1 from "../Images/h1.jpeg";
import QualityItem from "./Quality-item";
import PopularItems from "./PopularItems";
import q1 from "../Images/q1.svg";
import t1 from "../Images/t1.jfif";
import t2 from "../Images/t1.jfif";
import email from "../Images/email.png";

import { NavLink } from "react-router-dom";

const home = () => {
  //  Qualilty Items
  const Items = [
    {
      title: "Secure",
      img: q1,
      desc: "We strictly only deal with vendors that provide top notch security.",
    },
    {
      title: "24/7 Support",
      img: q1,
      desc: "We strictly only deal with vendors that provide top notch security.",
    },
    {
      title: "Customizable",
      img: q1,
      desc: "We strictly only deal with vendors that provide top notch security.",
    },
  ];
  // end Quality Items

  return (
    <>
      <section className="home_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-sm-12 m-sm-auto pb-4">
              <h1 className="common_head">
                Find Perfect Hotels
                <br />
                <span style={{ color: "rgba(100, 21, 255)" }}>
                  anywhere you go.
                </span>
              </h1>
              <p className="common-text mb-0">
                We've been in the hotels business across the world for 5 years
                now. We assure you that you will always enjoy your stay with us.
              </p>
              <Button btnStyle="sign" text="Sign-Up" />
              <Button btnStyle="search" text="Search Hotels" />
            </div>
            <div className="col-12 col-md-6 col-sm-12 m-sm-auto">
              <img
                src={h1}
                className="img-fluid"
                alt="home1"
                style={{ height: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Quality section */}
      <section className="quality_section">
        <div className="container">
          <div className="row ">
            <div className="col-md-10 mx-auto">
              <div className="row">
                {Items.map(({ title, img, desc }) => {
                  return <QualityItem title={title} imgsrc={img} decs={desc} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="popular_section">
        <div className="container-fluid">
          <div className="row px-3">
            <h1 className="fw-bold">Popular Hotels</h1>
          </div>
          <div className="row  px-0 px-sm-5 card-row">
            <PopularItems />
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center text-lg-start  col-lg-6">
              <div className="px-3 pb-4">
                <h1 className="trending_head pb-2 pb-lg-4">Trending Tours</h1>
                <p className="trending_text m-0 pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam.
                </p>
                <a class="btn " href="#" class="view_more ">
                  View All Tours
                  <span>
                    <i class="fa fa-arrow-right ps-2" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-sm-6  col-lg-3  pb-5 pb-md-0 mt-sm-4 mt-lg-0">
              <div className="px-3">
                <div className="trend-img pb-3">
                  <img src={t1} className="img-fluid rounded" />
                </div>
                <div className="trend-top pb-3 spacebetween">
                  <div class="trend_place fw-bold">Beachfront</div>
                  <div className="trend_rupees">
                    <span className="fw-bold rupees">$99</span>
                    <span className="day text-secondary">per day</span>
                  </div>
                </div>
                <p className="trend-text text-capitalize">
                  A Trip to the Bahamas and the Carribean Ocean
                </p>
                <a className="btn fw-bold d-block text-white trend-btn" href="">
                  Book Now
                </a>
              </div>
            </div>
            <div className="col-sm-6  col-lg-3 mt-sm-4 mt-lg-0">
              <div className="px-3">
                <div className="trend-img pb-3">
                  <img src={t2} className="img-fluid rounded" />
                </div>
                <div className="trend-top pb-3 spacebetween">
                  <div class="trend_place fw-bold">Cruise</div>
                  <div className="trend_rupees">
                    <span className="fw-bold rupees">$80</span>
                    <span className="day text-secondary">per day</span>
                  </div>
                </div>
                <p className="trend-text text-capitalize">
                  Cruise to the Mariana Trench and the Phillipines
                </p>
                <a className="btn fw-bold d-block text-white trend-btn" href="">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-letter">
        <div className="container">
          <div className="row p-5">
            <div className="col-12 col-sm-10 mx-auto col-lg-6 newsletter">
              <div className="newsletter-inner d-sm-flex d-block text-center text-sm-start">
                <div
                  className="n-icon me-0 me-sm-4  centermid
                 "
                >
                  <img src={email} />
                </div>
                <div className="n-text">
                  <h1>Newsletter</h1>
                  <p>Subscribe now to get our latest blog posts.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10  mx-auto  col-lg-6 centermid">
              <form>
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="col-12 col-sm-7 mb-2 mb-sm-0"
                ></input>
                <button class="btn text-white fw-bold col-12 col-sm-5">
                  Subscribe now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
