import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"

export const isBrowser = () => typeof window !== "undefined";

export const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
};

export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left <
    ((isBrowser() && window.innerWidth) ||
      document.documentElement.clientWidth) /* or $(window).width() */ &&
    rect.top <
    ((isBrowser() && window.innerHeight) ||
      document.documentElement.clientHeight) /* or $(window).height() */
  );
};

export const formatTime = (time) => {
  if (parseInt(time) >= 0 && parseInt(time) <= 9) {
    return `0${time}`;
  }
  return time;
};

export const useScrollDirection = () => {
  const [direction, setDirection] = useState("");
  const [scroll, setScroll] = useState(isBrowser() && window.pageYOffset);

  let lastScroll = 0;

  useEffect(() => {
    const scrollHandler = (e) => {

      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        return;
      }
      if (currentScroll > lastScroll) {
        setDirection("down")
      } else if (currentScroll < lastScroll) {
        setDirection("up")
      }
      lastScroll = currentScroll;
      setScroll(currentScroll);
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    }
  }, []);

  return {
    direction,
    currentScroll: scroll
  };
};

export const useCountDown = (countdownDate = new Date("April 14, 2022 15:00:00")) => {
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
    const fSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(fDays);
    setHours(fHours);
    setMinutes(fMinutes);
    setSeconds(fSeconds);
    // if the date has arrived
    if (distance < 0) {
      clearInterval(timeInterval);
    }
  };


  useEffect(() => {
    timeInterval = setInterval(timePass, 1000);
  }, []);

  return {
    hours,
    days,
    minutes,
    seconds
  }
}

export const generateCalendarEventLink = () => {
  const event = {
    name: 'Boda+de+Andrys+y+Cristian',
    date: '20220414/20220415',
    details: '',
    location: 'Av+Sarasota,+No.+65,Santo+Domingo+República+Dominicana'
  }
  return `https://calendar.google.com/calendar/u/0/r/eventedit?text=${event.name}&dates=${event.date}&details=${event.details}&location=${event.location}&sf=false`
}

export const AnimateIn = ({ threshold = 0, triggerOnce = true, distance = 50, children, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 500ms, transform 500ms",
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : distance}px)`,
      }}
    >
      {children}
    </div>
  )
}