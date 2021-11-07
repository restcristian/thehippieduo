import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Text from "../Text";
import "./LoadingScreen.scss";
import { getSplittedText } from "./utils";

const LoadingScreen = ({ isLoading, setIsLoading }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const percentageRef = useRef(null);

  const [percentage, setPercentage] = useState(0);
  let mainTL = gsap.timeline();

  useEffect(() => {
    const charsContainer = textRef.current;
    const charsDOM = charsContainer.querySelectorAll(".char");

    document.body.classList.add("isLoading");

    mainTL.set(charsContainer, { autoAlpha: 1 }).fromTo(
      charsContainer,
      {
        autoAlpha: 0,
        y: "100%",
      },
      {
        autoAlpha: 1,
        delay: 0.2,
        duration: 2.5,
        onStart: () => {
          gsap.fromTo(
            charsDOM,
            {
              autoAlpha: 0,
              display: "inline-block",
              y: "100%",
            },
            {
              autoAlpha: 1,
              delay: 0.2,
              display: "inline-block",
              duration: 2,
              ease: "back.inOut",
              stagger: 0.015,
              y: "0%",
            }
          );
        },
        ease: "expo.inOut",
        y: "0%",
      }
    );
  }, []);

  const getReversedTL = () => {
    const charsContainer = textRef.current;
    const container = containerRef.current;
    const percentageContainer = percentageRef.current;

    let reversedMainTL = gsap.timeline();
    return reversedMainTL.to([charsContainer, container, percentageContainer], {
      autoAlpha: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => document.body.classList.remove("isLoading"),
    });
  };

  useEffect(() => {
    let count = { val: 0 };

    gsap.to(count, {
      duration: 10,
      val: 100,
      roundProps: "val",
      onUpdate: () => setPercentage(count.val),
      onComplete: () => {
        Promise.all(
          Array.from(document.images)
            .filter((img) => !img.complete)
            .map(
              (img) =>
                new Promise((resolve) => {
                  img.onload = img.onerror = resolve;
                })
            )
        ).then(() => {
          console.log("images finished loading");
          getReversedTL();
        });
      },
    });
  }, []);

  return (
    <div className="loadingScreen" ref={containerRef}>
      <div className="loadingScreen__wrapper">
        <Text className="loadingScreen__text">
          <span
            ref={textRef}
            dangerouslySetInnerHTML={{ __html: getSplittedText() }}
          />
        </Text>
        <div ref={percentageRef}>
          <Text className="loadingScreen__percentage">{percentage}%</Text>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
