import React from "react";
import { Nav, Navbar, NavDropdown, Container, Row } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">FC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Profile</Nav.Link>
              <NavDropdown title="Resume" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action_2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};
export default MyNavBar;
