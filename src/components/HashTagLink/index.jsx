import React, {useState} from "react";
import { Link } from "gatsby";
import Button from "../Button";
import Facebook from "../Icons/Facebook";
import Instragram from "../Icons/Instragram";
import Modal from "../Modal";
import Text, { HeaderText } from "../Text";

import "./HashTagLink.scss";

const HashTagLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  }

  return (
    <>
      <div className="hashTagLink">
        <div className="hashTagLink__wrapper">
          <a href="#" onClick = {(e) => {
            e.preventDefault();
            onToggleModal();
          }}>
            <Text>#TheHippieDuo</Text>
          </a>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose = {onToggleModal} className = "hashTagLink__modal">
        <div className = "hashTagLink__modalWrapper">
          <HeaderText className="hashTagLink__modalHeader">
            ¡OH, Me encontraste!
          </HeaderText>
          <p className="hashTagLink__modalParagraph">
            <Text>
              Quisimos dejarte esto por aquí para recordarte que la vida es {" "}
              <span className="bold">
                corta, única y tu eres el protagonista
              </span>{" "}
              de ella. Vive, llora, disfruta. Sé sincero contigo mismo.{" "}
              <span className="bold">Ama con locura</span>, y no te olvides de
              cuidar de aquellos seres que nos ayudan a cuidar de nuestro
              planeta o de hacernos la vida más divertida. <br /> <br /> En
              nuestra boda <span className="bold">hippie</span> quisimos
              recordar la vida revolucionaria que empezó en los{" "}
              <span className="bold">60s - 70s</span> y que sigue hoy en día,
              acercándonos a una vida más transparente y consciente, celebrando
              la paz y el amor entre nuestras almas y recordándoles a nuestros
              seres allegados que nunca se olviden de hacer lo que más aman.
              <br /> <br />
              Gracias por ser parte de nuestros{" "}
              <span className="bold">70 acompañantes</span> en nuestra boda
              setentera. <br /> <br />
              Aquí te dejamos algunos{" "}
              <span className="bold">gifs animados</span> que podrás encontrar
              en los <span className="bold">stories</span> para que compartas
              durante nuestro gran día en tus redes sociales con el hashtag de
              nuestra boda <Link className="link">#TheHippieDuo.</Link>
            </Text>
          </p>
          <div className="hashTagLink__modalButtonsContainer">
            <Button
              className="hashTagLink__button hashTagLink--instagram"
              size="small"
              isLink
              redirectTo="https://instagram.com"
            >
              <div className="hashTagLink__buttonWrapper">
                <Instragram />
                <Text>Instagram</Text>
              </div>
            </Button>
            <Button
              className="hashTagLink__button hashTagLink--facebook"
              size="small"
              isLink
              redirectTo="https://facebook.com"
            >
              <div className="hashTagLink__buttonWrapper">
                <Facebook />
                <Text>Facebook</Text>
              </div>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HashTagLink;
