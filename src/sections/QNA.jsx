import React, { useEffect } from "react";
import { QnASection, QuestionsContainer } from "../styles";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import Question from "../components/Question";
import { useInView } from "react-intersection-observer";
import { comeFromRight, fadeIn } from "../animate";
const QNA = () => {
  let questions = [
    {
      question: "How are you creating websites ?",
      response:
        "I fully code my websites  myself because i think it is the best way to create a solution for YOU that will fully understand YOUR needs",
    },
    {
      question: "what are you coding with ?",
      response:
        "I code websites with the MERN technology _ - M : mongoDB (database) _ - E : Express (used to build a server _ - R : React (used to create the visual aspect from websites _ - N : NodeJs (to comunicate with the database and the user)",
    },
    {
      question: "How do you bill ?",
      response:
        "To know how much could cost YOUR website i invite you to send me your mail with the mail section ( under this faq section ) because it will depend on the functionalities you would need but usually : _ - A showcase website would cost : $ 1500 _ - An Ecommerce website would cost $ 2000 - $ 5000",
    },
    {
      question: "Where can i contact you ?",
      response:
        "You can contact me by sending me your email with the form under this QnA section or directly at my own mail : mboyer980@gmail.com",
    },
  ];

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
    <QnASection ref={ref} variants={fadeIn} animate={controls} initial="hidden">
      <h1>QnA</h1>

      <QuestionsContainer>
        <AnimateSharedLayout>
          {questions.map((Q) => (
            <Question question={Q.question}>
              <motion.div className="">
                {/* <p>{Q.response}</p> */}
                <p>
                  {Q.response.split("_").map((resp) => (
                    <span>{resp}</span>
                  ))}
                </p>
              </motion.div>
            </Question>
          ))}
        </AnimateSharedLayout>
      </QuestionsContainer>
    </QnASection>
  );
};

export default QNA;
