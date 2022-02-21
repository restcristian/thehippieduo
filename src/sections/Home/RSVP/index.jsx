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
import { AnimateIn } from "../../../shared/utils";

const RSVP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [song, setSong] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isActive, _] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = () =>
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasError(false);
    try {
      if (isActive) {
        await HippieDuoService.sendRSVP({ name, email, message, song });
        setName("");
        setEmail("");
        setMessage("");
        setSong("");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
    setIsLoading(false);
  };

  return (
    <AnimateIn>
      <section className="rsvp" id="rsvp">
        <Grid>
          <div className="rsvp__row">
            <div className="rsvp__infoCol">
              <HeaderText className="rsvp__title">RSVP</HeaderText>
              {isActive ? (
                <Text className="rsvp__description">
                  Confirma tu asistencia enviándonos un mensaje a nuestro
                  correo. Esto nos ayudará enormemente con tu ubicación dentro
                  del salón.
                </Text>
              ) : (
                <Text className="rsvp__description">
                  Gracias a todos por confirmar su asistencia con tiempo. El
                  tiempo para reservar los asientos ya ha finalizado y sus
                  lugares están siendo asignados dentro del salón por el staff
                  de la boda.
                </Text>
              )}
              <div className="rsvp__form">
                <form onSubmit={onSubmit}>
                  <Input
                    placeholder="Nombre Completo"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    disabled={!isActive}
                  />
                  <Input
                    placeholder="Correo electrónico"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    disabled={!isActive}
                  />
                  <Input
                    placeholder="Mensaje especial"
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    disabled={!isActive}
                  />
                  <Input
                    placeholder="Recomiéndame una canción"
                    value={song}
                    onChange={(event) => setSong(event.target.value)}
                    disabled={!isActive}
                  />
                  {hasError && (
                    <div className="rsvp__error">
                      <span>Error! Su correo no pudo ser enviado.</span>
                    </div>
                  )}
                  {isActive && (
                    <div className="rsvp__submitContainer">
                      <Button
                        className="rsvp__submitButton"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Text fontWeight="bold">Enviando...</Text>
                        ) : (
                          <Text fontWeight="bold">Envía</Text>
                        )}
                      </Button>
                    </div>
                  )}
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
            <HeaderText className="rsvp__modalHeader">
              Gracias por confirmar
            </HeaderText>
            <p className="rsvp__modalParagraph">
              <Text>
                Tu mensaje se ha enviado a nuestra bandeja de entrada. Deberías
                recibir un correo confirmando tu respuesta en unos minutos. Si
                no lo ves, por favor verifica tu bandeja de Spam. Por esa vía te
                estaremos actualizando sobre el proceso de la boda.
              </Text>
            </p>
            <div>
              <Button className="rsvp__modalBtn" onClick={onModalClose}>
                <Text>Entendido</Text>
              </Button>
            </div>
          </div>
        </Modal>
      </section>
    </AnimateIn>
  );
};

export default RSVP;
