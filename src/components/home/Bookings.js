import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../App";
import { Button, Container, Row, Col, Table } from "react-bootstrap";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    setLoading(true);
    const bookingList = await getDocs(collection(db, "bookings")).then(
      (snapshot) => {
        const bookingsList = snapshot.docs.map((doc) => doc.data());
        return bookingsList;
      }
    );
    setBookings(bookingList);
    setLoading(false);
  };

  return (
    <Container fluid>
      <Col>
        <Row>
          <Col>
            <h2>Bookings</h2>
          </Col>
          <Col md="auto">
            <Button
              variant="primary"
              disabled={loading}
              onClick={!loading && loadBookings}
            >
              {loading ? "Loading..." : "Refresh"}
            </Button>
          </Col>
        </Row>
        <Table hover>
          <thead>
            <tr>
              <th>Train No</th>
              <th>NIC</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Seat Count</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.userNic}>
                <td>{booking.trainId}</td>
                <td>{booking.userNic}</td>
                <td>{booking.userName}</td>
                <td>{booking.userEmail}</td>
                <td>{booking.userPhone}</td>
                <td>{booking.ticketCount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Container>
  );
};

export default Bookings;
