import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const slidertextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Gayendra Pavan Krishna Chaitanya Bathina
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer (MERN)
          </motion.h1>
          <motion.button whileTap={{ scale: 0.95 }}>Contact Me</motion.button>
          <motion.a variants={textVariants} animate="scrollButton">
            <KeyboardDoubleArrowDownSharpIcon style={{ cursor: "pointer" }} />
          </motion.a>
        </motion.div>
        <motion.div
          className="slidingtext"
          variants={slidertextVariants}
          initial="initial"
          animate="animate"
        >
          Full Stack Developer (MERN Stack)
        </motion.div>
        <div className="imageContainer">
          <img src="./hero.png" alt="hero" className="imageContainer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
