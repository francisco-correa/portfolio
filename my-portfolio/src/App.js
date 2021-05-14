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
       <h2>Francisco Correa</h2>
       <h3>Full Stack Developer | Pharmacist | Marketing</h3>
      <MyProfile></MyProfile>
      <br></br>
      <MyProjects></MyProjects>
      <br></br>
      <MyWorkExperience></MyWorkExperience>
      <br></br>
      <MyTechnologies></MyTechnologies>
    </Container>
  
  );
}

export default App;
