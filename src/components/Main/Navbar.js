import React from "react";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="d-flex justify-content-around  align-items-center rounded-3 navbar_before p-2 w-50 bg-dark">
        <button className="rounded-circle bg-black text-white border-0 bg-transparent">
          <AiFillHome className="fs-3" />
        </button>
        <input
          className="form-control w-50 h-25 border-0"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        {/* <LoginButton btn_name="Sign Up" /> */}
      </nav>
    </>
  );
}

export default Navbar;
