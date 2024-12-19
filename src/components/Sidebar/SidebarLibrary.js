import React, { useState } from "react";
import "./SidebarLibrary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CreatePlaylist from "./CreatePlaylist";
import SidebarLogin from "./SidebarLogin";

const SidebarLibrary = () => {
  const [showButton, setShowButton] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    setShowButton((prev) => !prev);
  };

  const showSidebarLogin = () => {
    setShowLogin(true);
  };

  const handleNotNowLogin = () => {
    setShowLogin(false);
    setShowButton(false);
  };

  return (
    <>
      <div>
        <div className="bg-dark rounded-2 ms-2 me-2 p-1 d-flex justify-content-between ">
          <button
            type="button"
            className="btn btn-dark d-flex justify-content-start fw-lighter solid_button align-items-center"
          >
            <i className="bi bi-music-note-list fs-6"></i>
            <span className="link-light text-decoration-none library-link">
              Your Library
            </span>
          </button>
          <button
            className="bg-dark border-0 btn btn-secondary"
            type="button"
            data-toggle="tooltip"
            data-placement="top"
            title="Create playlist or folder"
            onClick={handleClick}
          >
            <i className="bi bi-plus bg-dark text-white fs-2"></i>
          </button>
        </div>
        <CreatePlaylist
          first_p="Create your first playlist"
          second_p="It's easy! we'll help you"
          button_name="create playlist"
          onClick={showSidebarLogin}
        />
        <CreatePlaylist
          first_p="Let's find some podcasts to follow"
          second_p="We will keep you updated on new episodes"
          button_name="Browse podcasts"
        />
        <div className="pt-2 position-relative">
          {showButton && (
            <button className="overlay-button" onClick={showSidebarLogin}>
              <i className="bi bi-music-note-list"></i> Create a new playlist
            </button>
          )}
        </div>
      </div>
      <div>{showLogin && <SidebarLogin onClose={handleNotNowLogin} />}</div>
    </>
  );
};

export default SidebarLibrary;
