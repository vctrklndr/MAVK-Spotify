import React from "react";

function Player(props) {
  return (
    <iframe
      title="Player"
      src="https://open.spotify.com/embed/user/vict%25C3%25B8r/playlist/5vvVvlGahx4z1nGE1ZNBV3"
      className={props.className}
      // width={props.width}
      // height={props.height}
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  );
}

export default Player;
