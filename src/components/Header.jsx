import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  // Function to close navbar on link click
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink
          className="navbar-brand text-white fw-bold m-0"
          to="/"
          onClick={closeNavbar}
          style={{
            fontSize: '1rem',
            whiteSpace: 'nowrap',
          }}
        >
          Shiva Dental & Facial Aesthetic Centre
        </NavLink>

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
      </div>

      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? 'fw-bold' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/aesthetic-services"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? 'fw-bold' : ''}`
                }
              >
                Aesthetic Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dental-services"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? 'fw-bold' : ''}`
                }
              >
                Dental Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? 'fw-bold' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? 'fw-bold' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
