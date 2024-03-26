import React from "react";
import hand from "../images/couple_wedding.png";
import MAIN_IMAGE from "../images/main-wedding.jpg";
import "../WeadingDate.css";
import CountDown from "./CountDown";
import { Fade } from "react-reveal";

const WeadingDate = () => {
  return (
    <Fade>
      <div className="main-slider">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            className="display-table-cell"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="slider-content"
              style={{
                textAlign: "center",
              }}
            >
              <h2 className="title">Trần Đình Quang Huy</h2>
              <img className="sindur-dan" src={hand} alt="" />
              <h2>Vương Hà Vân</h2>
            </div>
          </div>
          <div>
            <CountDown />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default WeadingDate;
