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
      <button className="bg-dark border-0 text-white" onClick={logoutFunctionality}>Logout</button>
    </LogoutButton>
  );
}

export default Logout;

const LogoutButton = styled.div`
 
`;
