import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav navbar-expand-md">
        <div
          className="nav-content"
          id="collapseNavbar"
        >
          <ul className="navbar-nav auto">
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="/"
                style={{color: "#2574A9"}}
              >
                Portfolio
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
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
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
