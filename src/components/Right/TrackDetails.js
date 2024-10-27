import React, { useState } from "react";
import { FaRegPlayCircle, FaPauseCircle } from "react-icons/fa";

const TrackDetails = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track playback status
  const token = window.localStorage.getItem("access_token");
  const deviceId = window.localStorage.getItem("spotify_device_id");

  // Ensure track is not empty
  if (!track || Object.keys(track).length === 0) {
    return null;
  }

  // Function to handle song playback
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
      } else {
        console.error("Playback failed.", response);
      }
    } catch (error) {
      console.error("Error playing/pausing track:", error);
    }
  };

  return (
    <div className="card rounded bg-dark text-light" style={{ width: "18rem" }}>
      <div className="card-body text-center">
        {track.album?.images?.length > 0 && (
          <img
            src={track.album.images[0].url}
            alt={track.album.name}
            className="img-fluid mt-4 rounded"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        )}

        <h5 className="card-title pt-4">{track.name}</h5>

        {track.artists && track.artists.length > 0 && (
          <p className="card-text p-2 m-0">Artist: {track.artists[0].name}</p>
        )}

        {track.album && (
          <p className="card-text p-0">Album: {track.album.name}</p>
        )}

        {/* Play/Pause button */}
        <button
          className="bg-transparent text-light border-0"
          onClick={() => handlePlayPause(track.uri)} // Call handlePlayPause
        >
          {isPlaying ? (
            <FaPauseCircle className="fs-1 p-0" />
          ) : (
            <FaRegPlayCircle className="fs-1 p-0" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TrackDetails;
