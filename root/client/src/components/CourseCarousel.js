import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import CourseCard from "./CourseCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Arrow = ({ direction, onClick }) => {
  const IconComponent = direction === "prev" ? ChevronLeft : ChevronRight;

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    padding: "0px",
    zIndex: 1,
  };

  if (direction === "prev") {
    arrowStyle.left = "-48px"; // Adjust as needed
  } else {
    arrowStyle.right = "-48px"; // Adjust as needed
  }

  return (
    <div style={arrowStyle} onClick={onClick}>
      <IconComponent size={24} />
    </div>
  );
};

const CourseCarousel = (props) => {
  const { title, cardData, onCourseSelect } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="prev" />, // Custom previous arrow
    nextArrow: <Arrow direction="next" />, // Custom next arrow
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        paddingLeft: "144px",
        paddingRight: "144px",
        paddingTop: "20px",
      }}
    >
      <div style={{ position: "relative" }}>
        <h2 style={{ textAlign: "left" }}>{title}</h2>
        <Slider {...settings}>
          {cardData.map((data, index) => (
            <div key={index} onClick={() => onCourseSelect(data)}>
              <CourseCard {...data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseCarousel;
