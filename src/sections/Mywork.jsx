import React, { useState, useEffect } from "react";

import {
  ArrowContainer,
  MyWorkSection,
  Slider,
  SliderControls,
  Sliderdots,
  Sliderimages,
} from "../styles";
import leftArrow from "../img/leftArrow.svg";

import rightArrow from "../img/rightArrow.svg";

import project_1 from "../img/project_1.png";
import project_2 from "../img/project_2.png";
import project_3 from "../img/project_3.png";
import { comeFromBottom } from "../animate";
import { useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
const Mywork = ({ workRef }) => {
  let sliderimg = [
    { img: project_1, position: 0 },
    { img: project_2, position: 1 },
    { img: project_3, position: 2 },
  ];

  let [position, setPosition] = useState(0);

  useEffect(() => {
    console.log(position);
  }, [position]);

  //   ${(props) => props.position }

  let controls = useAnimation();
  let [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return (
    <MyWorkSection
      ref={workRef}
      variants={comeFromBottom}
      initial="hidden"
      exit="exit"
      animate={controls}
    >
      <h1>MY WORK</h1>

      <Slider>
        <SliderControls>
          <ArrowContainer
            color={position === 0 ? "#BFAD8C" : "#9f8555"}
            onClick={() =>
              position - 1 < 0
                ? setPosition(sliderimg.length - 1)
                : (setPosition(position - 1), console.log("position"))
            }
          >
            <img src={leftArrow} className="arrow"></img>
          </ArrowContainer>
          <Sliderimages ref={ref} position={position}>
            {sliderimg.map((slide) => (
              <img src={slide.img} alt="" />
            ))}
          </Sliderimages>

          <ArrowContainer
            color={position === sliderimg.length - 1 ? "#BFAD8C" : "#9f8555"}
            onClick={() =>
              position + 1 < sliderimg.length
                ? setPosition(position + 1)
                : setPosition(0)
            }
          >
            <img src={rightArrow} className="arrow"></img>
          </ArrowContainer>
        </SliderControls>

        <Sliderdots position={position}>
          {sliderimg.map((dot) => (
            <div
              className={"dot" + dot.position}
              onClick={() => {
                setPosition(dot.position);
              }}
            ></div>
          ))}
        </Sliderdots>
      </Slider>
    </MyWorkSection>
  );
};

export default Mywork;
