import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const MyProjects = () => {
  return (
  
    <Container id="projects">
         <h2>Projects</h2>
      <Row className="pl-3">
      <Col xs={12} md={4} className="mt-2">
          <Card className="bg-info" style={{ width: "18rem", border: "0" }}>
            <Card.Img className="style-img" variant="top" src="https://raw.githubusercontent.com/francisco-correa/portfolio/main/my-portfolio/src/images/digitalHealthTransformation.webp" alt="francisco´s projects" />
            <Card.Body>
              <Card.Title style={{ color: "white", textAlign: "center"}}>PetCloud</Card.Title>
              <Card.Text style={{ color: "white", textAlign: "justify"}}>
              Project on the integration of pet owners and veterinarians through API HL7-FHIR...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/pet-cloud">
              <h4 className="cta">I want to know more!!</h4>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-2">
        <Card className="bg-info" style={{ width: "18rem", border: "0" }}>
            <Card.Img className="style-img" variant="top" src="https://raw.githubusercontent.com/francisco-correa/portfolio/main/my-portfolio/src/images/digitalHealthTransformation.webp" alt="francisco´s projects" />
            <Card.Body>
              <Card.Title style={{ color: "white", textAlign: "center"}}>StarWarsBlog</Card.Title>
              <Card.Text style={{ color: "white", textAlign: "justify"}}>
              Project from differents Characters and Planets using Star Wars with fetch API...
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/star-wars-blog">
              <h4 className="cta">I want to know more!!</h4>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-2">
        <Card className="bg-info" style={{ width: "18rem", border: "0" }}>
            <Card.Img className="style-img" variant="top"src="https://raw.githubusercontent.com/francisco-correa/portfolio/main/my-portfolio/src/images/digitalHealthTransformation.webp" alt="francisco´s projects" />
            <Card.Body>
              <Card.Title style={{ color: "white", textAlign: "center"}}>FamilyJackson</Card.Title>
              <Card.Text style={{ color: "white"}}>
              Project to build a family with Create, Update, Get and Delete API method in Python... 
              </Card.Text>
              <Card.Link href="https://github.com/francisco-correa/family-jackson-api">
              <h4 className="cta">I want to know more!!</h4>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>
   
  );
};
export default MyProjects;