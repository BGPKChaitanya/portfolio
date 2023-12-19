import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.scss";
import Links from "./Links/Links";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        stiffness: 20,

        type: "spring",
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 40,
        stiffness: 400,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>

      <button onClick={() => setOpen(!open)}>
        <svg height="23" width="23" viewBox="0 0 23 23">
          <motion.path
            strokewidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokewidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokewidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default Sidebar;
