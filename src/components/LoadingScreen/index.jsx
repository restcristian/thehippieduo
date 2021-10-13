import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Text from "../Text";
import "./LoadingScreen.scss";
import { getSplittedText } from "./utils";

const LoadingScreen = ({ isLoading, setIsLoading }) => {
  const textRef = useRef(null);
  const [percentage, setPercentage] = useState(0);
  let mainTL = gsap.timeline({ paused: true });
  useEffect(() => {
    const charsContainer = textRef.current;
    const charsDOM = charsContainer.querySelectorAll(".char");
    
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
              onComplete: function() {
                charsDOM.forEach(charDOM => {
                  charDOM.classList.add('stopAnimating');
                })
              }
            }
          );
        },
        ease: "expo.inOut",
        y: "0%",
      }
    );

    mainTL.play();
  }, []);

  useEffect(() => {
    let count = { val: 0 };
   
    gsap.to(count, {
      duration: 5,
      val: 100,
      roundProps: "val",
      onUpdate: () => setPercentage(count.val),
      onComplete: () => {
        console.log('finished')
        // mainTL.timeScale(1).reverse()
      }
    });

    
  }, []);

  return (
    <div className="loadingScreen">
      <div className="loadingScreen__wrapper">
        <Text className="loadingScreen__text">
          <span
            ref={textRef}
            dangerouslySetInnerHTML={{ __html: getSplittedText() }}
          />
        </Text>
        <Text className="loadingScreen__percentage">{percentage}%</Text>
      </div>
    </div>
  );
};

export default LoadingScreen;
