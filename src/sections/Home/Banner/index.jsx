import React from "react";
import Text, { HeaderText } from "../../../components/Text";
import "./Banner.scss";

import andrysCristianDesktop from "../../../images/andrysandcristian@2x.png";
import andrysCristianMobile from "../../../images/aycmobile.png";
import Button from "../../../components/Button";
import Img from "../../../components/Img";
import { scrollTo } from "../../../shared/utils";

const Banner = () => {
  const onClickConfirm = () => {
    const sectionRSVP = document.querySelector('section.rsvp');
    
    scrollTo(document.documentElement, sectionRSVP.getBoundingClientRect().top, 200);
  }
  return (
    <section className="banner" id = "banner">
      <div className="banner__leftBG"></div>
      <div className="banner__right">
        <div className="banner__right-wrapper">
        <picture>
            <source media="(min-width: 601px)" srcSet={andrysCristianDesktop} />
            <Img
              className="banner__andrysCris"
              src={andrysCristianMobile}
              alt="Andrys & Cristian"
            />
          </picture>
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
                <Text fontWeight = "bold">Confirma Asistencia</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
