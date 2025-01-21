import React, { useState } from "react";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { IoIosShuffle } from "react-icons/io";
import { TbRepeat } from "react-icons/tb";
import { MdOutlineLyrics, MdOutlineCastConnected } from "react-icons/md";
import { PiQueueDuotone } from "react-icons/pi";
import { IoIosVolumeHigh } from "react-icons/io";
import { MdOutlineFullscreen } from "react-icons/md";



const TrackDetails = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const token = window.localStorage.getItem("access_token");
  const deviceId = window.localStorage.getItem("spotify_device_id");

  if (!track || Object.keys(track).length === 0) {
    return null;
  }

  const handlePlayPause = async (trackUri) => {
    if (!deviceId) {
      console.error("Device ID is not available.");
      return;
    }

    try {
      const response = isPlaying
        ? await fetch(`https://api.spotify.com/v1/me/player/pause`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        : await fetch(
            `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
            {
              method: "PUT",
              body: JSON.stringify({
                uris: [trackUri],
              }),
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );


      if (response.status === 204 || response.status === 200) {
        setIsPlaying(!isPlaying); // Toggle the playback state
        console.log(
          `${isPlaying ? "Playback paused" : "Playback started"} successfully.`,
          track.album.name
        );
      } else if(response.status === 403) {
        window.alert("You need a Spotify Premium subscription to play this song." , response);
      }
    } catch (error) {
      console.error("Error playing/pausing track:", error);
    }
  };

  return (
<div className="bg-dark text-light py-3">
  <div className="container-fluid">
    <div className="row align-items-center text-center">
      {/* <!-- Album Art and Track Info --> */}
      <div className="col-4 d-flex align-items-center">
        {track.album?.images?.length > 0 && (
          <img
            src={track.album.images[0].url}
            alt={track.album.name}
            className="img-fluid rounded"
            style={{ width: "60px", height: "60px" }}
          />
        )}
        <div className="ms-3">
          <p className="mb-0 fw-bold">{track.name}</p>
          {track.artists && track.artists.length > 0 && (
            <p className="mb-0 text-white">{track.artists[0].name}</p>
          )}
        </div>
      </div>

      {/* <!-- Playback Controls --> */}
      <div className="col-4 d-flex justify-content-center align-items-center">
        <IoIosShuffle className="fs-4 me-3 text-white" />
        <BiSkipPrevious className="fs-4 me-3 text-white" />
        <button
          className="bg-transparent text-light border-0 p-0"
          onClick={() => handlePlayPause(track.uri)}
        >
          {isPlaying ? (
            <FaPauseCircle className="fs-2 text-light" />
          ) : (
            <FaPlayCircle className="fs-2 text-light" />
          )}
        </button>
        <BiSkipNext className="fs-4 ms-3 me-3 text-white" />
        <TbRepeat className="fs-5 text-white" />
      </div>

      {/* <!-- Additional Controls --> */}
      <div className="col-4 d-flex justify-content-end align-items-center ">
        <MdOutlineLyrics className="fs-4 me-3 text-white" />
        <PiQueueDuotone className="fs-4 me-3 text-white" />
        <MdOutlineCastConnected className="fs-4 me-3 text-white" />
        <IoIosVolumeHigh className="fs-4 me-3 text-white" />
        <MdOutlineFullscreen className="fs-4 text-white" />
      </div>
    </div>
  </div>
</div>

  );
};

export default TrackDetails;
