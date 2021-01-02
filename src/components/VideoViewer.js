import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { DataContext } from "../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";

export default function VideoViewer() {
  const id = useLocation().pathname.split("/").pop();
  const player = useRef(null);
  const [videoData, setVideoData] = useState(null);
  const mockData = useContext(DataContext);

  useEffect(() => {
    if (videoData === null) {
      const data = mockData.filter((obj) => obj.id === Number(id));
      setVideoData(data[0]);
    }
  }, [videoData]);

  function seekToTimestamp(seconds) {
    return player.current.seekTo(seconds);
  }

  function convertSeconds(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return minutes === 0 && seconds === 0 ? `start` : `${minutes}m ${seconds}s`;
  }

  if (!videoData) {
    return <p>loading...</p>;
  } else
    return (
      <>
        <h1>
          {videoData.title} - {videoData.lecturer}
        </h1>
        <p>
          <strong>video id:</strong> {id}
        </p>
        <p>
          <strong>description:</strong> {videoData.description}
        </p>
        <ReactPlayer ref={player} url={videoData.url} controls={true} />
        {videoData.timestamps.map((value) => {
          return (
            <div key={uuidv4()}>
              <button onClick={() => seekToTimestamp(value.time)}>
                {`${convertSeconds(value.time)} - ${value.timedesc}`}
              </button>
              <br />
            </div>
          );
        })}
      </>
    );
}
