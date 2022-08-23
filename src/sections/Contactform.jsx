import React, { useEffect } from "react";
import { StyledForm } from "../styles";
import send from "../img/send.svg";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { comeFromLeft, comeFromLeftDelay } from "../animate";
const Contactform = ({ contactRef }) => {
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
    <StyledForm
      ref={ref}
      variants={comeFromLeftDelay}
      initial="hidden"
      animate={controls}
    >
      <h1>
        <span>LETS START NOW</span>
        <span className="skew">TOGETHER</span>
      </h1>

      <form ref={contactRef}>
        <input placeholder="Enter you mail" type="email"></input>

        <button>
          <img src={send}></img>
        </button>
      </form>
      <p>By sending your mail you accept to be contacted back</p>
    </StyledForm>
  );
};

export default Contactform;
