import React, { useEffect, useState } from "react";
import Split from "react-split";
import { getTokenFromUrl } from "./components/Authentication/sportify";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Login from "./components/Authentication/Login";
import Rightbar from "./components/Right/Rightbar";
import { TrackProvider } from "./components/TrackContext";

function App() {
  const [token, setToken] = useState(
    () => window.localStorage.getItem("access_token") || ""
  );

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      window.localStorage.setItem("access_token", _token);

      fetch("https://api.spotify.com/v1/me/player/devices", {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.devices && data.devices.length > 0) {
            const deviceId = data.devices[0].id;
            window.localStorage.setItem("spotify_device_id", deviceId);
            console.log("Device ID stored:", deviceId);
          } else {
            console.log("No active devices found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching devices:", error);
        });

      window.location.hash = "";
    }
  }, []);

  return (
    <>
      {token ? (
        <TrackProvider>
          <Split
            sizes={[25, 50, 25]}
            minSize={50}
            expandToMin={true}
            gutterSize={8}
            gutterAlign="center"
            snapOffset={20}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Sidebar />
            <Main />
            <Rightbar />
          </Split>
        </TrackProvider>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
