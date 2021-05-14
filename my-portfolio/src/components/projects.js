import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const MyProjects = () => {
  return (
    <Container>
         <h2>Projects</h2>
      <Row>
        <Col>
          <Card style={{ width: "18rem", border: "0" }}>
            <Card.Img variant="top" src="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/pets.jpg" />
            <Card.Body>
              <Card.Title>PetCloud</Card.Title>
              <Card.Text>
              Project on the integration of pet owners and veterinarians through API HL7-FHIR...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/pet-cloud">
              <h3>I want to know more!!</h3>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: "18rem", border: "0" }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" />
            <Card.Body>
              <Card.Title>StarWarsBlog</Card.Title>
              <Card.Text>
              Project from differentS Characters and Planets using Star Wars with fetch API...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/star-wars-blog">
              <h3>I want to know more!!</h3>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: "200px", border: "0" }}>
            <Card.Img variant="top"src="https://i.blogs.es/d74438/650_1000_json_logo-555px/450_1000.png" />
            <Card.Body>
              <Card.Title>Family Jackson</Card.Title>
              <Card.Text>
              Project to build a family with CRUD API method in Python...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/family-jackson-api">
              <h3>I want to know more!!</h3>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MyProjects;