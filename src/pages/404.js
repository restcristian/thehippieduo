import * as React from "react";
import Text, { HeaderText } from "../components/Text";

import "./404.scss";
import "../shared/reset.scss";
import Button from "../components/Button";

// markup
const NotFoundPage = () => {
  return (
    <main className="notFound">
      <div className="notFound__wrapper">
        <HeaderText className="notFound__title" fontWeight="bold">
          Eeeh...
        </HeaderText>
        <p className="notFound__description">
          <Text className="notFound__descriptionText">
            {" "}
            Parece que no deberías estar aquí.
            <br />
            ¿Qué tal si regresas a la página principal?
          </Text>
        </p>
        <div className="notFound__buttonWrapper">
          <Button isLink redirectTo="/" isExternal={false}>
            <Text fontWeight="bold">Sí, Llévame al inicio</Text>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
