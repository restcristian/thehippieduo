import React, { useEffect, useState } from "react";
import { isInViewport, scrollTo, useScrollDirection } from "../../shared/utils";
import Button from "../Button";
import "./ScrollButton.scss";

const ScrollButton = () => {
  const [isScrollButtonShown, setIsScrollButtonShown] = useState(false);
  const { direction, currentScroll } = useScrollDirection();

  useEffect(() => {
    const banner = document.querySelector("section.banner");
    if (direction === "down" && !isInViewport(banner)) {
      setIsScrollButtonShown(true);
    } else {
      setIsScrollButtonShown(false);
    }
  }, [direction, currentScroll]);

  const onClickHandler = () => {
    const selectorTo = document.querySelector("section.banner");
    scrollTo(document.documentElement, selectorTo.offsetTop, 200);
  };
  return (
    <Button
      className={`scrollButton ${
        isScrollButtonShown ? "scrollButton--shown" : ""
      }`}
      animationDirection="top"
      onClick={onClickHandler}
    >
      <svg viewBox="0 0 15.333 35.663">
        <defs />
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M7.267.663l-6.6 6.6a.56.56 0 00-.165.4.56.56 0 00.165.4.56.56 0 00.4.165.56.56 0 00.4-.165l5.64-5.64v32.174a.565.565 0 00.56.566.565.565 0 00.564-.564V2.425l5.64 5.64a.56.56 0 00.4.165.56.56 0 00.4-.165.56.56 0 00.165-.4.56.56 0 00-.165-.4l-6.6-6.6a.56.56 0 00-.4-.165.56.56 0 00-.404.163z"
        />
      </svg>
    </Button>
  );
};

export default ScrollButton;
