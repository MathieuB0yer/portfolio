import React from "react";
import {
  BorderButton,
  FullscreenIMG,
  FullScreenSection,
  HeaderTitle,
  HeaderTitleContainer,
  PlainButton,
} from "../styles";

import { motion } from "framer-motion";
import {
  btnAnim,
  container,
  item,
  makebig,
  stagg,
  textAppear,
} from "../animate";
const heroIMG = require("../img/heroIMG.png");
const Header = () => {
  return (
    <FullScreenSection>
      <FullscreenIMG variants={makebig} initial="hidden" animate="show">
        <img src={heroIMG} alt="" className="" />
        <div className="gradient"></div>
      </FullscreenIMG>

      <HeaderTitleContainer>
        <HeaderTitle variants={container} initial="hidden" animate="show">
          <motion.h1>
            <motion.span variants={item}>Lets</motion.span>
            <motion.span variants={item}>work</motion.span>
            <motion.span variants={item} className="changefont">
              together
            </motion.span>
          </motion.h1>
          <motion.div variants={btnAnim} className="btnContainer">
            <PlainButton color="white" textcolor="#49539f" className="first">
              View my work
            </PlainButton>
            <BorderButton color="white">Get in touch</BorderButton>
          </motion.div>
        </HeaderTitle>
      </HeaderTitleContainer>
    </FullScreenSection>
  );
};

export default Header;
