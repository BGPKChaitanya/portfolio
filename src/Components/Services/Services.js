import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const varients = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-150px" });
  return (
    <motion.div
      className="services"
      variants={varients}
      initial="initial"
      ref={ref}
      // whileInView="animate"
      whileInView={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={varients}>
        <p>
          Real change, enduring change, happens one step at a time. <br />
          Light tomorrow with today.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={varients}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Undergo</motion.b> ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>What I do?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={varients}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
