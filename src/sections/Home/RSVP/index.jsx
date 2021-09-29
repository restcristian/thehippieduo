import React, { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Input from "../../../components/Form/Input";
import Grid from "../../../components/Grid";
import Img from "../../../components/Img";
import Text, { HeaderText } from "../../../components/Text";
import rsvpImage from "../../../images/rsvp@2x.png";
import HippieDuoService from "../../../services/HippieDuoService";

import "./RSVP.scss";

const RSVP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [song, setSong] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = () =>
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await HippieDuoService.sendRSVP({ name, email, message, song });
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="rsvp">
      <Grid>
        <div className="rsvp__row">
          <div className="rsvp__infoCol">
            <HeaderText className="rsvp__title">RSVP</HeaderText>
            <Text className="rsvp__description">
              Confirma tu asistencia enviándonos un mensaje a nuestro correo.
              Esto nos ayudará enormemente con tu ubicación dentro del salón.
            </Text>
            <div className="rsvp__form">
              <form onSubmit={onSubmit}>
                <Input
                  placeholder="Nombre Completo"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <Input
                  placeholder="Correo electrónico"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                />
                <Input
                  placeholder="Mensaje especial"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <Input
                  placeholder="Recomiéndame una canción"
                  value={song}
                  onChange={(event) => setSong(event.target.value)}
                />
                <div className="rsvp__submitContainer">
                  <Button className="rsvp__submitButton" type="submit">
                    <Text>Enviar</Text>
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="rsvp__imgCol">
            <div className="rsvp__imgContainer">
              <Img src={rsvpImage} alt="rsvp" />
            </div>
          </div>
        </div>
      </Grid>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <div>
          <HeaderText>Gracias por confirmar</HeaderText>
          <p className="rsvp__modalParagraph">
            <Text>
              Tu mensaje se ha enviado a nuestra bandeja de entrada. Te
              estaremos actualizando sobre el proceso de la boda.
            </Text>
          </p>
          <div>
            <Button className="rsvp__modalBtn">
              <Text>Entendido</Text>
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default RSVP;
