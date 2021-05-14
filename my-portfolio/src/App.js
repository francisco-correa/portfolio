import './App.css';
import MyProfile from "./components/profile"
import MyProjects from "./components/projects"
import MyWorkExperience from './components/workExperience';
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import MyTechnologies from './components/technologies';


const App = () => {
  return (
    <Container>
       <h2 style={{color: "#5F9EA0"}} className="name mr-4 text-center">Francisco Correa</h2>
       <h3 style={{color: "#A52A2A"}} className="profession mr-4 text-center">Full Stack Developer | Pharmacist | Marketing</h3>
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
