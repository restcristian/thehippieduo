import React, { useState } from "react";
import Text from "../../components/Text";

import "./Accordion.scss";

const Accordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const onItemClick = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <ul className="accordion">
      {items.map(({ question, answer }, index) => (
        <li
          key={`question-${index}`}
          className={`accordion__listItem ${openItem === index ? "open" : ""}`}
          onClick={() => onItemClick(index)}
        >
          <div className="accordion__question">
            <Text>{question}</Text>
          </div>
          <div className="accordion__answer">
              {typeof answer === "string" ? (
                <Text> <div dangerouslySetInnerHTML = {{__html: answer}}></div></Text>
              ): answer}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
