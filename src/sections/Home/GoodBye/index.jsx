import React from "react";
import Grid from "../../../components/Grid";
import Img from "../../../components/Img";
import Text, { HeaderText } from "../../../components/Text";
import andrysCristianDesktop from "../../../images/andrysandcristian@2x.png";
import andrysCristianMobile from "../../../images/andrys_cristian_mobile.png";
import "./GoodBye.scss";

const GoodBye = () => {
  return (
    <section className="goodbye">
      <Grid>
        <div className="goodbye__row">
          <HeaderText className="goodbye__title">Nos vemos pronto</HeaderText>
          <picture>
            <source media="(min-width: 601px)" srcset={andrysCristianDesktop} />
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
        </div>
      </Grid>
    </section>
  );
};

export default GoodBye;
