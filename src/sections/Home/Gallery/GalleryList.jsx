import React from "react";
import Text from "../../../components/Text";
import sessionImg from "../../../images/session.jpg";

import "./Gallery.scss";

const items = [
  {
    imgLabel: "Fotos de los novios",
    coverColor: "#605C36",
    coverImage: sessionImg,
    hoverLabel: "Fotos de los novios",
    description:
      "Fotos del compromiso,<br/>Jardín Botánico,<br/>PH. Eduardo Cipion",
  },
  {
    imgLabel: "ceremonia boda",
    coverColor: "#ab3f0e",
    hoverLabel: "post-boda raww",

    description: "Ceremonia boda,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "la fiesta de los 70s",
    coverColor: "#8a1619",
    hoverLabel: "post-boda raww",

    description: "Recepción boda,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "disfrutando el proceso",
    coverColor: "#455437",
    hoverLabel: "post-boda raww",

    description: "Preparativos gran día,<br/>Anywhere",
  },
  {
    imgLabel: "video ceremonia",
    coverColor: "#e3c69b",
    hoverLabel: "post-boda raww",

    description: "Ceremonia boda,<br/>Hotel El Embajador",
  },
  // the other 5
  {
    imgLabel: "Fotos de los novios",
    coverColor: "#DBAB9D",
    hoverLabel: "post-boda raww",
    description: "Bellos recuerdos,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "ceremonia boda",
    coverColor: "#605C36",
    hoverLabel: "post-boda raww",
    description: "El cortejo en pinta,<br/>Habitación Nupcial",
  },
  {
    imgLabel: "la fiesta de los 70s",
    coverColor: "#DBAB9D",
    hoverLabel: "post-boda raww",
    description: "Recepción boda,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "disfrutando el proceso",
    coverColor: "#8A1619",
    hoverLabel: "post-boda raww",
    description: "Primeras impresiones,<br/>Anywhere",
  },
  {
    imgLabel: "video ceremonia",
    coverColor: "#FEFFEF",
    hoverLabel: "post-boda raww",
    hoverLabelColor: "#605C36",
    description: "El detalle especial,<br/>Ceremonia",
  },
];

const GalleryList = () => {
  return (
    <ul className="gallery__list">
      {items.map((item, index) => (
        <li className="gallery__item" key={`galley__item-${index}`}>
          <div
            className={`gallery__imgContainer ${
              item.coverImage ? "" : "gallery__imgContainer--noImg"
            }`}
          >
            <div
              className="gallery__coverBG"
              style={{
                backgroundColor: item.coverColor,
              }}
            ></div>
            {item.coverImage && (
              <div
                className="gallery__img"
                style={{
                  ...(item?.coverImage && { backgroundImage: `url(${item.coverImage})` }),
                }}
              >
                {" "}
              </div>
            )}
            <div className="gallery__imgLabelContainer">
              <Text className="gallery__imgLabel">{item.imgLabel}</Text>
              <Text
                className="gallery__imgLabel gallery__imgLabelHover"
                style={{
                  ...(item?.hoverLabelColor && {
                    color: item.hoverLabelColor,
                  }),
                }}
              >
                {item.hoverLabel}
              </Text>
            </div>
          </div>

          <Text className="gallery__description">
            <span
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></span>
          </Text>
        </li>
      ))}
    </ul>
  );
};

export default GalleryList;
