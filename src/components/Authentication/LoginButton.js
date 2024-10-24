import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
function LoginButton({ btn_name }) {
  const [showLoginScreen, setLoginScreen] = useState(false);
  const openLoginScreen = () => {
    setLoginScreen(true);
  };
  return (
    <>
      <Loginbutton>
        <button className="btn btn-info me-2" onClick={openLoginScreen}>
          {btn_name}
        </button>
      </Loginbutton>

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

export default LoginButton;

const Loginbutton = styled.div`
  button {
    width: 100px;
    color: black;
    padding: 5px 5px;
    border-radius: 20px;
  }
`;
