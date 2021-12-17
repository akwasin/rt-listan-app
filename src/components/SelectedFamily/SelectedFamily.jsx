import React, { useState, useEffect } from "react";
import "./selectedfamily.css";
import icRemove from "./ic_remove.png";
import icHelp from "./ic_help.png";

function SelectedFamily({ payload, setSelectedFamily, setInputState, inputState }) {
  const [renderSelectedFamily, setRenderSelectedFamily] = useState(false);
  const [renderHelpModal, setRenderHelpModal] = useState(false);
  const [renderConfirmationModal, setRenderConfirmationModal] = useState(false);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (payload.parent) {
      setRenderSelectedFamily(true);
      setInputState(true);
      setSelection(payload);
    }
  });

  const handleRemoveFamily = () => {
    setRenderSelectedFamily(false);
    setInputState(false)
    setSelection({ family: "", parent: "" });
    setSelectedFamily({
      family: "",
      parent: "",
    });
  };

  const handleHelpAction = () => {
    setInputState(!inputState)
    setRenderHelpModal(!renderHelpModal);
  };

  const handleConfirmationAction = () => {
    setInputState(!inputState)
    setRenderConfirmationModal(!renderConfirmationModal);
  };

  const handleFinish = () => {
    handleRemoveFamily()
    window.location.reload();
  }

  return (
    <>
      {renderSelectedFamily && (
        <div className="selected-family-wrapper">
          {renderHelpModal &&
            <div className="selected-family-help">
              <img
                src={icRemove}
                onClick={handleHelpAction}
                className="selected-family-icon-remove"
                alt="stäng hjälp ruta"
              />
              <div>
                På grund av Covid är bara en förälder per hushåll tillåten. 
                I och med detta räknas hela familjen som närvarande.
              </div>
            </div>
          }
          {renderConfirmationModal &&
            <div className="selected-family-confirmation">
              <img
                src={icRemove}
                onClick={handleFinish}
                className="selected-family-icon-remove"
                alt="stäng bekräftelse ruta"
              />
              <div>
                Hej {selection.parent}. Din närvaro på kommande trädgårdsdag har blivit registrerad.
                Ingen annan från din familj behöver anmäla sig. Om något kommer upp och du behöver avregistrera din närvaro
                finns det en länk i övre högre hörnet.
              </div>
            </div>
          }
          {!renderConfirmationModal &&
          <>
            <div>
              Valt hushåll:{''}
              <div className='selected-family-row'>
                {payload.family}
                <img
                  src={icHelp}
                  onClick={handleHelpAction}
                  className='selected-family-icon-help'
                  alt='öppna hjälp ruta'
                />
              </div>
            </div>
            <div className='selected-family-row'>
              Vald förälder: {selection.parent}
              <img
                src={icRemove}
                onClick={handleRemoveFamily}
                className='selected-family-icon-remove'
                alt='ta bort förälder'
              />
            </div>
            <div>
            <button className='selected-family-button' onClick={handleConfirmationAction}>Bekräfta</button>
          </div>
          </>
          }
        </div>
      )}
    </>
  );
}

export default SelectedFamily;
