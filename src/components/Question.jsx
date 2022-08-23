import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from "framer-motion";
import rightArrow from "../img/minirightArrow.svg";
import { StyledQuestion } from "../styles";
import { comeFromBottom, comeFromRight, faq } from "../animate";
import { useInView } from "react-intersection-observer";

const Question = ({ children, question }) => {
  let [toggle, setToggle] = useState(false);

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
    <StyledQuestion
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={comeFromBottom}
      layout
      onClick={() => setToggle(!toggle)}
    >
      <motion.div className="questionContainer">
        <motion.h3 layout>{question}</motion.h3>

        <motion.div layout className="icnContainer">
          <motion.img
            className={toggle ? "turn" : ""}
            src={rightArrow}
            alt=""
          />
        </motion.div>
      </motion.div>

      {/* <AnimatePresence> */}

      {toggle ? children : ""}

      {/* </AnimatePresence> */}

      <motion.hr />
    </StyledQuestion>
  );
};

export default Question;
