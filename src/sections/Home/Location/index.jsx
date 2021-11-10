import React from "react";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css"
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Text, { HeaderText } from "../../../components/Text";
import "./Location.scss";
import { isBrowser } from "../../../shared/utils";

const Location = () => {

  const renderMarker = () => (
    `<div className = "location__marker">

    </div>`
  )

  return (
    <section className="location">
      <div className="location__row">
        {isBrowser() && (
          <MapContainer className = "location__map" center = {{lat: 18.454764, lng: -69.933219 }} zoom= {80} >
            <TileLayer 
              url = "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
              maxZoom={17}
              />
            <Marker position = {[18.454764, -69.933219]} icon ={divIcon({className: 'location__marker', html: renderMarker() })}>
              <Popup>
                <b>Hotel Embajador</b>
              </Popup>
            </Marker>
          </MapContainer>
        )}
        <div className="location__infoCol">
          <HeaderText className="location__title">Ubicación</HeaderText>
          <Text className="location__description">
            Hotel El Embajador,
            <br />A Royal Hideaway
          </Text>
          <address className="location__address">
            <Text>
              Av Sarasota, No. 65,
              <br />
              Santo Domingo
              <br />
              República Dominicana
            </Text>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Location;
