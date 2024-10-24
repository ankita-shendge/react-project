import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const TrackDetails = ({ track }) => {
  // Ensure track is not empty

  if (!track || Object.keys(track).length === 0) {
    return;
  }

  return (
    <>
      <div
        className="card rounded bg-dark text-light"
        style={{ width: "18rem" }}
      >
        <div className="card-body text-center">
          {/* Render album image if it exists */}
          {track.album?.images?.length > 0 && (
            <img
              src={track.album.images[0].url}
              alt={track.album.name}
              className="img-fluid mt-4 rounded"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          )}

          <h5 className="card-title pt-4">{track.name}</h5>

          {/* Ensure artists and album exist before accessing their properties */}
          {track.artists && track.artists.length > 0 && (
            <p className="card-text p-2 m-0">Artist: {track.artists[0].name}</p>
          )}

          {track.album && (
            <p className="card-text p-0">Album: {track.album.name}</p>
          )}

          <button className=" bg-transparent text-light border-0 ">
            <FaRegPlayCircle className="fs-1 p-0" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TrackDetails;
