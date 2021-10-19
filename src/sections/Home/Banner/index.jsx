import React from "react";
import Text, { HeaderText } from "../../../components/Text";
import "./Banner.scss";

import andrysCristian from "../../../images/andrysandcristian@2x.png";
import Button from "../../../components/Button";
import Img from "../../../components/Img";
import { scrollTo } from "../../../shared/utils";

const Banner = () => {
  const onClickConfirm = () => {
    const sectionRSVP = document.querySelector('section.rsvp');
    
    scrollTo(document.documentElement, sectionRSVP.offsetTop, 200);
  }
  return (
    <section className="banner">
      <div className="banner__leftBG"></div>
      <div className="banner__right">
        <div className="banner__right-wrapper">
          <Img
            className="banner__andrysCris"
            src={andrysCristian}
            alt="Andrys & Cristian"
          />
          <div className="banner__wrapper">
            <HeaderText>
              Jueves 14 <br />
              Abril, 2022
            </HeaderText>
            <div className="banner__hashtag">
              <Text>#TheHippieDuo</Text>
            </div>
            <p className="banner__description">
              <Text>
                Para nosotros es un placer que seas parte de nuestras vidas y de
                este evento tan especial. Para asegurarnos de tu asistencia por
                favor déjanos saber a tiempo.
              </Text>
            </p>
            <div className="banner__buttonContainer">
              <Button onClick = {() => onClickConfirm()} className = "banner__button">
                <Text>Confirma Asistencia</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
