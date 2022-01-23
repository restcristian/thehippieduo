import React from "react";
import Accordion from "../../../components/Accordion";
import Grid from "../../../components/Grid";
import { HeaderText } from "../../../components/Text";
import { qaItems } from "./utils"

import "./QA.scss";
import { AnimateIn } from "../../../shared/utils";


const QA = () => {
  return (
    <AnimateIn>
      <section className="qa" id = "qa">
        <Grid>
          <div className="qa__wrapper">
            <HeaderText>q&a | Preguntas frecuentes</HeaderText>
            <div className="qa__accordion">
              <Accordion items={qaItems} />
            </div>
          </div>
        </Grid>
      </section>
    </AnimateIn>
  );
};

export default QA;
