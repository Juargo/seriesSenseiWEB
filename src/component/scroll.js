import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        marginTop: "10px",
        overflow: "scroll",
        border: "1px solid #E6A452",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
