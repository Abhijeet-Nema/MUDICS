import React from "react";

const SongItem = (props) => {
  let target;
  const playClickedSong = (e) => {
    target = e.target;
    if (!e.target.classList.contains("songItem")) {
      target = e.target.parentNode;
    }
    target = target.children[3];
    // Change to pause if play else play
    let playIcons = document.getElementsByClassName("songItemPlaybutton");
    Array.from(playIcons).forEach(ele=>{
      ele.classList.add("fa-play");
      ele.classList.remove("fa-pause");
    })
    target.classList.remove("fa-play");
    target.classList.add("fa-pause");
  };
  const { song } = props;
  return (
    <div onClick={playClickedSong} className="songItem my-3">
      <img
        src="./covers/kesariya.jpg"
        style={{ borderRadius: "3px" }}
        height="55px"
        alt=""
        className="songItemCover"
      />
      <div className="songItemName">{song.name}</div>
      <div className="songItemDuration">{song.duration}</div>
      <i className="fa-solid fa-play songItemPlaybutton"></i>
    </div>
  );
};

export default SongItem;
