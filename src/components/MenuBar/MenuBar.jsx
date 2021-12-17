import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Attendence from "../Attendence/Attendence";
import icHamburger from "./ic_hamburger.png";
import icClose from "./ic_close.png"
import icModify from "./ic_modify.png";
import icContact from "./ic_contact.png";
import "./menubar.css";

function MenuBar() {
  const [renderContact, setRenderContact] = useState(false);
  const [renderAttendence, setRenderAttendence] = useState(false);
  const [openAltMenu, setOpenAltMenu] = useState(false);

  const handleContactAction = () => {
    setRenderContact(!renderContact);
  };

  const handleModifyAction = () => {
    setRenderAttendence(true);
  };

  const openMenu = () => {
    setOpenAltMenu(!openAltMenu);
  };

  const AltMenu = () => {
    return (
      <>
        <div className="menubar-alt-menu">
          <button onClick={() => handleContactAction()}>Kontakt</button>
          <button onClick={() => handleModifyAction()}>Ändra Närvaro</button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="top-row">
        <img
          src={openAltMenu ? icClose : icHamburger}
          className={`top-icon ${openAltMenu ? 'icon-open' : 'icon-closed'}`}
          onClick={() => openMenu()}
          alt="Alt menu"
        />
        <div className={`${openAltMenu ? 'menubar-open' : 'menubar-closed'}`}><AltMenu /></div>
      </div>
      {renderContact && <Contact setRenderContact={setRenderContact} renderContact={renderContact} />}
      {renderAttendence && <Attendence setRenderAttendence={setRenderAttendence} renderAttendence={renderAttendence} />}
    </>
  );
}

export default MenuBar;
