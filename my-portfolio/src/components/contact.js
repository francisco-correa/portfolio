import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio",
        "template_kc3b06n",
        e.target,
        "user_ipNgY6FvK2EvoDrPH27Bw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12}>
          <h2>Contact</h2>
          <div className="p-3 mt-1 contactContainer">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nameFormControl">
                <Form.Control
                  name="Name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name and Last_Name"
                />
              </Form.Group>
              <Form.Group controlId="emailFormControl">
                <Form.Control
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your mail: name@example.com"
                  required
                />
              </Form.Group>
              <Form.Group controlId="messageFormControl">
                <Form.Label className="contactLabel">
                  Write me a message
                </Form.Label>
                <Form.Control name="message" as="textarea" rows={2} required />
              </Form.Group>
              <Button size="lg" block type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
