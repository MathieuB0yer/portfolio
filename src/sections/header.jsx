import React, { useRef } from "react";
import {
  BorderButton,
  FullscreenIMG,
  FullScreenSection,
  HeaderTitle,
  HeaderTitleContainer,
  PlainButton,
  ScrollIcn,
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

import scrollTeller from "../img/scrollTeller.svg";
const heroIMG = require("../img/heroIMG.png");
const Header = ({ executeScrollOnWork, executeScrollOnContact }) => {
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
            <PlainButton
              onClick={executeScrollOnWork}
              color="white"
              textcolor="#49539f"
              className="first"
            >
              View my work
            </PlainButton>
            <BorderButton onClick={executeScrollOnContact} color="white">
              Get in touch
            </BorderButton>
          </motion.div>
        </HeaderTitle>
      </HeaderTitleContainer>

      <ScrollIcn>
        <img src={scrollTeller} alt="" />
        <motion.div className="miniDot"></motion.div>
      </ScrollIcn>
    </FullScreenSection>
  );
};

export default Header;
