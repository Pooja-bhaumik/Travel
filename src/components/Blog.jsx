import React from "react";
import "../css/Blog.scss";
import BlogLeftItem from "./Blog_left_item";
import bs1 from "../Images/bs1.jfif";
import bs2 from "../Images/bs2.jfif";
const Blog = () => {
  return (
    <>
      <section className="blog_sec">
        <div className="container-fluid">
          <div className="row px-4">
            <div className="col-12 col-lg-7 mx-auto">
              <h2 className="popular_blog pb-5 fw-bold text-center text-sm-start">
                Popular Post
              </h2>
              <div className=" row pb-5 pb-lg-0">
                <BlogLeftItem />
              </div>
            </div>

            <div className="col-12 col-lg-4  blog-third">
              <h2 className="pb-5 recent-blog fw-bold">Recent Post</h2>

              <div className="row pb-4">
                <div className="col-9">
                  <h4 className="blog-title">
                    Getting the most out of your vacation
                  </h4>
                  <h5 className="blog_third_sub">Aaron Patterson</h5>
                </div>
                <div className="col-3">
                  <img src={bs1} className="img-fluid rounded" />
                </div>
              </div>

              <div className="row pb-4">
                <div className="col-9">
                  <h4 className="blog-title">
                    Getting the most out of your vacation
                  </h4>
                  <h5 className="blog_third_sub">Aaron Patterson</h5>
                </div>
                <div className="col-3">
                  <img src={bs2} className="img-fluid rounded" />
                </div>
              </div>

              <div className="row pb-4">
                <div className="col-9">
                  <h4 className="blog-title">
                    Getting the most out of your vacation
                  </h4>
                  <h5 className="blog_third_sub">Aaron Patterson</h5>
                </div>
                <div className="col-3">
                  <img src={bs1} className="img-fluid rounded" />
                </div>
              </div>

              <div className="row pb-4">
                <div className="col-9">
                  <h4 className="blog-title">
                    Getting the most out of your vacation
                  </h4>
                  <h5 className="blog_third_sub">Aaron Patterson</h5>
                </div>
                <div className="col-3">
                  <img src={bs2} className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
