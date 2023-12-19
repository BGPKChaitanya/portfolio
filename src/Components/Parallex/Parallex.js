import React from "react";
import { motion } from "framer-motion";
import "./Parallex.scss";

const Parallex = ({ type }) => {
  return (
    <motion.div
      className="parallex"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #06222e, #164255)"
            : "linear-gradient(180deg, #06222e, #376b82)",
      }}
    >
      <motion.h1>
        {type === "services" ? "What I Do?" : "What I did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </motion.div>
  );
};

export default Parallex;
