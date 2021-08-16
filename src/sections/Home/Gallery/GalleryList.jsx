import React from "react";
import Text from "../../../components/Text";

import "./Gallery.scss";

const items = [
  {
    imgLabel: "Fotos de los novios",
  },
  {
    imgLabel: "Fotos de los novios",
  },
  {
    imgLabel: "Fotos de los novios",
  },
  {
    imgLabel: "Fotos de los novios",
  },
  {
    imgLabel: "Fotos de los novios",
  },
];

const GalleryList = () => {
  return (
    <ul className="gallery__list">
      {items.map((item, index) => (
        <li className="gallery__item" key={`galley__item-${index}`}>
          <div className="gallery__imgContainer">
            <div className="gallery__imgLabelContainer">
              <Text className="gallery__imgLabel">{item.imgLabel}</Text>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GalleryList;
