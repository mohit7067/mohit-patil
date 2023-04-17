import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Testimonials.scss";

const testimonials = [
  {
    name: "Soumya Moulik",
    imgUrl: images.soumya,
    feedback:
      "Mohit is knowledgeable and too much dedicated to work. He would be an asset to any team",
    company: "Masai School",
  },
  {
    name: "Shahrukh",
    imgUrl: images.shahrukh,
    feedback:
      "Mohit patil Is talented and problem solving person he know very well concepts of coding and his supportive behaviour is also making him perfect",
    company: "Masai School",
  },
  {
    name: "Ayushi Jain",
    imgUrl: images.ayushi,
    feedback:
      "We worked together on a mini-project and I observed that he is a good team player, knowledgeable and focused",
    company: "Masai School",
  },
  {
    name: "Raju Prajapati",
    imgUrl: images.raju,
    feedback:
      "we worked on a project together. Mohit is a really good team person, dedicated to his work and he is knowledgeable and punctual for his work.",
    company: "Masai School",
  },
  {
    name: "Raju Jangra",
    imgUrl: images.rajujai,
    feedback:
      "I worked with Mohit on a project. He is a very humble person and an excellent team member.",
    company: "Masai School",
  },
  {
    name: "Parul Jamwal",
    imgUrl: images.parul,
    feedback:
      "Mohit is a proactive , good problem solver and very friendly in nature. He would be assets to any organisation.",
    company: "Masai School",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="head-text" style={{ marginBottom: "1.5rem" }}>
        Testi<span>mo</span>nials
      </h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgUrl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__whitebg"
);
