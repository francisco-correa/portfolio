import "./App.css";
import MyProfile from "./components/profile";
import MyProjects from "./components/projects";
import MyWorkExperience from "./components/workExperience";
import MyTechnologies from "./components/technologies";
import ScrollArrow from "./components/scrollUp";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Container>
      <h2 className="name mr-4 text-center">Francisco Correa</h2>
      <h3 className="profession mr-4 text-center">
        Full Stack Developer | Pharmacist | Marketing
      </h3>
      <Row>
        <Col className="text-center">
          <a href="https://www.linkedin.com/in/francisco-javier-correa-fernandez/" target="_blank" rel="noreferrer">
            Linkedin <i class="fab fa-linkedin-in"></i>
          </a>
        </Col>
        <Col className="text-center">
          <a href="https://github.com/francisco-correa" target="_blank" rel="noreferrer">
            GitHub <i class="fab fa-github"></i>
          </a>
        </Col>
      </Row>
      <hr></hr>
      <MyProfile></MyProfile>
      <hr></hr>
      <MyProjects></MyProjects>
      <hr></hr>
      <MyWorkExperience></MyWorkExperience>
      <hr></hr>
      <MyTechnologies></MyTechnologies>
      <ScrollArrow></ScrollArrow>
    </Container>
  );
};

export default App;
