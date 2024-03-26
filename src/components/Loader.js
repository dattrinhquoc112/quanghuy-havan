import React from "react";
import "../commoncss/loader.css";

const Loader = ({ onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="button-let-go" onClick={onClick}>
        <span className="loader"></span>
        <h3
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Let's go
        </h3>
      </div>
    </div>
  );
};
export default Loader;
