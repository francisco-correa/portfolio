import React, {Component} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Row, Col } from "react-bootstrap";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
         <Row>
          <Col md={12} xs={12}>
          <ul className="nav-items">
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
                Work Experience
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
                Tech & Programming
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
          </Col>
          </Row>
        </div>
      </nav>
    );
  }
}
