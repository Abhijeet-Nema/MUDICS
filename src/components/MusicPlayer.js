import { useState, memo, useEffect, useRef } from "react";
// import defSong from "../../public/music/kesariya.mp3";
// import defCover from "../../public/covers/kesariya.jpg";

const MusicPlayer = (props) => {
  // let src = "./music/kesariya.mp3";
  const {path, name, cover, artists} = props.playingSong;
  let volumeIcon = document.getElementById("volumeIcon");
  const [currentMusic, setCurrentMusic] = useState(new Audio(path));
  const [currentMusicInfo, setCurrentMusicInfo] = useState({});
  // const playRef = useRef(null)

  // Use space bar to play/pause
  // window.addEventListener("keypress", (e)=>{
  //   // console.log(e.keyCode);
  //   if(e.keyCode === 32){
  //     console.log(playRef.current);
  //     playRef.current.click()
  //   }
  // })

  useEffect(() => {
    setTimeout(() => {
      setCurrentMusicInfo({
        ...currentMusicInfo,
        currentTime: currentMusic.currentTime,
        duration: currentMusic.duration,
        volume: currentMusic.volume
      });
    }, 200);
  }, []);
  
  // Time Update event listener to update timing
  currentMusic.addEventListener("timeupdate", ()=>{
    // console.log("object");
    // Update progress bar & currentTime
    setCurrentMusicInfo({ ...currentMusicInfo, currentTime: currentMusic.currentTime});
  })

  // useEffect(() => {
  //   console.log(currentMusic);
  // }, [currentMusic.duration])

  // Changing the song properties : volumne and timimngs
  const changeMusicState = (e) => {
    if (e.target.name === "currentTime") {
      // Chnaging progress of the song
      setCurrentMusicInfo({
        ...currentMusicInfo,
        [e.target.name]: e.target.value / 100 * currentMusicInfo.duration
      });
      currentMusic.currentTime = e.target.value / 100 * currentMusicInfo.duration
    } else if (e.target.name === "volume") {
      setCurrentMusicInfo({
        ...currentMusicInfo,
        [e.target.name]: e.target.value / 100
      });
      currentMusic.volume = e.target.value / 100;
      volumeIcon = document.getElementById("volumeIcon");
      // If volume becomes 0, mute it else unmute
      if (e.target.value <= 0) {
        volumeIcon.classList.replace("fa-volume-up", "fa-volume-mute");
      } else {
        volumeIcon.classList.replace("fa-volume-mute", "fa-volume-up");
      }
    }
  };

  // Mute and unmute music
  const muteVolume = (e) => {
    // console.log(e.target.classList.contains("fa"));
    if (e.target.classList.contains("fa-volume-mute")) {
      e.target.classList.replace("fa-volume-mute", "fa-volume-up");
      currentMusic.volume = 0.6;
      setCurrentMusicInfo({
        ...currentMusicInfo,
        volume: 0.6
      });
    } else {
      e.target.classList.replace("fa-volume-up", "fa-volume-mute");
      currentMusic.volume = 0;
      setCurrentMusicInfo({
        ...currentMusicInfo,
        volume: 0
      });
    }
  };

  // Play and pause current song
  const controlPlaying = (e) => {
    // If it contains play, pause it and vice-versa
    if (e.target.classList.contains("fa-circle-play")) {
      // Playing
      // console.log(currentMusic);
      currentMusic.play();
      e.target.classList.replace("fa-circle-play", "fa-circle-pause");
    } else {
      // Pausing
      currentMusic.pause();
      e.target.classList.replace("fa-circle-pause", "fa-circle-play");
    }
  };

  return (
    <>
      {true && (
        <div className="player">
          <div className="playerItems" id="songInfo">
            <div className="coverAlbum">
              <img src={cover} alt="" />
            </div>
            <div className="songDetails">
              <marquee
                scrollamount="4"
                behavior="scroll"
                direction="left"
                className="songName"
              >
                {name}
              </marquee>
              <small className="Artist">{artists}</small>
            </div>
          </div>
          <div className="playerItems" id="playerControls">
            <div className="queueControls">
              <i id="previous" className="fa-solid fa-backward-step mx-2"></i>
              <i
                // ref={playRef}
                onClick={controlPlaying}
                id="play_pause"
                className="fa-solid fa-circle-play mx-2"
              ></i>
              <i id="next" className="fa-solid fa-forward-step mx-2"></i>
            </div>
            <div className="progressBar">
              <small className="mx-1 currentDuration">
                {parseInt(currentMusicInfo.currentTime / 60)}:
                {(parseInt(currentMusicInfo.currentTime % 60) > 9 ? "" : "0") +
                  parseInt(currentMusicInfo.currentTime % 60)}
              </small>
              <input
                type="range"
                name="currentTime"
                id="progressBarRange"
                min={0}
                max={100}
                onChange={changeMusicState}
                value={
                  !isNaN(currentMusicInfo.currentTime)
                    ? (currentMusicInfo.currentTime /
                        currentMusicInfo.duration) *
                      100
                    : 0
                }
              />{" "}
              <small className="mx-1 fullDuration">
                {parseInt(currentMusicInfo.duration / 60)}:
                {(parseInt(currentMusicInfo.duration % 60) > 10 ? "" : "0") +
                  parseInt(currentMusicInfo.duration % 60)}
              </small>
            </div>
          </div>
          <div className="playerItems" id="deviceControls">
            <i
              id="volumeIcon"
              onClick={muteVolume}
              className="fas fa-volume-up"
            ></i>
            <input
              className="mx-3"
              type="range"
              name="volume"
              id="volumeRange"
              min={0}
              max={100}
              value={
                !isNaN(currentMusicInfo.volume)
                  ? currentMusicInfo.volume * 100
                  : 0
              }
              onChange={changeMusicState}
            />
            <small style={{ width: "30px" }}>
              {Math.round(currentMusicInfo.volume * 100)}%
            </small>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(MusicPlayer);
