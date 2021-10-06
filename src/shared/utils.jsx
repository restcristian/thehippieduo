import { useEffect, useState } from "react";

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
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */ &&
    rect.top <
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */
  );
};

export const formatTime = (time) => {
  if (parseInt(time) >= 0 && parseInt(time) <= 9) {
    return `0${time}`;
  }
  return time;
};

const isScrolledIntoView = (el) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  
  return isVisible;
}

export const useScrollDirection = (currentSection = null) => {
  const [direction, setDirection] = useState("");
  const [scroll, setScroll] = useState(window.pageYOffset);
  const [isInViewport, setIsViewport] = useState(false);
  

  let lastScroll = 0;

  const directionHandler = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      return;
    }
    if (currentScroll > lastScroll) {
      setDirection("down");
    } else if (currentScroll < lastScroll) {
      setDirection("up");
    }
    lastScroll = currentScroll;
    setScroll(currentScroll);
  };

  const sectionHandler = () => {
    if(currentSection && isScrolledIntoView(currentSection)) {
      setIsViewport(true)
    } else {
      setIsViewport(false);
    }
  }

  useEffect(() => {
    const scrollHandler = (e) => {
      directionHandler();
      sectionHandler()
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return {
    direction,
    currentScroll: scroll,
    isInViewport
  };
};

export const useCountDown = (
  countdownDate = new Date("April 14, 2022 15:00:00")
) => {
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
    seconds,
  };
};
