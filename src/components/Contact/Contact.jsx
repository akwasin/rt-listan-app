import React, { useState } from "react";
import icClose from "./ic_close.png";
import { send } from "emailjs-com";
import "./contact.css";

function Contact({ setRenderContact, renderContact }) {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Utvecklaren",
    message: "",
    reply_to: "",
  });
  const [renderModal, setRenderModal] = useState(true);
  const [renderError, setRenderError] = useState(false);
  const [renderSuccess, setRenderSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_uh6bmnd",
      "template_up32xxa",
      toSend,
      "user_81rVnxh8jtzDqjjzQQLc0"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setRenderSuccess(true);
        setRenderContact(!renderContact);
        setToSend({
          from_name: "",
          to_name: "Utvecklaren",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setRenderError(true);
        setRenderContact(!renderContact);
      });
  };

  const handleModal = (response) => {
    switch (response) {
      case "positive":
        setRenderSuccess(!renderSuccess);
        setRenderContact(!renderContact);
        break;
      case "negative":
        setRenderError(!renderError);
        setRenderContact(!renderContact);
        break;
      case "contact":
        setRenderModal(!renderModal);
        setRenderContact(!renderContact);
        break;
      default:
        setRenderModal(!renderModal);
        setRenderContact(!renderContact);
    }
    setRenderModal(!renderModal);
  };

  const RenderSuccessMessage = () => {
    return (
      <div className="contact-response-message positive">
        <h3>Meddelandet har skickats</h3>
        <img
          src={icClose}
          onClick={() => handleModal("positive")}
          className="contact-form-close"
          alt="stäng ruta"
        />
      </div>
    );
  };

  const RenderErrorMessage = () => {
    return (
      <div className="contact-response-message negative">
        <h3>Något gick fel, prova igen</h3>
        <img
          src={icClose}
          onClick={() => handleModal("negative")}
          className="contact-form-close"
          alt="stäng error ruta"
        />
      </div>
    );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-wrapper">
      {renderModal && (
        <div className="modal">
          {renderSuccess && <RenderSuccessMessage />}
          {renderError && <RenderErrorMessage />}
          {renderContact && (
            <div className="contact-form">
              <img
                src={icClose}
                onClick={() => handleModal("contact")}
                className="contact-form-close"
                alt="stäng ruta"
              />
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Ditt namn"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="message"
                  placeholder="Meddelande"
                  value={toSend.message}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="reply_to"
                  placeholder="Din email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Contact;
