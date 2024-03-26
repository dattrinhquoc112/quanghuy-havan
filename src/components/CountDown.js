import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [isExpired, setIsExpired] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const countDownDate = new Date("March 31, 2024 12:00:00").getTime();
    const x = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);
      if (days !== day) {
        setDays(day);
      }
      if (hours !== hour) {
        setHours(hour);
      }
      if (minutes !== minute) {
        setMinutes(minute);
      }
      if (seconds !== second) {
        setSeconds(second);
      }

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setIsExpired(true);
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <section
      className="counter-area center-text"
      style={{
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h5 className="date">Ngày 31 Tháng 3 Năm 2024</h5>
            <h3 className="pre-title">Tham Dự Cùng Chúng Mình Nhé</h3>
            <div className="remaining-time">
              {isExpired ? (
                <div>Yay....</div>
              ) : (
                <div id="clock">
                  <div className="time-sec">
                    <span className="title">{days}</span> Ngày{" "}
                  </div>
                  <div className="time-sec">
                    <span className="title">{hours}</span> Giờ{" "}
                  </div>
                  <div className="time-sec">
                    <span className="title">{minutes}</span> Phút{" "}
                  </div>
                  <div className="time-sec">
                    <span className="title">{seconds}</span> Giây{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
