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
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      window.localStorage.setItem("access_token", _token);
    }
  }, [token]);

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
