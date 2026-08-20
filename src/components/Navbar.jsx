import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg coach-navbar fixed-top">
      <div className="container">

        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div className="brand-icon">
            <i className="bi bi-stars"></i>
          </div>

          <span className="brand-text">
            Coach<span>.ai</span>
          </span>
        </a>

        <button
          className="navbar-toggler"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">
                How it works
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

          </ul>

          <div className="d-flex gap-2">

            <button className="btn login-btn">
              Log in
            </button>

            <button className="btn btn-coach" onClick={() => navigate("/userDashboard")}>
              Get Started
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;