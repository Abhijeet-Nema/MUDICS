import React from "react";
import defCover from "../covers/kesariya.jpg";

const MusicPlayer = () => {
  return (
    <div className="player">
      <div className="playerItems" id="songInfo">
        <div className="coverAlbum">
          <img src={defCover} alt="" />
        </div>
        <div className="songDetails">
          <marquee
            scrollamount="4"
            behavior="scroll"
            direction="left"
            className="songName"
          >
            Kesariya (Brahmastra)
          </marquee>
          <small className="Artist">Arijit Singh, Pritam</small>
        </div>
      </div>
      <div className="playerItems" id="playerControls">
        <div className="queueControls">
          <i id="previous" className="fa-solid fa-backward-step mx-2"></i>
          <i id="play_pause" className="fa-solid fa-circle-play mx-2"></i>
          <i id="next" className="fa-solid fa-forward-step mx-2"></i>
        </div>
        <div className="progressBar">
          <small className="mx-1">2:39</small>
          <input
            type="range"
            name="progressBarRange"
            id="progressBarRange"
            min={0}
            max={100}
          />{" "}
          <small className="mx-1">5:33</small>
        </div>
      </div>
      <div className="playerItems" id="deviceControls">
        <i className="fas fa-volume-up"></i>
        <input
          className="mx-3"
          type="range"
          name="volumeRange"
          id="volumeRange"
          min={0}
          max={100}
        />{" "}
      </div>
    </div>
  );
};

export default MusicPlayer;
