import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const MyProjects = () => {
  return (
    <Container>
         <h2>Projects</h2>
      <Row>
      <Col xs={12} md={4}>
          <Card className="bg-info" style={{ width: "18rem", border: "0" }}>
            <Card.Img variant="top" src="https://miro.medium.com/max/2896/1*7oZN0ORhmugVXNk240mqPg.jpeg" />
            <Card.Body>
              <Card.Title style={{ color: "white", textAlign: "center"}}>PetCloud</Card.Title>
              <Card.Text style={{ color: "white", textAlign: "justify"}}>
              Project on the integration of pet owners and veterinarians through API HL7-FHIR...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/pet-cloud">
              <h4 style={{ color: "white"}}>I want to know more!!</h4>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="bg-info" style={{ width: "18rem", border: "0" }}>
            <Card.Img variant="top" src="https://miro.medium.com/max/2896/1*7oZN0ORhmugVXNk240mqPg.jpeg" />
            <Card.Body>
              <Card.Title style={{ color: "white", textAlign: "center"}}>StarWarsBlog</Card.Title>
              <Card.Text style={{ color: "white", textAlign: "justify"}}>
              Project from differents Characters and Planets using Star Wars with fetch API...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/star-wars-blog">
              <h4 style={{ color: "white"}}>I want to know more!!</h4>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="bg-info" style={{ width: "18rem", border: "0" }}>
            <Card.Img variant="top"src="https://miro.medium.com/max/2896/1*7oZN0ORhmugVXNk240mqPg.jpeg" />
            <Card.Body>
              <Card.Title style={{ color: "white", textAlign: "center"}}>FamilyJackson</Card.Title>
              <Card.Text style={{ color: "white"}}>
              Project to build a family with Create, Update, Get and -delete API method in Python 
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/family-jackson-api">
              <h4 style={{ color: "white"}}>I want to know more!!</h4>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MyProjects;