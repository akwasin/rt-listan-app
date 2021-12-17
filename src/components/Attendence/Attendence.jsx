import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import SourceData from "../../data/Source.json";
import Crud, { write } from "../Crud/Crud";
import icClose from "./ic_close.png";
import "./attendence.css";
const fs = require('browserify-fs');

function Contact({ setRenderAttendence, renderAttendence }) {
  const [renderSuccess, setRenderSuccess] = useState(false);
  const [renderModal, setRenderModal] = useState(true);
  const family = {
    parent1: "",
    parent2: "",
  };

  const handleModal = () => {
    setRenderAttendence(!renderAttendence);
  };

  const RenderSuccessMessage = () => {
    return (
      <div className="attendence-response-message positive">
        <div className="contact-form">
          <h3>Din närvaro har ändrats</h3>
          <img
            src={icClose}
            // onClick={() => console.log("stänger response")}
            className="contact-form-close"
            alt="stäng ruta"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {renderModal && (
        <div className="modal">
          <div className="attendence-wrapper">
            {renderSuccess && <RenderSuccessMessage />}
            Här ändrar du din närvaro
            <img
              src={icClose}
              onClick={() => write()}
              // onClick={() => handleModal()}
              className="attendence-close"
              alt="stäng ruta"
            />
            <InputBox list={SourceData} />
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
