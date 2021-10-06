import React, {useRef} from "react";
import Button from "../../../components/Button";
import Countdown from "../../../components/Countdown";
import Grid from "../../../components/Grid";
import Text, { HeaderText } from "../../../components/Text";
import { useScrollDirection } from "../../../shared/utils";
import "./SaveTheDate.scss";

const SaveTheDate = () => {
  const sectionRef = useRef(null);
  const {isInViewport} = useScrollDirection(sectionRef?.current);
  return (
    <section className="saveTheDate" ref = {sectionRef}>
      <Grid className="saveTheDate__row">
        <div className="saveTheDate__wrapper">
          <div className="saveTheDate__column saveTheDate__columnLeft">
            <HeaderText className="saveTheDate__title">
              Save the Date
            </HeaderText>
            <div className="saveTheDate__description">
              <Text fontWeight="bold">
                Coloca tu propio recordatorio y mantente atento
                a todas las actualizaciones sobre nuestra boda.
              </Text>
            </div>
          </div>
          <div className="saveTheDate__column saveTheDate__countdownColumn">
            <div className = "saveTheDate__countdownColumnWrapper">
              <Countdown />
              <div className="saveTheDate__addToCalendar">
                <Button>
                  <Text>Añade al calendario</Text>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default SaveTheDate;
