import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./BrowseAll.css";
import ArtistsList from "./ArtistsList";
import AlbumList from "./AlbumList";
import AudioBookList from "./AudioBookList";
import LikedSongs from "./LikedSongs";

function BrowseAll() {
  return (
    <BrowserRouter>
      <ul className="mt-3 d-flex list-unstyled pt-2 align-items-center flex-wrrap">
        <li className="pe-2">
          <NavLink
            className="text-decoration-none bg-dark bg-gradient p-3 text-light rounded"
            to="/"
          >
            LikedSongs
          </NavLink>
        </li>
        <li className="pe-2">
          <NavLink
            className="text-decoration-none bg-dark bg-gradient p-3 text-light rounded"
            to="/artists"
          >
            Artists
          </NavLink>
        </li>
        <li className="pe-2">
          <NavLink
            className="text-decoration-none bg-dark bg-gradient p-3 text-light rounded"
            to="/albums"
          >
            Albums
          </NavLink>
        </li>

        <li className="pe-2">
          <NavLink
            className="text-decoration-none bg-dark bg-gradient p-3 text-light rounded"
            to="/audiobooks"
          >
            Audiobooks
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<LikedSongs />} />
        <Route path="/artists" element={<ArtistsList />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/audiobooks" element={<AudioBookList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default BrowseAll;
