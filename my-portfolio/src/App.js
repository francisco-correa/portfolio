import "./App.css";
import MyNavBar from "./components/navbar";
import MyProfile from "./components/profile";
import MyProjects from "./components/projects";
import MyWorkExperience from "./components/workExperience";
import MyTechnologies from "./components/technologies";
import ScrollArrow from "./components/scrollUp";
import Contact from "./components/contact";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    
    <Container>
      <MyNavBar></MyNavBar>
      <br></br>
      <h2 className="name mr-4 text-center">Francisco Correa</h2>
      <h3 className="profession mr-4 text-center">
        Full Stack Developer | Pharmacist | Marketing
      </h3>
      <Row>
        <Col xs={12} md={3}  className="text-center">
          <a href="https://www.linkedin.com/in/francisco-javier-correa-fernandez/" target="_blank" rel="noreferrer">
            Linkedin <i className="fab fa-linkedin-in"></i>
          </a>
        </Col>
        <Col  xs={12} md={3} className="text-center">
          <a href="https://github.com/francisco-correa" target="_blank" rel="noreferrer">
            GitHub <i className="fab fa-github"></i>
          </a>
        </Col>
        <Col  xs={12} md={3} className="text-center">
          <a href="mailto:fcorrea.fernandez@gmail.com" target="_blank" rel="noreferrer">
            Email <i className="far fa-envelope"></i>
          </a>
        </Col>
        <Col xs={12} md={3} className="text-center">
          <a href="https://drive.google.com/file/d/1tu3iuD23EAoAQvI4zfVuu6Dcq7Vr49sY/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume(spanish) <i className="far fa-file"></i>
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
      <hr></hr>
      <ScrollArrow></ScrollArrow>
      <Contact></Contact>
    </Container>
  );
};

export default App;
