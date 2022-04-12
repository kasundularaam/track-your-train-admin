import { colors } from "tabler-react";
import React, { useState } from "react";
import Bookings from "./home/Bookings";
import AllTrains from "./home/AllTrains";
import Dashboard from "./home/Dashboard";
import AddTrains from "./home/AddTrains";
import { Container, Row, Col, Nav } from "react-bootstrap";

const HomePage = () => {
  const [verticalActive, setVerticalActive] = useState("dashboard-tab");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="bg-primary text-white" style={{ height: "10vh" }}>
        <h3 style={{ margin: "auto" }} class="text-center">
          Track Your Train
        </h3>
      </Row>
      <Row style={{ height: "90vh" }}>
        <Col md="auto" className="px-4 py-4 bg-dark">
          <Nav
            className="flex-column"
            variant="pills"
            id="myTab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Nav.Item className="mb-2">
              <Nav.Link
                className={
                  "px-5 text-white nav-link " +
                  (verticalActive === "dashboard-tab" ? "active" : null)
                }
                id="dashboard-tab"
                data-toggle="tab"
                href="#dashboard"
                role="tab"
                aria-controls="dashboard"
                onClick={() => handleVerticalClick("dashboard-tab")}
                aria-selected={verticalActive === "dashboard-tab"}
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link
                className={
                  "px-5 text-white nav-link " +
                  (verticalActive === "all-trains-tab" ? "active" : null)
                }
                id="all-trains-tab"
                data-toggle="tab"
                href="#alltrains"
                role="tab"
                aria-controls="alltrains"
                onClick={() => handleVerticalClick("all-trains-tab")}
                aria-selected={verticalActive === "all-trains-tab"}
              >
                All Trains
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link
                className={
                  "px-5 text-white nav-link " +
                  (verticalActive === "add-trains-tab" ? "active" : null)
                }
                id="add-trains-tab"
                data-toggle="tab"
                href="#addtrains"
                role="tab"
                aria-controls="addtrains"
                onClick={() => handleVerticalClick("add-trains-tab")}
                aria-selected={verticalActive === "add-trains-tab"}
              >
                Add Trains
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link
                className={
                  "px-5 text-white nav-link " +
                  (verticalActive === "bookings-tab" ? "active" : null)
                }
                id="bookings-tab"
                data-toggle="tab"
                href="#bookings"
                role="tab"
                aria-controls="bookings"
                onClick={() => handleVerticalClick("bookings-tab")}
                aria-selected={verticalActive === "bookings-tab"}
              >
                Bookings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="mt-4">
          <div className="tab-content">
            <div
              className={
                "tab-pane fade " +
                (verticalActive === "dashboard-tab" ? "show active" : null)
              }
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <Dashboard />
            </div>
            <div
              className={
                "tab-pane fade " +
                (verticalActive === "all-trains-tab" ? "show active" : null)
              }
              id="alltrains"
              role="tabpanel"
              aria-labelledby="all-trains-tab"
            >
              <AllTrains />
            </div>
            <div
              className={
                "tab-pane fade " +
                (verticalActive === "add-trains-tab" ? "show active" : null)
              }
              id="addtrains"
              role="tabpanel"
              aria-labelledby="add-trains-tab"
            >
              <AddTrains />
            </div>
            <div
              className={
                "tab-pane fade " +
                (verticalActive === "bookings-tab" ? "show active" : null)
              }
              id="bookings"
              role="tabpanel"
              aria-labelledby="bookings-tab"
            >
              <Bookings />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
