import React, { useState } from "react";

function HomeIcon() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const [isHomeActive, setIsHomeActive] = useState(false);

  const handleHomeClick = () => {
    setIsHomeActive(!isHomeActive);
  };

  return (
    <>
      <div className="bg-dark rounded-2 m-2 mt-0 p-3">
        <img
          src="./images/Spotify_Full_Logo_RGB_White.png"
          className="fixed-size"
          alt=""
        />

        <button
          type="button"
          className="btn btn-dark d-flex justify-content-start align-items-center p-0 fs-6 mt-3  solid_button"
          onClick={handleHomeClick}
        >
          <i className="fa-solid fa-house pe-2 fs-5"></i>
          <span
            className={`fw-light ${isHomeActive ? "fw-medium" : "fw-light"}`}
          >
            Home
          </span>
        </button>
        <button
          type="button"
          className="btn btn-dark d-flex justify-content-start align-items-center p-0 fs-6 mt-3 fw-medium"
          onClick={handleSearchClick}
        >
          <i
            className={`fa-solid fa-magnifying-glass pe-2 fs-5 ${
              isSearchActive ? "text-white" : "text-secondary"
            }`}
          ></i>
          <span
            className={`solid_button ${
              isSearchActive ? "text-white" : "text-secondary"
            }`}
          >
            Search
          </span>
        </button>
      </div>
    </>
  );
}

export default HomeIcon;
