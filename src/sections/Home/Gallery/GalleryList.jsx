import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Img from "../../../components/Img";
import Modal from "../../../components/Modal";

import "./Gallery.scss";
import GalleryItem from "./GalleryItem";
import ContentfulService from "../../../services/ContentfulService";
import { getGalleyItemByContentType } from "../../../shared/utils";

const items = [
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
    imgLabel: "video<br/>recepción",
    coverColor: "#DBAB9D",
    hoverLabel: "post-boda<br/>raww",
    description: "Recepción boda,<br/>Hotel El Embajador",
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
  const [entries, setEntries] = useState([]);

  const photoBoothEntry = getGalleyItemByContentType(entries, "photobooth");
  const noviosEntry = getGalleyItemByContentType(entries, "novios");
  const ceremoniaEntry = getGalleyItemByContentType(entries, "ceremonia");
  const photoBoothColletiveEntry = getGalleyItemByContentType(
    entries,
    "photoboothCollage"
  );
  const gettingReadyEntry = getGalleyItemByContentType(entries, "gettingReady");
  const detailsEntry = getGalleyItemByContentType(entries, "details");
  const recepcionBodaEntry = getGalleyItemByContentType(entries, "recepcionBoda");
  const fiesta70Entry = getGalleyItemByContentType(entries, "fiesta70");
  const firstLookEntry = getGalleyItemByContentType(entries, "firstLook");
  const detalleEspecialEntry = getGalleyItemByContentType(entries, "detalleEspecial");

  const theItems = [
    fiesta70Entry,
    recepcionBodaEntry,
    noviosEntry,
    ceremoniaEntry,
    photoBoothEntry,
    photoBoothColletiveEntry,
    gettingReadyEntry,
    detailsEntry,
    firstLookEntry,
    detalleEspecialEntry,
    ...items,
  ];

  const gridBreakpoints = {
    default: 4,
    1110: 3,
    700: 2,
    500: 1,
  };

  useEffect(async () => {
    try {
      const result = await ContentfulService.getAllEntries();
      setEntries(result);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <ul className="gallery__list">
        {theItems.map((item, index) => (
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
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setCurrentItem(null);
          setIsModalOpen(false);
        }}
      >
        <div className="gallery__modalInside">
          <Masonry className="gallery__grid" breakpointCols={gridBreakpoints}>
            {currentItem?.gallery?.images?.map((item, index) => {
              return (
                <div key={index} className="gallery__gridItem">
                  <div className="gallery__gridInnerItem" onClick = {() => window.open(item.image, '_blank')}>
                    <Img src={item.image} alt={item.label} loading="lazy" />
                  </div>
                </div>
              );
            })}
          </Masonry>
        </div>
      </Modal>
    </>
  );
};

export default GalleryList;
