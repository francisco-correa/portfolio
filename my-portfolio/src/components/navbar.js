import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav navbar-expand-md">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        > 
        </button>
        <button
          type="button"
          data-target="#collapseNavbar"
          data-toggle="collapse"
          className="navbar-toggler"
        >
          <span>
            <i style={{color: "#2574A9"}} className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="nav-content collapse navbar-collapse"
          id="collapseNavbar"
        >
          <ul className="navbar-nav auto">
            <li className="nav-item dropdown">
              <Link
                activeClass="active"
                to="profile"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="work experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="tech and programming"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Techs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
