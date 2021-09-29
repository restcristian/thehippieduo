import React from "react";
import Text from "../Text";

import "./HashTagLink.scss";

const HashTagLink = () => {
  return (
    <div className="hashTagLink">
      <div className="hashTagLink__wrapper">
        <a href="#">
          <Text>#TheHippieDuo</Text>
        </a>
      </div>
    </div>
  );
};

export default HashTagLink;
