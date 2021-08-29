import React, { useEffect, useRef } from "react";
import { map, tileLayer, marker } from "leaflet";
import "./Location.scss";

const Location = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    const myMap = map(mapRef.current).setView([18.454764, -69.933219], 80);

    tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 17,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    ).addTo(myMap);

    marker([18.454764, -69.933219])
      .addTo(myMap)
      .bindPopup("<b>Hotel Embajador</b></br>")
      .openPopup();
  }, []);

  return (
    <section className="location">
      <div className="location__row">
        <div ref={mapRef} className="location__map"></div>
      </div>
    </section>
  );
};

export default Location;
