import React, { useState } from "react";
import {
  Button,
  Container,
  Alert,
  Form,
  Card,
  Row,
  Col,
} from "react-bootstrap";

const LoginPage = (params) => {
  const adminEmail = "admin@tyt.com";
  const adminPassword = "123456";

  const [failed, setFailed] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      if (email === adminEmail && password === adminPassword) {
        setLoading(false);
        setFailed(false);
        setSucceed(true);
        params.setLoggedIn(true);
      } else {
        setLoading(false);
        setSucceed(false);
        setFailed(true);
        params.setLoggedIn(false);
      }
    }, 1000);
  };

  return (
    <Container fluid>
      <Row className="py-2 bg-primary text-white text-center">
        <h2>Track Your Train</h2>
      </Row>

      <Row className="mt-5">
        <Col></Col>
        <Col>
          <Card border="primary" className="p-4" style={{ width: "380px" }}>
            <Card.Title className="text-primary text-center">
              <h2>Log In</h2>
            </Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="trainname@tyt.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="* * * * * *"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></Form.Control>
              </Form.Group>
            </Form>
            <Button
              variant="primary"
              disabled={loading}
              onClick={!loading ? login : null}
            >
              {loading ? "Loading..." : "Sign In"}
            </Button>
            {failed ? <FailedMessage /> : null}
            {succeed ? <SucceedMessage /> : null}
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

const FailedMessage = () => {
  return (
    <Alert variant="danger">
      <strong>Failed!</strong> Wrong credentials!
    </Alert>
  );
};

const SucceedMessage = () => {
  return (
    <Alert variant="success">
      <strong>Succeed!</strong> Login Succeed!
    </Alert>
  );
};

export default LoginPage;
