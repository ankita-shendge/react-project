import React, { useContext } from "react";
import Logout from "../Authentication/LogoutButton";
import TrackDetails from "./TrackDetails";
import { TrackContext } from "../TrackContext";

function Rightbar() {
  const { currentTrack } = useContext(TrackContext); // Access currentTrack from context

  return (
    <>
      <div className="p-2 rounded-3 bg-info">
        <div className="rounded-3 navbar_before p-2 d-flex justify-content-center">
          <Logout />
        </div>
        <div className="pt-3 d-flex justify-content-center">
          <TrackDetails track={currentTrack} />
        </div>
      </div>
    </>
  );
}

export default Rightbar;
