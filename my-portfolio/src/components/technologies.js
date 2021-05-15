import React from "react";
import { Container, Table } from "react-bootstrap";

const MyTechnologies = () => {
  return (
    <Container>
      <h2>Technologies and Programming Languages</h2>
      <Table striped bordered hover variant="light" class="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{color: "#2574A9"}}>Frontend</th>
          </tr>
        </thead>
        <tbody>
        <tr style={{color: "#2574A9"}}>
            <td>HTML <i class="fab fa-html5"></i> </td>
            <td>CSS <i class="fab fa-css3-alt"></i></td>
            <td>JavaSript <i class="fab fa-js"></i></td>
            <td>ReactJS</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="light" class="table table-striped">
        <thead>
          <tr>
          <th scope="col" style={{color: "#2574A9"}}>Backend</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{color: "#2574A9"}}>
            <td>SQL <i class="fas fa-database"></i></td>
            <td>Python <i class="fab fa-python"></i></td>
            <td>FHIR <i class="fas fa-fire"></i></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default MyTechnologies;
