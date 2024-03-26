import React, { useEffect, useState } from "react";
import "./commoncss/bootstrap.css";
import "./commoncss/font-icon.css";
import "./App.css";
import WeadingDate from "./components/WeadingDate";
import WeadingDetails from "./components/WeadingDetails";
import Weadingloaction from "./components/Weadingloaction";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import { Fade } from "react-reveal";
import mp3 from "./sound.mp3";
import confetti from "canvas-confetti";

function App() {
  const [isLoader, setIsLoader] = useState(true);
  const animation = () => {
    const duration = 999999 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#FFC0CB", "#FF1493", "#C71585"];

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const heart = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      matrix: [
        0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
        -5.533333333333333,
      ],
    });

    (function frame() {
      const timeLeft = animationEnd - Date.now();

      colors.forEach((color) => {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: Math.max(50, 75 * (timeLeft / duration)),
          origin: {
            x: Math.random(),
            y: Math.abs(Math.random() - timeLeft / duration),
          },
          zIndex: 1057,
          colors: [color],
          shapes: [heart],
          drift: randomInRange(-0.5, 0.5),
          gravity: randomInRange(0.5, 1),
          scalar: randomInRange(0.5, 1),
        });
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  };
  const startAnimation = () => {
    setIsLoader(false);
    const music = new Audio(mp3);
    music.play();
    confetti({
      origin: { y: 0.9 },
      zIndex: 1057,
    });
    animation();
  };
  return (
    <div className="App">
      {isLoader ? (
        <Fade>
          <Loader onClick={startAnimation} />
        </Fade>
      ) : (
        <>
          <WeadingDate />
          <Weadingloaction />
          <WeadingDetails />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
