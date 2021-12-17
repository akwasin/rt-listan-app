import React, { useState, useEffect } from "react";
import "./selectedfamily.css";
// import icRemove from "./ic_remove.png";
// import icHelp from "./ic_help.png";
// import icModify from "./ic_help.png";

function UpdateFamily({ payload }) {
  const [renderThis, setRenderThis] = useState(false);

  useEffect(() => {
    if (payload) {
      console.log("runner");
    }
  });

  const handleRemoveFamily = () => {
    console.log("handleRemoveFamily");
  };

  return (
    <>
      <div>
        Valt hushåll:{""}
        <div className="selected-family-row">
          {/* {payload.family} */}
        </div>
      </div>
      <div className="selected-family-row">
        {/* Vald förälder: {selection.parent} */}
      </div>
      <div>
        <button
          className="selected-family-button"
          onClick={handleRemoveFamily}
        >
          Bekräfta frånvaro
        </button>
      </div>
    </>
  );
}

export default UpdateFamily;
