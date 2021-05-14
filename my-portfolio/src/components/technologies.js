import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyTechnologies = () => {
  return (
    <Container>
         <h2>Informatics Languages</h2>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Front</th>
      <th scope="col">Back</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>HTML - CSS - JS</td>
      <td>Python - SQL</td>
    </tr>
  </tbody>
</table>
    </Container>
  );
};
export default MyTechnologies;
