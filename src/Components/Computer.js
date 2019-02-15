import React from "react";
import "../Assets/Styles/Computer.scss";
import ComputerSrc from "../Assets/Images/computer.png";
import Glitch from "../Assets/Images/glitch.gif";
import Player from "./Player";

class Computer extends React.Component {
  state = {
    glitchy: true
  };

  componentDidMount = () => {
    this.updateGlitchyPlease();
  };

  updateGlitchyPlease = () => {
    setTimeout(
      function() {
        this.setState({
          glitchy: false
        });
      }.bind(this),
      4000
    );
  };

  glitchyImage = () => {
    if(this.state.glitchy === true) {
      return (
        <img src={Glitch} alt="Computer glitch" />
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="Computer">
        <div className="Computer-screen Animation-flicker">
          {this.glitchyImage()}
          <Player className="Player" />
        </div>
        <img
          src={ComputerSrc}
          alt="Computer"
          className="Computer-image marginTmd"
        />
      </div>
    );
  }
}

export default Computer;
