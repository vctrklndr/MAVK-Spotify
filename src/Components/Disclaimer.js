import React from 'react';
import "../Assets/Styles/Disclaimer.scss";

function Disclaimer(props) {
  return (
    <p className="Disclaimer">
      {props.text}
    </p>
  );
}

export default Disclaimer;