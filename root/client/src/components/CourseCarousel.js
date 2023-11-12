// CourseCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'react-feather';
import CourseCard from './CourseCard'; // Import your existing card component

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Arrow = ({ direction, onClick }) => {
    const IconComponent = direction === 'prev' ? ChevronLeft : ChevronRight;
  
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          padding: '16px',
          [direction === 'prev' ? 'left' : 'right']: 0,
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <IconComponent size={24} />
      </div>
    );
  };
  
  const carousel = () => {
  const cardData = [
    {
        courseCode: 'CIS101',
        courseName: 'Introduction to Computer Science',
        professorName: 'Dr. Smith',
        enrollment: 120,
        avgGrade: 'A-',
      },
      {
        courseCode: 'MAT202',
        courseName: 'Linear Algebra',
        professorName: 'Prof. Johnson',
        enrollment: 90,
        avgGrade: 'B+',
      },
    {
        courseCode: 'CIS101',
        courseName: 'Introduction to Computer Science',
        professorName: 'Dr. Smith',
        enrollment: 120,
        avgGrade: 'A-',
      },
      {
        courseCode: 'MAT202',
        courseName: 'Linear Algebra',
        professorName: 'Prof. Johnson',
        enrollment: 90,
        avgGrade: 'B+',
      },
  ];

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="prev" />, // Custom previous arrow
    nextArrow: <Arrow direction="next" />, // Custom next arrow
  };

  return (
    <div style={{ paddingLeft: '144px', paddingRight: '144px',paddingTop: '20px' }}>
    <div style={{ position: 'relative' }}>
      <h2 style={{ textAlign: 'left' }}>Recommended for You</h2>
      <Slider {...settings}>
        {cardData.map((data, index) => (
          <div key={index}>
            <CourseCard {...data} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default carousel