import React, { useState, useEffect } from "react";
import Text from "../Text";
import { useCountDown, formatTime } from "../../shared/utils";
import "./Countdown.scss";

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountDown();

  return (
    <div className="countdown">
      <div className="countdown__wrapper">
        <div className="countdown__day">
          <Text className="countdown__time">{formatTime(days)}</Text>
          <Text className="countdown__label">Días</Text>
        </div>
        <span className="countdown__colon">:</span>
        <div className="countdown__hours">
          <Text className="countdown__time">{formatTime(hours)}</Text>
          <Text className="countdown__label">Horas</Text>
        </div>
        <span className="countdown__colon">:</span>
        <div className="countdown__minutes">
          <Text className="countdown__time">{formatTime(minutes)}</Text>
          <Text className="countdown__label">Minutos</Text>
        </div>
        <span className="countdown__colon">:</span>
        <div className="countdown__seconds">
          <Text className="countdown__time">{formatTime(seconds)}</Text>
          <Text className="countdown__label">Segundos</Text>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
