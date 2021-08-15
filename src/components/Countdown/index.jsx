import React, { useState, useEffect } from "react";
import Text from "../Text";
import "./Countdown.scss"

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const countdownDate = new Date("April 14, 2022 15:00:00");
  let timeInterval;

  const timePass = () => {
    // Get today's time
    const now = new Date().getTime();

    // distance between now and countdownDate
    const distance = countdownDate - now;

    // Formateted time
    const fDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const fHours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const fMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    setDays(fDays);
    setHours(fHours);
    setMinutes(fMinutes);

    // if the date has arrived
    if (distance < 0) {
      clearInterval(timeInterval);
    }
  };

  const formatTime = (time) => {
    if(parseInt(time) >= 0 && parseInt(time) <= 9) {
        return `0${time}`;
    }
    return time;
  }

  useEffect(() => {
    timeInterval = setInterval(timePass, 1000);
  }, []);
  return (
    <div className = "countdown">
      <div className="countdown__wrapper">
          <div className="countdown__day">
              <Text className = "countdown__time">{formatTime(days)}</Text>
              <Text className = "countdown__label">Días</Text>
          </div>
          <span className="countdown__colon">:</span>
          <div className="countdown__hours">
              <Text className = "countdown__time">{formatTime(hours)}</Text>
              <Text className = "countdown__label">Horas</Text>
          </div>
          <span className="countdown__colon">:</span>
          <div className="countdown__minutes">
              <Text className = "countdown__time">{formatTime(minutes)}</Text>
              <Text className = "countdown__label">Minutos</Text>
          </div>
      </div>
    </div>
  );
};

export default Countdown;
