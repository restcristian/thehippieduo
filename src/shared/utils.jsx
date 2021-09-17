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

export const useScrollDirection = () => {
  const [direction, setDirection] = useState("");
  const [scroll, setScroll] = useState(window.pageYOffset);
 
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
