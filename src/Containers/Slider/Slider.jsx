import React, { useState } from "react";
import "./Slider.scss";
import image_1 from "../../assets/cms_1.jpeg";
import image_2 from "../../assets/cms_2.jpeg";
import image_3 from "../../assets/cms_3.jpeg";
import image_4 from "../../assets/cms_4.jpeg";
import image_5 from "../../assets/cms_5.jpeg";

const Slider = () => {
  const slides = [
    { name: image_1, title: "image_1" },
    { name: image_2, title: "image_2" },
    { name: image_3, title: "image_3" },
    { name: image_4, title: "image_4" },
    { name: image_5, title: "image_5" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementSlider = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const decrementSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      {console.log(currentIndex)}
      <img
        src={`${slides[currentIndex].name}`}
        alt={`${slides[currentIndex].title}`}
      />
      <div className="navigation">
        <div
          onClick={() => {
            decrementSlider();
          }}
        >
          ❰
        </div>
        <div
          onClick={() => {
            incrementSlider();
          }}
        >
          ❱
        </div>
      </div>
      <div className="slider-dots">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dot ${
              currentIndex === slideIndex ? "active" : "inactive"
            }`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
      <div class="border-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Slider;
