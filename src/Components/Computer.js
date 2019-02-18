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
      4500
    );
  };

  renderComputerScreen = () => {
    if (this.state.glitchy === true) {
      return (
        <img className="Computer-glitch" src={Glitch} alt="Computer glitch" />
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="Computer">
        <div className="Computer-screen">
          {this.renderComputerScreen()}
          <Player
            className="Player"
            src="https://open.spotify.com/embed/user/vict%25C3%25B8r/playlist/5vvVvlGahx4z1nGE1ZNBV3∏"
          />
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
