import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../App";
import { Button, Container, Row, Col, Table } from "react-bootstrap";

const AllTrains = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);

  const loadTrains = async () => {
    setLoading(true);
    const trainList = await getDocs(collection(db, "users")).then(
      (snapshot) => {
        const userList = snapshot.docs.map((doc) => doc.data());
        let filteredList = [];
        userList.forEach((user) => {
          if (user.userType === "driver") {
            filteredList.push(user);
          }
        });
        return filteredList;
      }
    );
    setLoading(false);
    setTrains(trainList);
  };

  useEffect(() => {
    loadTrains();
  }, []);

  return (
    <Container fluid>
      <Col>
        <Row>
          <Col>
            <h2 className="col">All Trains</h2>
          </Col>
          <Col md="auto">
            <Button
              variant="primary"
              disabled={loading}
              onClick={!loading && loadTrains}
            >
              {loading ? "Loading..." : "Refresh"}
            </Button>
          </Col>
        </Row>
        <Table hover>
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train) => (
              <tr key={train.userId}>
                <td>{train.userName}</td>
                <td>{train.trainId}</td>
                <td>{train.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Container>
  );
};

export default AllTrains;
