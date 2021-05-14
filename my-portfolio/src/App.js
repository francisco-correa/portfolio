import './App.css';
import MyProfile from "./components/profile"
import MyProjects from "./components/projects"
import MyWorkExperience from './components/workExperience';
import MyTechnologies from './components/technologies';
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Container>
       <h2 className="name mr-4 text-center">Francisco Correa</h2>
       <h3 className="profession mr-4 text-center">Full Stack Developer | Pharmacist | Marketing</h3>
       <hr></hr>
      <MyProfile></MyProfile>
      <hr></hr>
      <MyProjects></MyProjects>
      <hr></hr>
      <MyWorkExperience></MyWorkExperience>
      <hr></hr>
      <MyTechnologies></MyTechnologies>
    </Container>
  
  );
}

export default App;
