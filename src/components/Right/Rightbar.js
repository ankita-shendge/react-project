import React, { useContext } from "react";

import TrackDetails from "./TrackDetails";
import { TrackContext } from "../TrackContext";

function Rightbar() {
  const { currentTrack } = useContext(TrackContext); // Access currentTrack from context

  return (
    <>
      <div className="p-2 rounded-3 bg-info">
        <div className="" style={{height: "105px"}} >
          <TrackDetails track={currentTrack}  />
        </div>
      </div>
    </>
  );
}

export default Rightbar;
