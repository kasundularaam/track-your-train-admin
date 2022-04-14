import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";
import { app } from "../../App";

import { Button, Alert, Container, Col, Form, Row } from "react-bootstrap";

const AddTrains = () => {
  const [trainName, setTrainName] = useState("");
  const [trainId, setTrainId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [failed, setFailed] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const db = getFirestore(app);

  const clearForm = () => {
    setTrainName("");
    setTrainId("");
    setEmail("");
    setPassword("");
  };

  const showFailedMessage = () => {
    setSucceed(false);
    setFailed(true);
    setTimeout(() => {
      setSucceed(false);
      setFailed(false);
    }, 2000);
  };

  const showSucceedMessage = () => {
    setFailed(false);
    setSucceed(true);
    setTimeout(() => {
      setSucceed(false);
      setFailed(false);
    }, 2000);
  };

  const addTrain = () => {
    if (!trainId && !trainName && !email && !password) {
      showFailedMessage();
    } else {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const uid = userCredential.user.uid;
          setDoc(doc(db, "users", uid), {
            trainId: trainId,
            userEmail: email,
            userId: uid,
            userName: trainName,
            userType: "driver",
          })
            .then((data) => {
              setLoading(false);
              showSucceedMessage();
              clearForm();
            })
            .catch((error) => {
              setLoading(false);
              console.log(error);
              showFailedMessage();
            });
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          showFailedMessage();
        });
    }
  };
  return (
    <Container fluid>
      <h2>Add Trains</h2>

      <Col>
        <Form className="px-4 py-4">
          <Row>
            <Col></Col>
            <Col>
              <Row>
                {failed && <FailedMessage />}
                {succeed && <SucceedMessage />}
              </Row>
              <Form style={{ width: "380px" }}>
                <Form.Group className="mb-3">
                  <Form.Label>Train Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Udarata Manike"
                    onChange={(e) => setTrainName(e.target.value)}
                    value={trainName}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Train Id</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="8766"
                    onChange={(e) => setTrainId(e.target.value)}
                    value={trainId}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="trainname@tyt.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="* * * * * *"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  ></Form.Control>
                </Form.Group>
              </Form>
            </Col>

            <Col></Col>
          </Row>

          <Col align="center">
            <Button
              variant="primary"
              disabled={loading}
              onClick={!loading && addTrain}
            >
              {loading ? "Loading..." : "Add Train"}
            </Button>
          </Col>
        </Form>
      </Col>
    </Container>
  );
};

const FailedMessage = () => {
  return (
    <Alert variant="danger">
      <strong>Failed!</strong> An error occurred!
    </Alert>
  );
};

const SucceedMessage = () => {
  return (
    <Alert variant="success">
      <strong>Succeed!</strong> Train added!
    </Alert>
  );
};

export default AddTrains;
