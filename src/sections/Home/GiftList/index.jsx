import React from "react";
import Button from "../../../components/Button";
import Grid from "../../../components/Grid";
import Img from "../../../components/Img";
import Text, { HeaderText } from "../../../components/Text";
import GiftListImage from "../../../images/giftlist@2x.png";
import "./GiftList.scss";

const GiftList = () => {
  return (
    <section className="giftList">
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
              </Text>
            </p>
            <Button className="giftList__button">
              <Text>Ver Lista de Regalos</Text>
            </Button>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default GiftList;
