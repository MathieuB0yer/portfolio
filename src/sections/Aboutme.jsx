import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { comeFromLeft, comeFromRight, item } from "../animate";
import {
  Aboutmesection,
  BorderButton,
  FlexContainer,
  FlexLeft,
  FlexRight,
  PlainButton,
} from "../styles";

const aboutMe = require("../img/aboutme.png");

const Aboutme = () => {
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
    <Aboutmesection>
      <FlexContainer>
        <FlexLeft ref={ref} variants={comeFromLeft} animate={controls}>
          <img src={aboutMe} alt="" />
        </FlexLeft>

        <FlexRight
          ref={ref}
          variants={comeFromRight}
          initial="hidden"
          animate={controls}
        >
          <h1>WHO AM I</h1>
          <motion.p>
            <span className="first">
              Well hello there ! I’m Mathieu a French web developper and
              designer and my goal here is to help you to understand your
              brand’s target and then create create your web identity , giving
              you visibility across the web ocean !
            </span>
            <span>
              So ! Are you interested to get started with me into a brand new
              journey ?
            </span>
          </motion.p>

          <div className="btnContainer">
            <PlainButton color="#6970A8">Yes i'm ready</PlainButton>

            <BorderButton color="#6970A8">I need more</BorderButton>
          </div>
        </FlexRight>
      </FlexContainer>
    </Aboutmesection>
  );
};

export default Aboutme;
