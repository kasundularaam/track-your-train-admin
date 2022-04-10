import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../App";

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
    <div>
      <div className="row">
        <h2 className="col">All Trains</h2>
        <div className="col-md-auto">
          {loading ? (
            <div className="spinner-grow" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <button className="btn btn-primary " onClick={() => loadBookings()}>
              Refresh
            </button>
          )}
        </div>

        <div className="col-1"></div>
      </div>
      <table className="table mt-4">
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
      </table>
    </div>
  );
};

export default Bookings;
