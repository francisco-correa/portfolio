import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import { Formik } from "formik";
import * as yup from "yup";

const rex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Minimum 3 characters")
    .max(100, "Maximum 100 characters")
    .required("* required field"),

  email: yup
    .string()
    .min(3, "Minimum 3 characters")
    .max(100, "Maximum 100 characters")
    .matches(rex, "does not comply with format")
    .required("* required field"),

  message: yup
    .string()
    .min(3, "Minimum 3 characters")
    .max(140, "Maximum 140 characters")
    .required("* required field"),
});

const Contact = () => {
  return (
    <Formik
      initialValues={{ firstName: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        resetForm();
        setSubmitting(false);
        console.log(values);
        setTimeout(() => {
          emailjs
            .send("portfolio", "template_kc3b06n", {
              from_name: values.firstName,
              email: values.email,
              message: values.message,
            }, "user_ipNgY6FvK2EvoDrPH27Bw",
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h2>Contact</h2>
              <div className="p-3 mt-1 contactContainer">
                <Form onSubmit={handleSubmit} className="p-lg-4">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      size="lg"
                      name="firstName"
                      placeholder="Enter First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.firstName && errors.firstName ? "error" : null
                      }
                    />
                    <Form.Text className="text-muted">
                      {touched.firstName && errors.firstName ? (
                        <div className="error-message">{errors.firstName}</div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      size="lg"
                      name="email"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Text className="text-muted">
                      {touched.email && errors.email ? (
                        <div className="error-message">{errors.email}</div>
                      ) : null}
                    </Form.Text>
                    <Form.Group controlId="messageFormControl">
                      <Form.Control
                        type="text"
                        size="lg"
                        name="message"
                        as="textarea"
                        placeholder="Write a message"
                        rows={2}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Form.Text className="text-muted">
                        {touched.message && errors.message ? (
                          <div className="error-message">{errors.message}</div>
                        ) : null}
                      </Form.Text>
                    </Form.Group>
                  </Form.Group>
                  <Button size="lg" block type="submit" disable={isSubmitting}>
                    Send
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};
export default Contact;
