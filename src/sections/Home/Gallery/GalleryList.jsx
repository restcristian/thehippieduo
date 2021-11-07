import React, { useState } from "react";
import Img from "../../../components/Img";
import Modal from "../../../components/Modal";
import sessionImg from "../../../images/session.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Gallery.scss";
import GalleryItem from "./GalleryItem";
import andryscristian1 from "../../../images/novios/Andrys&Cristian1.jpg";
import andryscristian2 from "../../../images/novios/Andrys&Cristian2.jpg";
import andryscristian3 from "../../../images/novios/Andrys&Cristian3.jpg";
import andryscristian4 from "../../../images/novios/Andrys&Cristian4.jpg";
import andryscristian6 from "../../../images/novios/Andrys&Cristian6.jpg";
import andryscristian7 from "../../../images/novios/Andrys&Cristian7.jpg";
import andryscristian8 from "../../../images/novios/Andrys&Cristian8.jpg";
import andryscristian9 from "../../../images/novios/Andrys&Cristian9.jpg";
import andryscristian10 from "../../../images/novios/Andrys&Cristian10.jpg";

const items = [
  {
    imgLabel: "Fotos de los<br/>novios",
    coverColor: "#605C36",
    coverImage: sessionImg,
    hoverLabel: "Fotos de los<br/>novios",
    description:
      "Fotos del compromiso,<br/>Jardín Botánico,<br/>PH. Eduardo Cipion",
    gallery: {
      images: [
        {
          label: 'image 1',
          image: andryscristian1,
        },
        {
          label: 'image 2',
          image: andryscristian2,
        },
        {
          label: 'image 3',
          image: andryscristian3
        },
        {
          label: 'image 4',
          image: andryscristian4
        }, 
        {
          label: 'image 6',
          image: andryscristian6
        },
        {
          label: 'image 7',
          image: andryscristian7
        }, 
        {
          label: 'image 8',
          image: andryscristian8
        },
        {
          label: 'image 9',
          image: andryscristian9
        },
        {
          label: 'image 10',
          image: andryscristian10
        }
      ],
    },
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

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const GalleryList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  return (
    <>
      <ul className="gallery__list">
        {items.map((item, index) => (
          <GalleryItem
            key={`gallery__item-${index}`}
            item={item}
            onClick={() => {
              if (item.gallery) {
                setCurrentItem(item);
                setIsModalOpen(true);
              }
            }}
          />
        ))}
      </ul>
      <Modal isOpen={isModalOpen} onClose = {() => {
        setCurrentItem(null);
        setIsModalOpen(false);
      }}>
        <div className="gallery__slider">
          <Slider {...settings}>
            {currentItem?.gallery?.images?.map((item, index) => {
              return (
                <div key={index}>
                  <Img src={item.image} alt = {item.label} />
                </div>
              );
            })}
          </Slider>
        </div>
      </Modal>
    </>
  );
};

export default GalleryList;
