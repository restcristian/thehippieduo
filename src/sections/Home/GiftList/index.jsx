import React from "react";
import Button from "../../../components/Button";
import Grid from "../../../components/Grid";
import Img from "../../../components/Img";
import Text, { HeaderText } from "../../../components/Text";
import GiftListImage from "../../../images/giftlist@2x.png";
import { AnimateIn } from "../../../shared/utils";

import "./GiftList.scss";

const GiftList = () => {
  const isGiftListOpen = true;
  return (
    <AnimateIn>
      <section className="giftList" id="giftList">
        <Grid>
          <div className="giftList__wrapper">
            <Img
              src={GiftListImage}
              alt="Cristian & Andrys sentados en un Arbol"
              className="giftList__image"
            />

            <div className="giftList__textContent">
              <HeaderText>Lista de Regalos</HeaderText>
              <p className="giftList__description">
                <Text>
                  Accede a la página de Amazon Alemania para dejar tu amor de
                  forma física en nuestro nuevo hogar.
                  <br /> <br />
                  <Text fontWeight="bold">Nota:</Text> Por favor cambiar el
                  destino de entrega a Berlin (ej: zip code: 10437), para que
                  todos los artículos de la lista le aparezcan disponibles.
                </Text>
              </p>
              {isGiftListOpen && (
                <Button
                  className="giftList__button"
                  isLink
                  redirectTo="https://www.amazon.de/wedding/share/thehippieduo"
                >
                  <Text fontWeight="bold">Ver Lista de Regalos</Text>
                </Button>
              )}
            </div>
          </div>
        </Grid>
      </section>
    </AnimateIn>
  );
};

export default GiftList;
