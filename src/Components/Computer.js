import React from "react";
import "../Assets/Styles/Computer.scss";
import ComputerSrc from "../Assets/Images/computer-2.png";
import Player from "./Player";

function Computer() {
  return (
    <div className="Computer">
      <div className="Computer-screen Animation-flicker">
        <Player width="327" height="241" />
      </div>
      <img
        src={ComputerSrc}
        alt="Computer"
        className="Computer-image marginTmd"
      />
    </div>
  );
}

export default Computer;
