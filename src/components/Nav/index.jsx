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
    <nav className={`nav ${isNavigationOpen ? "nav--open" : ""}`}>
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
            <svg viewBox="0 0 311 311.07733" xmlns="http://www.w3.org/2000/svg">
              <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"></path>
              <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"></path>
            </svg>
          </button>
        </div>
      </Grid>
    </nav>
  );
};

export default Nav;
