import React from "react";
import Grid from "../../../components/Grid";
import Img from "../../../components/Img";
import Text, { HeaderText } from "../../../components/Text";
import andrysCristianDesktop from "../../../images/andrysandcristian@2x.png";
import andrysCristianMobile from "../../../images/andrys_cristian_mobile.png";
import { AnimateIn } from "../../../shared/utils";
import "./GoodBye.scss";

const GoodBye = () => {
  return (
    <AnimateIn>
      <section className="goodbye" id = "goodbye">
        <Grid>
          <div className="goodbye__row">
            <HeaderText className="goodbye__title">Nos vemos pronto</HeaderText>
            <picture>
              <source media="(min-width: 601px)" srcSet={andrysCristianDesktop} />
              <Img
                src={andrysCristianMobile}
                className="goodbye__image"
                alt="Andrys & Cristian"
              />
            </picture>
            <p className="goodbye__description">
              <Text>
                Este es un gran día en nuestras vidas y tu presencia lo hace aún
                más especial. ¡Gracias, allá nos vemos!
            </Text>
            </p>
            <p className="goodbye__signature">
              <Text>Hecho con ♥ por Andrys & Cristian</Text>
            </p>
          </div>
        </Grid>
      </section>
    </AnimateIn>
  );
};

export default GoodBye;
