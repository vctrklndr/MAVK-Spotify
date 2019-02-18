import React from "react";

function Player(props) {
  return (
    <iframe
      title="Player"
      src={props.src}
      className={props.className}
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  );
}

export default Player;
