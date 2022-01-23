import React, { useEffect, useRef } from "react";

import Text, { HeaderText } from "../../../components/Text";
import "./Location.scss";
import { AnimateIn, isBrowser } from "../../../shared/utils";

const Location = () => {
  const mapRef = useRef(null);

  const renderMarker = () =>
    `<div className = "location__marker">

    </div>`;
  useEffect(() => {
    if (isBrowser()) {
      // This dynamic importing should be illegal, but it works
      const { map, tileLayer, marker, divIcon } = require("leaflet");
      const myMap = map(mapRef.current).setView([18.454764, -69.933219], 80);

      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }).addTo(myMap);

      marker([18.454764, -69.933219], {
        icon: divIcon({ className: "location__marker", html: renderMarker() }),
      })
        .addTo(myMap)
        .bindPopup("<b>Hotel Embajador</b></br>")
        .openPopup();
    }
  }, []);

  return (
    <AnimateIn>
      <section className="location" id = "location">
        <div className="location__row">
          {isBrowser() && <div ref={mapRef} className="location__map"></div>}
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
    </AnimateIn>
  );
};

export default Location;
