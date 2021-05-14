import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyWorkExperience = () => {
  return (
    <Container>
      <h2>Work Experience </h2>
      <Row className="text-center">
        <Col>
        <a href="https://cens.cl/"><h3>CENS </h3></a>
        <h4>(2017 - current)</h4>
          <p>
            Non-profit corporation, supported by CORFO, where its objective is
            to reduce the digital health gap. gaps in digital health.
          </p>
        </Col>
        <Col>
        <a href="https://www.corfo.cl/sites/cpp/homecorfo"><h3>CORFO  </h3></a>
        <h4>(2016)</h4>
          <p>
            {" "}
            CORFO project where the basis of a pharmaceutical terminology was
            established for a common language among all the actors in the value chain.
          </p>
        </Col>
        <Col>
          <h3>PHARMACIES</h3>
          <h4>(2012 - 2015)</h4>
          <p>Manriquez</p>
          <p>Farmaprecio</p>
          <p>Eltit</p>
        </Col>
        <Col>
        <a href="https://www.enfa.cl/"><h3>ENFA</h3></a>
        <h4>(2011)</h4>
          <p>
            Encourage and attend to students' academic doubts in order to
            enhance their learning process. learning process.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default MyWorkExperience;
