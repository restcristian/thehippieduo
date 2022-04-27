import React from "react";
import Text from "../../../components/Text";
import "./Gallery.scss";

const GalleryItem = ({ item, onClick }) => {
  return (
    <li className="gallery__item">
      <div
        className={`gallery__imgContainer ${
          item?.coverImage ? "" : "gallery__imgContainer--noImg"
        }`}
        onClick = {onClick}
      >
        <div
          className="gallery__coverBG"
          style={{
            backgroundColor: item?.coverColor,
          }}
        ></div>
        {item?.coverImage && (
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
            <span dangerouslySetInnerHTML={{ __html: item?.imgLabel }} />
          </Text>
          <Text
            className="gallery__imgLabel gallery__imgLabelHover"
            style={{
              ...(item?.hoverLabelColor && {
                color: item.hoverLabelColor,
              }),
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: item?.hoverLabel }} />
          </Text>
        </div>
      </div>

      <Text className="gallery__description">
        <span dangerouslySetInnerHTML={{ __html: item?.description }}></span>
      </Text>
    </li>
  );
};

export default GalleryItem;
