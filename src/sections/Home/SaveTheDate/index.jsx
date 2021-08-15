import React from "react";
import Grid from "../../../components/Grid";
import Text, { HeaderText } from "../../../components/Text";
import "./SaveTheDate.scss";

const SaveTheDate = () => {
  return (
    <section className="saveTheDate">
      <Grid className="saveTheDate__row">
        <div className="saveTheDate__wrapper">
          <div className="saveTheDate__column saveTheDate__leftColumn">
            <HeaderText className="saveTheDate__title">
              Save the Date
            </HeaderText>
            <div className="saveTheDate__description">
              <Text fontWeight="bold">
                Coloca tu propio recordatorio y mantente atento a todas las
                actualizaciones sobre nuestra boda.
              </Text>
            </div>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default SaveTheDate;
