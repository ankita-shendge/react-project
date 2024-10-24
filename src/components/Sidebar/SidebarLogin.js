import React, { useState } from "react";
import Login from "../Authentication/Login";

function SidebarLogin({ onClose }) {
  const [showLoginScreen, setLoginScreen] = useState(false);
  const handleNotNow = () => {
    onClose();
  };

  const openLoginScreen = () => {
    setLoginScreen(true);
  };
  return (
    <>
      <div className="ms-2 me-2 p-1 text-dark">
        <p>Create a playlist</p>
        <p>Login to create and share playlists.</p>
        <div className="d-flex justify-content-end p-3">
          <button
            className="border-0 bg-transparent text-black-50 me-2"
            onClick={handleNotNow}
          >
            Not now
          </button>
          <button
            className="border-0 rounded-5 ps-2 pe-2 fs-6 w-50"
            onClick={openLoginScreen}
          >
            Log in
          </button>
        </div>
      </div>
      {showLoginScreen && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-content">
            <Login />
          </div>
        </div>
      )}
    </>
  );
}

export default SidebarLogin;
