import React, { useContext, useEffect, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import "./BrowseAll.css";

import { TrackContext } from "../TrackContext";

function ArtistsList() {
  const token = window.localStorage.getItem("access_token");
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [artistTracks, setArtistTracks] = useState([]);

  const { setCurrentTrack } = useContext(TrackContext);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/top/artists?limit=6",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch artist data");
        }

        const data = await response.json();
        const popularArtists = data.items.filter(
          (artist) => artist.popularity > 70
        );
        setArtists(popularArtists);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtists();
  }, [token]);

  // Function to fetch top tracks for the selected artist
  const fetchArtistTracks = async (artistId, artistName) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch top tracks");
      }

      const data = await response.json();
      setArtistTracks(data.tracks); // Set the top tracks
      setSelectedArtist(artistName); // Set the selected artist name
    } catch (error) {
      console.error("Error fetching top tracks:", error);
    }
  };

  return (
    <>
      <div className="mt-2 rounded-3 bg-info">
        <div className="rounded-3 navbar_before p-2">
          <h1 className="fs-5 m-2">Artists</h1>
          <div className="d-flex flex-wrap ">
            {artists.length > 0 ? (
              artists.map((artist) => (
                <div
                  key={artist.id}
                  className="card-body m-2 rounded text-light d-flex flex-column align-items-center"
                  onClick={() => fetchArtistTracks(artist.id, artist.name)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="rounded-circle p-1 img-fluid artist-image bg-info"
                    src={artist.images[0].url}
                    alt={artist.name}
                    width="150"
                  />
                  <h5>{artist.name}</h5>
                </div>
              ))
            ) : (
              <p>Loading artist data...</p>
            )}
          </div>
        </div>
      </div>
      {/* Display top tracks when an artist is selected */}
      {selectedArtist && (
        <div className="mt-4 p-3 bg-dark rounded">
          <h3 className="text-light p-2">Top Tracks of {selectedArtist}</h3>
          <ul className="list-group">
            {artistTracks.length > 0 ? (
              artistTracks.map((track) => (
                <li
                  key={track.id}
                  className="list-group-item bg-dark bg-gradient text-light border-0 d-flex justify-content-between align-items-center"
                >
                  <p className="m-2">{track.name}</p>
                  <div onClick={() => setCurrentTrack(track)}>
                    <FaRegPlayCircle className="fs-4 fw-light" />
                  </div>
                </li>
              ))
            ) : (
              <p>No top tracks available.</p>
            )}
          </ul>
        </div>
      )}

      {/* {<TrackDetails track={currentTrack} />} */}
    </>
  );
}

export default ArtistsList;
