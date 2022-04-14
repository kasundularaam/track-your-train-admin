import React, { useState } from "react";
import Bookings from "./home/Bookings";
import AllTrains from "./home/AllTrains";
import Dashboard from "./home/Dashboard";
import AddTrains from "./home/AddTrains";
import { Container, Row, Col, Nav } from "react-bootstrap";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="bg-primary text-white" style={{ height: "10vh" }}>
        <h3 style={{ margin: "auto" }} class="text-center">
          Track Your Train
        </h3>
      </Row>
      <Row style={{ height: "90vh" }}>
        <Col md="auto" className="px-4 py-4 bg-dark">
          <Nav className="flex-column" variant="pills" role="tablist">
            <Nav.Item className="mb-2">
              <Nav.Link
                className={
                  "px-5 text-white nav-link " + (activeTab === 0 && "active")
                }
                onClick={() => setActiveTab(0)}
                role="button"
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link
                className={
                  "px-5 text-white nav-link " + (activeTab === 1 && "active")
                }
                onClick={() => setActiveTab(1)}
                role="button"
              >
                All Trains
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link
                className={
                  "px-5 text-white nav-link " + (activeTab === 2 && "active")
                }
                onClick={() => setActiveTab(2)}
                role="button"
              >
                Add Trains
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={
                  "px-5 text-white nav-link " + (activeTab === 3 && "active")
                }
                onClick={() => setActiveTab(3)}
                role="button"
              >
                Bookings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="mt-4">
          {activeTab === 0 && <Dashboard />}
          {activeTab === 1 && <AllTrains />}
          {activeTab === 2 && <AddTrains />}
          {activeTab === 3 && <Bookings />}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
