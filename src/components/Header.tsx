import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/nasa-logo.svg';
import '../assets/css/header.css';

export default function Header() {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div>
              <Link to="/" className="logo-image">
                <img src={Logo} alt="NASA Logo" />
              </Link>
            </div>
            <div>
              <Link to="/" className="logo-title fs-4 text-light text-decoration-none">
                Nasa News
              </Link>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <CustomLink to="/">News</CustomLink>
                  </li>
                  <li className="nav-item">
                    <CustomLink to="/apollo">Apollo 11</CustomLink>
                  </li>
                  <li className="nav-item">
                    <CustomLink to="/curiosity">Curiosity</CustomLink>
                  </li>
                  <li className="nav-item">
                    <CustomLink to="/earth">Earth</CustomLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}

function CustomLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
}
