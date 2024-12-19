import React from "react";
// import HomeIcon from "./HomeIcon";
import "./Sidebar.css";
import SidebarLibrary from "./SidebarLibrary";

function Sidebar() {
  return (
    <>
      <div
        className="bg-info min-fixed-width rounded-2"
        style={{ width: "100%" }} // Set the width to 100% to fill the parent
      >
        <div className="d-flex flex-column rounded">
          <img
            src="./images/Spotify_Full_Logo_RGB_White.png"
            className="rounded bg-dark w-99 m-2 p-5"
            // style={{ width: "200px" }}
            alt="sportify_logo"
          />
          <SidebarLibrary />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
