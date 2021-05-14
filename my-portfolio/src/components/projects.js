import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const MyProjects = () => {
  return (
    <Container>
         <h2>Projects</h2>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/pets.jpg" />
            <Card.Body>
              <Card.Title>PetCloud</Card.Title>
              <Card.Text>
              Project on the integration of pet owners and veterinarians through API HL7-FHIR...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/pet-cloud">
              I want to know more!!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" />
            <Card.Body>
              <Card.Title>StarWarsBlog</Card.Title>
              <Card.Text>
              Project from differentS Characters and Planets using Star Wars with fetch API...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/star-wars-blog">
              I want to know more!!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top"src="https://cdn3.iconfinder.com/data/icons/mobile-icon-2/512/contact-512.png" />
            <Card.Body>
              <Card.Title>ContactList</Card.Title>
              <Card.Text>
              Project to build a contact agenda with CRUD API method
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/contact-list">
              I want to know more!!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MyProjects;