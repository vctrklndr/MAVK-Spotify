import React, { Component } from "react";
import "./Assets/Styles/App.scss";
import Datagrid from "./Components/Datagrid";
import Computer from "./Components/Computer";
import Noise from "./Components/Noise";
import Disclaimer from "./Components/Disclaimer";

class App extends Component {
  render() {
    return (
      <>
        <Noise />
        <div className="App">
          <h1 className="Heading Heading--h1 marginTlg textCenter">LASER RACER</h1>
          <h2 className="Heading Heading--h2 Heading--altColor textShadow">
            79 MINUTES OF HI-FI 80'S TRACKS
          </h2>
          <Computer />
          <Disclaimer />
        </div>
        <Datagrid />
      </>
    );
  }
}

export default App;
