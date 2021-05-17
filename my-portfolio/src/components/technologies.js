import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";

const MyTechnologies = () => {
  return (
    <Container id="tech and programming">
      <h2>Technologies and Programming Languages</h2>
      <Row>
        <Col xs={6} md={12}>
          <Table
            striped
            bordered
            hover
            variant="light"
            class="table table-striped"
          >
            <thead>
              <tr>
                <th scope="col" style={{ color: "#2574A9" }}>
                  Frontend
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "#2574A9" }}>
                <td>
                  HTML5 <i className="fab fa-html5"></i>{" "}
                </td>
                <td>
                  CSS <i className="fab fa-css3-alt"></i>
                </td>
                <td>
                  JavaSript <i className="fab fa-js"></i>
                </td>
                <td>
                  ReactJS <i className="fab fa-react"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={12}>
          <Table
            striped
            bordered
            hover
            variant="light"
            class="table table-striped"
          >
            <thead>
              <tr>
                <th scope="col" style={{ color: "#2574A9" }}>
                  Backend
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "#2574A9" }}>
                <td>
                  SQLAlchemy <i className="fas fa-database"></i>
                </td>
                <td>
                  Python <i className="fab fa-python"></i>
                </td>
                <td>Flask</td>
                <td>
                  FHIR <i className="fas fa-fire"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Table
            striped
            bordered
            hover
            variant="light"
            class="table table-striped"
          >
            <thead>
              <tr>
                <th scope="col" style={{ color: "#2574A9" }}>
                  Libraries and others
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "#2574A9" }}>
                <td>
                  GitHub <i className="fab fa-github"></i>
                </td>
                <td>Bootstrap</td>
                <td>
                  BPMN
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default MyTechnologies;
