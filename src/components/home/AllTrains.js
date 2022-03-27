import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../App";

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  const db = getFirestore(app);

  useEffect(() => {
    getDocs(collection(db, "users")).then((snapshot) => {
      const userList = snapshot.docs.map((doc) => doc.data());
      let trainList = [];
      userList.forEach((user) => {
        if (user.userType === "driver") {
          trainList.push(user);
        }
      });
      setTrains(trainList);
    });
  }, [trains]);

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
