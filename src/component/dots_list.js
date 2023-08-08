import React, { useRef } from "react";

// style
import "./dots_list.css";

const DotsList = ({ data, dotRef, current }) => {
  // -------------------------- VAR --------------------------
  // -------------------------- STATE --------------------------
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------
  // -------------------------- EFFECT --------------------------
  // -------------------------- MAIN --------------------------
  return (
    <div className="dots-list">
      {data?.map((item, index) => {
        return (
          <div
            style={{ margin: "10px" }}
            className={`dot-carousel${current === index ? " active" : ""}`}
            key={index}
            onClick={() => dotRef?.current?.goTo(index)}
          ></div>
        );
      })}
    </div>
  );
};

export default DotsList;
