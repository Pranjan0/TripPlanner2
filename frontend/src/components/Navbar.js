import React from "react"
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../useContext";
import { useContext, useState } from "react";

const Navbar = () => {
  
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn, currentUser} = useContext(UserContext);
  const logout = () => {
    sessionStorage.removeItem("user")
    setLoggedIn(false)
    navigate('/login');
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
          <i className="fa-solid fa-plane-departure"></i>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a class="nav-link" href="/" aria-controls="#picker-editor">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a class="nav-link" href="/browse">
                  Browse Places
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a class="nav-link" href="/itinerary" aria-controls="#picker-editor">
                  Itinerary
                </a>{" "}
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <Link to="/login">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button></Link>
              <Link to="">
              <button type="button" className="btn btn-link px-3 me-2 dropdown-item" onClick={logout}>
                Log Out
              </button></Link>
              <Link to="signup">
              <button type="button" className="btn btn-primary me-3">
                Sign up
              </button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
