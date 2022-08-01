import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-2">
        <div className="container-fluid">
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <a className="navbar-brand ms-3">
              <i className="fa-solid fa-plane-departure"></i>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent d-flex align-item-right">
            <ul className="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0">
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
          </div>
          <div class="d-flex align-item-center">
            <button type="button" class="btn  btn-link px-3 mb-1 me-2" aria-controls="#picker-editor">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/signup">
              <button type="button" class="btn  btn-primary mb-1 me-lg-3" aria-controls="#picker-editor">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="16" alt="MDB Logo" loading="lazy" />
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" class="btn btn-primary me-3">
                Sign up for free
              </button>
              <a class="btn btn-dark px-3" href="https://github.com/mdbootstrap/mdb-ui-kit" role="button">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
