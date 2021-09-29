import React from "react";
import b1 from "../Images/b1.jfif";
import b2 from "../Images/b2.jfif";
import person1 from "../Images/person1.jfif";
import person2 from "../Images/person2.jfif";

const BlogLeftItem = () => {
  const BlogLeftItmes = [
    {
      img: b1,
      title: "Tips on how to travel safely in foreign countries",
      name: "Charlie Dutta",
      position: "Travel Advocate",
      text: "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",

      thumb: person1,
    },
    {
      img: b2,
      title: "Enjoying the beach life while on a vacation",
      name: "Lerry Dutta",
      position: "Hotel Advocate",
      text: "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      thumb: person2,
    },
  ];

  return (
    <>
      {BlogLeftItmes.map(({ img, title, name, position, text, thumb }) => (
        <div className="col-sm-5  mx-auto col-lg-6 blog pb-5 pb-sm-0  blog">
          <div className="blog_common_img">
            <img
              src={img}
              className="img-fluid rounded "
              alt="blog1"
              style={{
                height: "250px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <h4 className="blog-title py-3 m-0">{title}</h4>
          <p className="blog-text">{text}</p>
          <div className="blog_icon d-flex align-items-center">
            <div className="blog_person centermid">
              <img src={thumb} alt="person1" className="img-fluid" />
            </div>
            <div className="blog_p_text">
              <h3 className="m-0">{position}</h3>
              <h4 className="m-0">{name}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default BlogLeftItem;
