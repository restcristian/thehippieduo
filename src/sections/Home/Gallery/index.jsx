import React from "react";
import Grid from "../../../components/Grid";
import { HeaderText } from "../../../components/Text";
import "./Gallery.scss";
import GalleryList from "./GalleryList";

const Gallery = () => {
  return (
    <section className="gallery">
      <Grid>
        <div className="gallery__wrapper">
          <div className="gallery__headerTextContainer">
            <HeaderText>Galería</HeaderText>
          </div>
          <GalleryList />
        </div>
      </Grid>
    </section>
  );
};

export default Gallery;
