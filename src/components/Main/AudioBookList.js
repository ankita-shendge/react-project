import React, { useEffect, useState, useContext } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { TrackContext } from "../TrackContext";

function AudioBookList() {
  const token = window.localStorage.getItem("access_token");
  const [audioBooks, setAudioBooks] = useState([]);
  const [selectedAudioBook, setSelectedAudioBook] = useState(null);
  const [audioChapters, setAudioChapters] = useState([]);
  const { setCurrentTrack } = useContext(TrackContext);

  useEffect(() => {
    async function fetchAudioBooksData() {
      if (!token) {
        console.log("No Token Found");
        return;
      }

      try {
        const response = await fetch(
          "https://api.spotify.com/v1/audiobooks?ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setAudioBooks(data.audiobooks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (token) {
      fetchAudioBooksData();
    }
  }, [token]);

  const fetchAudioChapters = async (audioBookId, audioBookName) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/audiobooks/${audioBookId}/chapters`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch chapters");
      }

      const data = await response.json();
      setAudioChapters(data.items);

      setSelectedAudioBook(audioBookName);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  return (
    <div className="mt-2 rounded-3 bg-info">
      <div className="rounded-3 navbar_before p-2">
        <h1 className="fs-5 m-2">AudioBooks</h1>
        <div className="d-flex flex-wrap">
          {audioBooks.length > 0 ? (
            audioBooks.map((audioBook) => (
              <div
                key={audioBook.id}
                className="card-body m-2 rounded text-light d-flex flex-column align-items-center"
                onClick={() => fetchAudioChapters(audioBook.id, audioBook.name)} // Handle click for chapters
              >
                <img
                  className="rounded-circle p-1 img-fluid artist-image bg-info"
                  src={audioBook.images[0]?.url}
                  alt={audioBook.name}
                />
                <h3>{audioBook.name}</h3>
                <h4>
                  {audioBook.authors.map((author) => author.name).join(", ")}
                </h4>
              </div>
            ))
          ) : (
            <p>No audiobooks available</p>
          )}
        </div>
      </div>

      {selectedAudioBook && (
        <div className="mt-4 p-3 bg-dark rounded">
          <h3 className="text-light p-2">Chapters of {selectedAudioBook}</h3>
          <ul className="list-group">
            {audioChapters.length > 0 ? (
              audioChapters.map((track) => (
                <li
                  key={track.id}
                  className="list-group-item bg-dark bg-gradient text-light border-0 d-flex justify-content-between align-items-center"
                >
                  <p className="m-2">{track.name}</p>
                  <p className="m-2">{track.description}</p>
                  <div onClick={() => setCurrentTrack(track)}>
                    <FaRegPlayCircle className="fs-4 fw-light" />
                  </div>
                </li>
              ))
            ) : (
              <p>No chapters available.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AudioBookList;
