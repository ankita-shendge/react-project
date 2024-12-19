import React from "react";

function CreatePlaylist({ first_p, second_p, button_name, onClick }) {
  const showLogin = () => {
    onClick();
  };
  return (
    <>
      <div className="bg-dark rounded-2 ms-2 me-2 mt-2 align-items-center first_playlist fs-6 p-3">
        <p>{first_p}</p>
        <p>{second_p}</p>
        <button
          className="bg-light border-0 rounded-5 ps-2 pe-2 p-1"
          onClick={showLogin}
        >
          {button_name}
        </button>
      </div>
    </>
  );
}

export default CreatePlaylist;
