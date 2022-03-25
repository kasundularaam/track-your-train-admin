import { colors } from "tabler-react";
import React, { useState } from "react";
import Bookings from "./home/Bookings";
import AllTrains from "./home/AllTrains";
import Dashboard from "./home/Dashboard";
import AddTrains from "./home/AddTrains";

const HomePage = () => {
  const [verticalActive, setVerticalActive] = useState("dashboard-tab");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-1 mb-2">
        <div className="col-xs-10 col-sm-10 col-lg-10">
          <h3 className="text-primary">Track Your Train</h3>
        </div>
        <div className="col-xs-2 col-sm-2 col-lg-2">
          <button className="btn btn-danger">Sign Out</button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2">
          <ul
            className="nav flex-column nav-pills"
            id="myTab"
            role="tablist"
            aria-orientation="vertical"
          >
            <li className="nav-item">
              <a
                className={
                  "nav-link " +
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
              </a>
            </li>
            <li className="nav-item ">
              <a
                className={
                  "nav-link " +
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
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  "nav-link " +
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
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  "nav-link " +
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
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-10 col-sm-10 col-lg-10">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
