import React from "react";
import PopularItemsData from "./PopularItemsData";
const PopularItems = () => {
  return PopularItemsData.map(({ imgsrc, title, place, rupess, des }) => (
    <>
      <div className="col-10 mx-auto col-md-4 pb-5">
        <div class="card">
          <img
            src={imgsrc}
            class="card-img-top"
            alt="..."
            style={{ objectFit: "cover", height: "262px" }}
          />
          <div class="card-body p-0">
            <div className="card-wrapper px-4">
              <div className="card-top  d-block d-sm-flex  spacebetween">
                <h5 className="fw-bold" style={{ fontSize: "0.8rem" }}>
                  {title}
                </h5>
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.8</span>
                </div>
              </div>
              <div className="card-s-top  d-block d-lg-flex  spacebetween">
                <div className="card-place pb-3 pb-lg-0 d-flex">
                  <div className="icon centermid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-map-pin"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="centermid fw-bold">{place}</span>
                </div>
                <div className="card-price d-flex">
                  <div className="price centermid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-dollar-sign"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <span className="centermid fw-bold">{rupess}</span>
                </div>
              </div>
              <p class="card-text">{des}</p>
            </div>

            <div className="col-12 bottom-card_button text-center">
              <button className="btn text-white">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
};
export default PopularItems;
