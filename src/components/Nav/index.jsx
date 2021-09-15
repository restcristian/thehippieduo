import React, { useState } from "react";
import Button from "../Button";
import Grid from "../Grid";
import Text from "../Text";
import "./Nav.scss";

const items = [
  {
    label: "Save the Date",
    link: "#",
  },
  {
    label: "Regalos",
    link: "#",
  },
  {
    label: "Q&A",
    link: "#",
  },
  {
    label: "Galería",
    link: "#",
  },
  {
    label: "Ubicación",
    link: "#",
  },
];
const Nav = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <nav className={`nav ${isNavigationOpen ? 'nav--open': ''}`}>
      <Grid>
        <div className="nav__wrapper">
          <ul className="nav__list">
            {items.map((item, index) => (
              <li className="nav__list-item" key={`{nav__list-item-${index}}`}>
                <a href={item.link}>
                  <Text fontWeight="bold">{item.label}</Text>
                </a>
              </li>
            ))}
            <li className="nav__list-item">
              <Button size="normal" className="nav__rsvpButton">
                <Text>rsvp</Text>
              </Button>
            </li>
          </ul>
          <button
            className="nav__toggle"
            onClick={() =>
              setIsNavigationOpen(
                (prevIsNavigationOpen) => !prevIsNavigationOpen
              )
            }
          >
            <span>toggle</span>
          </button>
        </div>
      </Grid>
    </nav>
  );
};

export default Nav;
