import React from "react";
import { motion } from "framer-motion";

const varients = {
  open: {
    transition: { staggerChildern: 0.1 },
  },
  closed: {
    transition: { staggerChildern: 0.05, staggerDirection: -1 },
  },
};
const itemvarients = {
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
  closed: (i) => ({
    y: 50,
    opacity: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact"];
  return (
    <motion.div className="links" variants={varients}>
      {items.map((each, i) => (
        <motion.a
          href={`#${each}`}
          key={each}
          variants={itemvarients}
          custom={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {each}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
