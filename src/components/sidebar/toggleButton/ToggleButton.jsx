import React from "react";
import { motion } from "framer-motion";
import "./toggleButton.scss";

const ToggleButton = ({ setOpen }) => {
  return (
    <div className="button-container">
      <button onClick={() => setOpen((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="black">
          <motion.path
            d="M20.2837 38.0004 L60.2837 38.0004"
            variants={{
              open: { d: "M25.4347 53.4347 L53.719 25.1504" },
              closed: { d: "M20.2837 38.0004 L60.2837 38.0004" },
            }}
          />
          <motion.path
            d="M20.2847 46.0004 L60.2847 46.0004"
            variants={{
              open: { d: "M53.7197 54.8489 L25.4354 26.5646" },
              closed: { d: "M20.2847 46.0004 L60.2847 46.0004" },
            }}
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleButton;
