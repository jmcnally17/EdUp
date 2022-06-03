import React from "react";

import "./Infobar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
  </div>
);

export default InfoBar;
