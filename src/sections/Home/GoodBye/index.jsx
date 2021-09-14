import React from "react";
import Grid from "../../../components/Grid";
import Img from "../../../components/Img";
import Text, { HeaderText } from "../../../components/Text";
import andrysCristian from '../../../images/andrysandcristian@2x.png';
import "./GoodBye.scss";

const GoodBye = () => {
  return (
    <section className="goodbye">
      <Grid>
        <div className="goodbye__row">
          <HeaderText className="goodbye__title">Nos vemos pronto</HeaderText>
          <Img src = {andrysCristian} className = "goodbye__image" alt = "Andrys & Cristian" />
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
