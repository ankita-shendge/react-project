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
        <div className="d-flex flex-column align-items-center rounded">
          <img
            src="./images/Ghazhal.jpeg"
            className="rounded p-2"
            style={{ width: "200px" }}
            alt="ghazhal"
          />
          <SidebarLibrary />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
