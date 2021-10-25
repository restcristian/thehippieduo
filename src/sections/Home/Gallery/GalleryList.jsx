import React from "react";
import Text from "../../../components/Text";
import sessionImg from "../../../images/session.jpg";

import "./Gallery.scss";

const items = [
  {
    imgLabel: "Fotos de los<br/>novios",
    coverColor: "#605C36",
    coverImage: sessionImg,
    hoverLabel: "Fotos de los<br/>novios",
    description:
      "Fotos del compromiso,<br/>Jardín Botánico,<br/>PH. Eduardo Cipion",
  },
  {
    imgLabel: "ceremonia<br/>boda",
    coverColor: "#ab3f0e",
    hoverLabel: "post-boda<br/>raww",

    description: "Ceremonia boda,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "la fiesta<br/>de los 70s",
    coverColor: "#8a1619",
    hoverLabel: "post-boda<br/>raww",

    description: "Recepción boda,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "disfrutando<br/>el proceso",
    coverColor: "#455437",
    hoverLabel: "post-boda<br/>raww",

    description: "Preparativos gran día,<br/>Anywhere",
  },
  {
    imgLabel: "video<br/>ceremonia",
    coverColor: "#e3c69b",
    hoverLabel: "post-boda<br/>raww",

    description: "Ceremonia boda,<br/>Hotel El Embajador",
  },
  // the other 5
  {
    imgLabel: "detalles<br/>de la boda",
    coverColor: "#DBAB9D",
    hoverLabel: "post-boda<br/>raww",
    description: "Bellos recuerdos,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "getting<br/>ready",
    coverColor: "#605C36",
    hoverLabel: "post-boda<br/>raww",
    description: "El cortejo en pinta,<br/>Habitación Nupcial",
  },
  {
    imgLabel: "video<br/>recepción",
    coverColor: "#DBAB9D",
    hoverLabel: "post-boda<br/>raww",
    description: "Recepción boda,<br/>Hotel El Embajador",
  },
  {
    imgLabel: "first<br/>look",
    coverColor: "#8A1619",
    hoverLabel: "post-boda<br/>raww",
    description: "Primeras impresiones,<br/>Anywhere",
  },
  {
    imgLabel: "un detalle<br/>especial",
    coverColor: "#FEFFEF",
    hoverLabel: "post-boda<br/>raww",
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
                  ...(item?.coverImage && {
                    backgroundImage: `url(${item.coverImage})`,
                  }),
                }}
              >
                {" "}
              </div>
            )}
            <div className="gallery__imgLabelContainer">
              <Text className="gallery__imgLabel">
                <span dangerouslySetInnerHTML={{ __html: item.imgLabel }} />
              </Text>
              <Text
                className="gallery__imgLabel gallery__imgLabelHover"
                style={{
                  ...(item?.hoverLabelColor && {
                    color: item.hoverLabelColor,
                  }),
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: item.hoverLabel }} />
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
