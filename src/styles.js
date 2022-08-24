import { PromiseProvider } from "mongoose";
import styled, { keyframes, withTheme } from "styled-components";

import { motion } from "framer-motion";

export const FullScreenSection = styled(motion.div)`
  h1 {
    font-family: "Lato", sans-serif;
  }

  transform: translate(0%);
  height: 100vh;

  @media only screen and (max-width: 890px) {
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }

    @supports not (-webkit-touch-callout: none) {
      height: 100vh;
      transform: translate(0%);
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FullscreenIMG = styled(motion.div)`
  height: 100%;
  width: 100%;

  position: absolute;

  img {
    height: 100%;

    object-fit: cover;
    position: absolute;

    width: 100%;

    @media only screen and (max-width: 890px) {
      object-position: -15rem;
    }
  }

  .gradient {
    background: linear-gradient(
      to left bottom,
      rgba(125, 3, 162, 0.6),
      rgba(84, 146, 230, 0.3)
    );

    position: absolute;
    height: 100%;
    width: 100%;

    @media only screen and (max-width: 890px) {
      height: -webkit-fill-available;
    }
  }
`;

export const HeaderTitleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: right;

  @media only screen and (max-width: 390px) {
    justify-content: center;

    text-align: center;
  }
`;
export const HeaderTitle = styled(motion.div)`
  display: flex;
  font-family: "Lato", sans-serif;
  flex-direction: column;

  margin-right: 10%;

  @media only screen and (max-width: 390px) {
    justify-content: center;

    margin-right: 0;
    text-align: center;
  }
  h1 {
    line-height: 140px;

    font-size: 130px;

    color: white;
  }

  @media screen and (min-width: 1900px) {
    h1 {
      font-size: 170px;
      line-height: 200px;
    }
  }

  @media screen and (max-width: 1440px) {
    h1 {
      font-size: 90px;
      line-height: 100px;
    }
  }

  @media only screen and (max-width: 390px) {
    h1 {
      line-height: 70px;

      font-size: 80px;

      color: white;
    }
  }

  span {
    display: block;
  }

  .changefont {
    font-family: "Source Serif Pro", serif;
    font-style: italic;
  }
  .btnContainer {
    margin-top: 3rem;
    height: 3.5rem;
    display: flex;
    margin-right: 1rem;

    font-family: "Lato", sans-serif;
    font-weight: 600;

    font-size: 1.1rem;

    @media screen and (min-width: 1900px) {
      height: 5rem;
    }
    @media screen and (max-width: 1440px) {
      margin-right: 0rem;
      height: 3rem;

      font-size: 0.9rem;
    }

    @media only screen and (max-width: 390px) {
      height: 9rem;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .btnContainer > .first {
    @media only screen and (min-width: 890px) {
      margin-right: 1rem;
    }
  }

  .btnContainer > div {
    @media only screen and (max-width: 390px) {
      height: 100%;
      margin: 0.5rem;
    }
  }
`;

export const ScrollIcn = styled.div`
  height: 3rem;

  position: absolute;

  bottom: 2rem;
  z-index: 1;
  display: flex;

  /* justify-items: flex-end; */
  align-self: center;
  img {
    height: 100%;
  }

  .miniDot {
    height: 1rem;
    width: 1rem;

    background-color: white;
    border-radius: 50%;

    position: absolute;
    left: 25%;

    top: 12.5%;

    animation: minidotanim 3s infinite ease-in-out;
  }

  @keyframes minidotanim {
    0% {
      top: 12.5%;
      opacity: 0;
    }

    15% {
      top: 50%;
      opacity: 0;
    }
    20% {
      opacity: 1;
    }

    50% {
      top: 12.5%;
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: 12.5%;
    }
  }
`;

export const PlainButton = styled(motion.div)`
  font-family: "Lato", sans-serif;
  height: 100%;
  width: 15rem;

  @media screen and (min-width: 1900px) {
    width: 16rem;
  }
  @media screen and (max-width: 1440px) {
    width: 12rem;
  }

  @media only screen and (max-width: 390px) {
    width: 100%;
  }

  color: ${(props) => (props.textcolor ? props.textcolor : "white")};
  border-radius: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};

  transition: all 0.4s;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transition: all 0.2s;
    transform: translateY(0.4rem) scale(1.05);
  }
`;

export const BorderButton = styled(motion.div)`
  @media screen and (min-width: 1900px) {
    width: 16rem;
  }
  @media screen and (max-width: 1440px) {
    width: 12rem;
  }

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
  font-family: "Lato", sans-serif;
  height: calc(100% - 7px);
  width: 15rem;

  border-radius: 10px;
  display: flex;

  color: ${(props) => props.color};
  justify-content: center;
  align-items: center;

  border: 4px solid ${(props) => props.color};
  transition: all 0.4s;
  &:hover {
    background-position: 100% 100%;

    color: ${(props) => (props.color == "white" ? "#49539f" : "white")};
  }
  &:active {
    transition: all 0.2s;
    transform: translateY(0.4rem);
  }
  background: linear-gradient(
    transparent,
    transparent 50%,
    ${(props) => props.color} 50%,
    ${(props) => props.color}
  );
  background-size: 100% 200%;
  /*trasition effect for background*/
  transition: all 0.5s;
`;

export const Aboutmesection = styled.div`
  overflow: hidden;
  height: 100vh;

  width: 100%;

  @media screen and (max-width: 890px) {
    height: auto;
  }
`;

export const FlexContainer = styled.div`
  h1 {
    font-size: 60px;

    @media screen and (min-width: 1900px) {
      font-size: 80px;
    }

    @media screen and (max-width: 1440px) {
      font-size: 40px;
    }
  }
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;

  font-weight: regular;
  font-size: 20px;
  @media screen and (min-width: 1900px) {
    font-size: 27px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }

  @media screen and (max-width: 890px) {
    flex-direction: column;

    margin-top: 5rem;
  }
  align-items: center;
`;

export const FlexLeft = styled(motion.div)`
  height: 70%;

  @media screen and (max-width: 890px) {
    height: 50%;
  }

  @media screen and (max-width: 390px) {
    height: 50%;
  }
  img {
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 890px) {
      height: 40rem;
    }

    @media screen and (max-width: 390px) {
      height: 27rem;
    }
  }
`;

export const FlexRight = styled(motion.div)`
  height: 70%;

  width: 32%;

  @media screen and (max-width: 890px) {
    margin-top: 2rem;
    width: 55%;

    h1 {
      margin: 1.5rem 0;
    }

    p:nth-child(2) {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 890px) {
    margin-top: 2rem;
    font-size: 1rem;
    width: 75%;
  }
  display: flex;

  flex-direction: column;

  justify-content: space-around;

  span {
    display: block;

    line-height: 40px;
    font-weight: 400;

    color: #777;
  }
  .first {
    margin-bottom: 2.5rem;
  }

  .btnContainer {
    display: flex;

    justify-content: space-between;

    font-weight: bold;

    font-size: 17px;
    height: 4rem;
    @media screen and (min-width: 1900px) {
      height: 5rem;
    }
    @media screen and (max-width: 1440px) {
      height: 3rem;

      font-size: 15px;
    }

    @media screen and (max-width: 890px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 10rem;
      div {
        width: 100%;

        margin: 0.5rem 0;
      }
    }
  }
`;

export const MyWorkSection = styled(motion.div)`
  height: 100vh;

  @media screen and (max-width: 390px) {
    height: auto;

    margin: 10rem 0;
  }
  h1 {
    margin-bottom: 0rem;
    font-size: 60px;

    @media screen and (min-width: 1900px) {
      font-size: 80px;
    }
    @media screen and (max-width: 1440px) {
      font-size: 40px;
    }
  }
  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Slider = styled.div`
  height: 80%;

  width: 90%;

  @media screen and (max-width: 390px) {
    width: 90%;
  }
`;
export const SliderControls = styled.div`
  height: 100%;

  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const ArrowContainer = styled.div`
  transition: all 1s;
  padding: 1rem;

  @media screen and (max-width: 390px) {
    z-index: 2;
    padding: 0.5rem;
    position: absolute;

    :first-child {
      left: 0%;
    }
    :last-child {
      right: 0%;
    }
  }

  display: flex;
  justify-content: center;

  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 50%;

  .arrow {
    height: 2rem;
    width: 2rem;

    @media screen and (max-width: 390px) {
      height: 1rem;
      width: 1rem;
    }
  }
`;
export const Sliderimages = styled.div`
  height: 80%;

  display: flex;
  justify-content: flex-start;

  width: 90%;

  @media screen and (max-width: 390px) {
    height: 35%;
    width: 100%;

    margin: 3rem 0;
  }

  box-shadow: 0 6px 12px rgba(105, 112, 168, 0.2);
  img {
    width: 100%;

    margin-right: 50%;
    object-fit: cover;

    object-position: top;
    transform: translate(calc((${(props) => props.position} * (-100% - 50%))));
    transition: all 1s ease-in-out;
  }

  transition: all 0.7s;
  &:hover {
    transform: scale(1.05);
  }
  overflow: hidden;
  margin: 0 5rem;
`;
export const Sliderdots = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  div {
    height: 1rem;

    background-color: #bfad8c;
    margin: 0 1rem;

    width: 1rem;

    border-radius: 50%;

    @media screen and (max-width: 390px) {
      height: 0.5rem;

      margin: 0 0.5rem;

      width: 0.5rem;
    }
  }

  .dot${(props) => props.position} {
    transition: all 0.7s;

    background-color: #74551f;

    animation: ease-in-out test 1s;
  }

  @keyframes test {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.3);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const QnASection = styled(motion.div)`
  display: flex;

  font-family: "Lato";
  color: white;
  h1 {
    font-size: 60px;
    margin-bottom: 2rem;

    @media screen and (min-width: 1900px) {
      font-size: 80px;
    }
    @media screen and (max-width: 1440px) {
      font-size: 40px;
    }
  }

  font-size: 15px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 0rem 0;
  padding: 5rem 0;

  background-color: #49539f;
`;

export const QuestionsContainer = styled(motion.div)`
  width: 80%;

  display: flex;
  flex-direction: column;
`;

export const StyledQuestion = styled(motion.div)`
  .listelem {
    margin-top: 1.2rem;
    margin-left: 4rem;

    @media screen and (max-width: 390px) {
      margin-left: 1rem;
    }
  }

  hr {
    border: 2px solid white;
    @media screen and (max-width: 1440px) {
      border: 1.5px solid white;
    }
    border-radius: 5rem;
  }

  .questionContainer {
    padding: 1.5rem 0;
    display: flex;

    align-items: center;
    justify-content: space-between;

    .turn {
      transform: rotate(90deg);
    }
  }
  margin: 1rem 0;

  font-size: 20px;

  @media screen and (max-width: 1440px) {
    font-size: 13px;
  }
  font-weight: 400;

  p {
    padding: 2rem 0;

    line-height: 35px;
    width: 50%;

    @media screen and (max-width: 390px) {
      width: 75%;
      line-height: 20px;
      width: 100%;
    }

    .listelem:nth-child(2) {
      margin-top: 4rem;
      @media screen and (max-width: 390px) {
        margin-top: 1.5rem;
      }
    }
  }

  span {
    font-family: "Source Serif Pro", serif;
    display: block;
  }
`;

export const StyledForm = styled(motion.div)`
  height: 90vh;
  p {
    display: flex;
    align-self: start;

    margin-left: 17.25%;

    margin-top: 0.4rem;
    font-family: "Lato";
    color: #6970a8;

    @media screen and (max-width: 1440px) {
      font-size: 10px;
      margin-left: 16.5%;
    }
  }
  span {
    display: block;

    font-size: 60px;
    @media screen and (min-width: 1900px) {
      font-size: 80px;
    }

    line-height: 100px;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: 40px;
      line-height: 70px;
    }
  }

  .skew {
    color: #6970a8;
    font-family: "Times New Roman", Times, serif;

    letter-spacing: 0.2rem;
    text-transform: lowercase;

    font-size: 70px;
    @media screen and (min-width: 1900px) {
      font-size: 90px;
    }
    @media screen and (max-width: 1440px) {
      font-size: 60px;
    }
    font-style: italic;

    margin-bottom: 5rem;
  }
  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;

  form {
    display: flex;

    justify-content: center;

    align-items: center;
    height: 5rem;

    @media screen and (max-width: 1440px) {
      font-size: 60px;

      height: 4rem;
    }

    @media screen and (max-width: 390px) {
      height: 3rem;
    }
    width: 100%;
    display: flex;

    input {
      color: #081264;
      height: 92.5%;
      width: 60%;

      border-right: none;

      border-radius: 10px 0 0 10px;

      border: #6970a8 solid 3px;

      @media screen and (max-width: 390px) {
        border: #6970a8 solid 2px;
        border-radius: 10px 0 0 10px;
        border-right: none;
      }
      border-right: none;
      padding-left: 1rem;

      font-size: 20px;

      letter-spacing: 2px;
    }

    input::placeholder {
      color: #6970a8;
    }
    button {
      border: none;
      height: 100%;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 0 10px 10px 0;

      background-color: #081264;
    }
  }
`;

export const StyledFooter = styled(motion.div)`
  display: flex;

  justify-content: center;
  align-items: center;

  height: 10vh;

  font-family: "Lato";

  p {
    font-weight: 600;
  }
  color: white;
  background-color: #02093c;
`;
