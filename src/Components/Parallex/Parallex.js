import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallex.scss";

const Parallex = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const xbg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div
      className="parallex"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #06222e, #164255)"
            : "linear-gradient(180deg, #06222e, #376b82)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yText,
          backgroundImage: `url(
            ${type === "services" ? "/planets.png" : "/sun.png"}
          )`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: xbg }}></motion.div>
    </div>
  );
};

export default Parallex;
