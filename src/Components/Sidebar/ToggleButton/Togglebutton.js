import React from "react";

const Togglebutton = (setOpen) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg height="23" width="23" viewBox="0 0 23 23">
        <path strokewidth="3" stroke="black" strokeLinecap="round" />
        <path strokewidth="3" stroke="black" strokeLinecap="round" />
        <path strokewidth="3" stroke="black" strokeLinecap="round" />
      </svg>
    </button>
  );
};

export default Togglebutton;
