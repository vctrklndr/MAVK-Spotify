import React from "react";
import "./Assets/Styles/App.scss";
import Noise from "./Components/Noise";
import Computer from "./Components/Computer";
import Disclaimer from "./Components/Disclaimer";
import Datagrid from "./Components/Datagrid";

class App extends React.Component {
  render() {
    return (
      <>
        <Noise />
        <div className="App">
          <h1 className="Heading Heading--h1 textShadow">LASER RACER</h1>
          <h2 className="Heading Heading--h2 Heading--altColor textShadow">
            79 MINUTES OF HI-FI 80'S TRACKS
          </h2>
          <Computer />
          <Disclaimer text="Responsive design? There were no smartphones back in the 80's!" />
        </div>
        <Datagrid />
      </>
    );
  }
}

export default App;
