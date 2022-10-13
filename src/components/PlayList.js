import React, { useEffect, useState } from "react";
import SongItem from "./SongItem";

const PlayList = (props) => {
  const { category } = props;
  const [list, setList] = useState(null);
  useEffect(() => {
    fetch(`./music/${category}/${category}.json`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setList(result.songs);
      });
  }, []);

  return (
    <>
      {list && (
        <div className="playlist my-4">
          <h4>Result playlist for "{category}" mood</h4>
          {list.map((e,i)=>{
            return <SongItem key={i} song={e}/>
          })}
        </div>
      )}
    </>
  );
};

export default PlayList;
