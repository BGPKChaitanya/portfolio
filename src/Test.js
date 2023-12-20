import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);

  const array = ["item", "item2", "item3", "item4", "item5"];
  const varients = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0, x: 0 },
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.ul initial="hidden" animate="visible" variants={varients}>
        {array.map((each, i) => (
          <motion.li variants={varients} key={each} custom={i}>
            {each}
          </motion.li>
        ))}
      </motion.ul>

      {/* <button onClick={() => setOpen(!open)}>Click Me</button> */}
    </div>
  );
};
export default Test;
