import React from "react";

class ComputerText extends React.Component {  
  render() {
    const Border = {
      borderColor: '#edfffe',
      borderStyle: 'double',
      padding: '5px 10px',
      textAlign: 'center',
    }
    return (
      // className="Animation-flicker"
      <div  style={Border}>
        <p>
          Installing Spotify...
        </p>
        <p>C:\SPOTIFY\</p>
      </div>
    );
  }
}

export default ComputerText;
