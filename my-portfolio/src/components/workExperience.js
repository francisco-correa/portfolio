import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyWorkExperience = () => {
  return (
    <Container id="work experience">
      <h2>Work Experience</h2>
      <Row className="text-center">
      <Col xs={12} md={4}>
        <a href="https://www.ecomsur.com/" target="_blank" rel="noreferrer"><h3>Ecomsur</h3></a>
        <h5><i>(2021 - current)</i></h5>
          <p>
            {" "}
            Leader FullCommerce company in Latin America.
          </p>
        </Col>
      <Col xs={12} md={4}>
        <a href="https://www.altaircapacitaciones.cl/curso/marketing-en-salud-desafios-digitales/" target="_blank" rel="noreferrer"><h3>AltAir</h3></a>
        <h5><i>(current)</i></h5>
          <p>
            Healthcare marketing digital challenges (Marketing teacher)
          </p>
        </Col>
        <Col xs={12} md={4}>
        <a href="https://cens.cl/" target="_blank" rel="noreferrer"><h3>CENS</h3></a>
        <h5><i>(2017 - 2021)</i></h5>
          <p>
            Non-profit corporation, supported by CORFO, where its objective is
            to reduce the digital health gap.
          </p>
        </Col>
        <Row>
        <Col xs={12} md={4}>
        <a href="https://www.corfo.cl/sites/cpp/homecorfo" target="_blank" rel="noreferrer"><h3>CORFO</h3></a>
        <h5><i>(2016 - 2017)</i></h5>
          <p>
            {" "}
            The basis of a pharmaceutical terminology was
            established for a common language among all the actors in the value chain.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h3>Pharmacies</h3>
          <h5><i>(2012 - 2016)</i></h5>
          <a href="https://farmaciasmanriquez.cl/" target="_blank" rel="noreferrer"><p>Manriquez</p></a>
          <a href="https://farmaprecio.cl/" target="_blank" rel="noreferrer"><p>Farmaprecio</p></a>
          <a href="https://eltitempresas.cl/" target="_blank" rel="noreferrer"><p>Eltit</p></a>
        </Col>
        <Col xs={12} md={4}>
        <a href="https://www.enfa.cl/" target="_blank" rel="noreferrer"><h3>ENFA</h3></a>
        <h5><i>(2011)</i></h5>
          <p>
            Encourage and attend to students academic doubts in order to
            enhance their learning process (Pharmacology Teacher)
          </p>
        </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default MyWorkExperience;
