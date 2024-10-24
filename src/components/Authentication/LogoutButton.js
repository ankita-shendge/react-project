import React from "react";
import { redirectUri } from "./sportify";
import styled from "styled-components";

function logoutFunctionality() {
  window.localStorage.removeItem("access_token");
  window.location.href = redirectUri;
}

function Logout() {
  return (
    <LogoutButton>
      <button onClick={logoutFunctionality}>Logout</button>
    </LogoutButton>
  );
}

export default Logout;

const LogoutButton = styled.div`
  button {
    width: 100px;
    color: black;
    padding: 5px 5px;
    border-radius: 20px;
  }
`;
