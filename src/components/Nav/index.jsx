import React from "react";
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
  return (
    <nav className="nav">
      <Grid>
        <ul className="nav__list">
          {items.map((item, index) => (
            <li className="nav__list-item" key={`{nav__list-item-${index}}`}>
              <a href={item.link}>
                <Text fontWeight="bold">{item.label}</Text>
              </a>
            </li>
          ))}
          <li className="nav__list-item">
            <Button size="normal">
              <Text>rsvp</Text>
            </Button>
          </li>
        </ul>
      </Grid>
    </nav>
  );
};

export default Nav;
