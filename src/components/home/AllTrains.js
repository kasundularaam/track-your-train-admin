import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../App";

const AllTrains = () => {
  const db = getFirestore(app);

  const [trains, setTrains] = useState([]);

  const trainsCol = collection(db, "users");

  const loadTrains = async () => {
    let trainList = [];
    const snapshot = await getDocs(trainsCol);
    const userList = snapshot.docs.map((doc) => doc.data());
    userList.forEach((user) => {
      if (user.userType === "driver") {
        trainList.push(user);
      }
    });
    setTrains(trainList);
  };

  useEffect(() => {
    loadTrains();
  });

  return (
    <div>
      <h2 className="mb-4">All Trains</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.userId}>
              <td>{train.userEmail}</td>
              <td>{train.userId}</td>
              <td>{train.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrains;
