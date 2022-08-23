import { PromiseProvider } from "mongoose";
import styled, { keyframes, withTheme } from "styled-components";

import { motion } from "framer-motion";

export const FullScreenSection = styled(motion.div)`
  h1 {
    font-family: "Lato", sans-serif;
  }

  height: 100vh;

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
  }
`;

export const HeaderTitleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: right;
`;
export const HeaderTitle = styled(motion.div)`
  display: flex;
  font-family: "Lato", sans-serif;
  flex-direction: column;

  margin-right: 10%;
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
  }

  .btnContainer > .first {
    margin-right: 1rem;
  }
`;

export const PlainButton = styled(motion.div)`
  font-family: "Lato", sans-serif;
  height: 100%;
  width: 15rem;

  @media screen and (min-width: 1900px) {
    width: 20rem;
  }
  @media screen and (max-width: 1440px) {
    width: 12rem;
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
    width: 20rem;
  }
  @media screen and (max-width: 1440px) {
    width: 12rem;
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
  overflow-x: hidden;
  height: 100vh;
  width: 100%;
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
  align-items: center;
`;

export const FlexLeft = styled(motion.div)`
  height: 70%;

  img {
    height: 100%;

    object-fit: cover;
  }
`;

export const FlexRight = styled(motion.div)`
  height: 70%;

  width: 32%;

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
  }
`;

export const MyWorkSection = styled(motion.div)`
  height: 100vh;

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

  display: flex;
  justify-content: center;

  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 50%;

  .arrow {
    height: 2rem;
    width: 2rem;
  }
`;
export const Sliderimages = styled.div`
  height: 80%;

  display: flex;
  justify-content: flex-start;

  width: 90%;

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
  margin: 5rem 0;
  padding: 5rem 0;

  background-color: #49539f;
`;

export const QuestionsContainer = styled(motion.div)`
  width: 80%;

  display: flex;
  flex-direction: column;
`;

export const StyledQuestion = styled(motion.div)`
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

    line-height: 50px;
    width: 50%;
  }

  span {
    font-family: "Source Serif Pro", serif;
    display: block;
  }
`;

export const StyledForm = styled(motion.div)`
  height: 75vh;
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
    width: 100%;
    display: flex;

    input {
      color: #081264;
      height: 92.5%;
      width: 60%;

      border-right: none;

      border-radius: 10px 0 0 10px;

      border: #6970a8 solid 3px;

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
