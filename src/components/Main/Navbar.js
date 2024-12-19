import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TbBrowserShare } from "react-icons/tb";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineDownloading } from "react-icons/md";
import "./Navbar.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import Logout from "../Authentication/LogoutButton";

function Navbar() {
  let Profile = {
    name: "Ankita",
    lastname: "Shendge",
  };

  const [displayProfileMenu, setProfileMenu] = useState(false);

  function toggleProfileMenu() {
    setProfileMenu((prevState) => !prevState);
  }

  return (
    <>
      <nav className="navbar rounded-3 bg-dark ">
        <div className="container-fluid">
          <div className="d-flex flex-row justify-content-between">
            <a className="navbar-brand" href="#home">
              <AiFillHome className="fs-3 text-white" />
            </a>
            <form className="d-flex">
              <input
                className="form-control border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "500px", height: "40px" }}
              />
              <button
                className="btn btn-outline-success border-0 text-white"
                type="submit"
              >
                {" "}
                |
                <TbBrowserShare className="fs-3 text-white ps-1" />
              </button>
            </form>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-4">
              <MdOutlineDownloading
                className="text-white fs-3 p-0 me-1"
                aria-label="Share"
              />{" "}
              Install App
            </div>

            <CiBellOn
              className="text-white me-4 fs-3"
              aria-label="Notifications"
            />
            <div
              className="bg-warning rounded-circle d-flex align-items-center justify-content-center text-white position-relative"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              onClick={toggleProfileMenu}
            >
              <p className="mb-0 fw-bold text-dark">
                {Profile.name.charAt(0).toUpperCase() +
                  Profile.lastname.charAt(0).toUpperCase()}
              </p>
              <BrowserRouter>
                {displayProfileMenu && (
                  <ul
                    className="list-unstyled bg-dark position-absolute p-3 top-100 shadow"
                    style={{ marginRight: "29px" }}
                  >
                    <li className="p-1">
                      <NavLink className="text-white text-decoration-none" to="/account">Account</NavLink>
                    </li>
                    <li className="p-1 ">
                      <NavLink className="text-white text-decoration-none" to="/profileInfo">Profile</NavLink>
                    </li>
                    <li className="border-bottom p-1 mb-2">
                      <NavLink className="text-white text-decoration-none" to="/settings">Settings</NavLink>
                    </li>
                    <li className="p-1">
                      <NavLink to="/logout"><Logout/></NavLink>
                    </li>
                  </ul>
                )}
              </BrowserRouter>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
