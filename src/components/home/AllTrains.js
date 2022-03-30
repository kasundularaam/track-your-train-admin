import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../App";

const AllTrains = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore(app);

  useEffect(() => {
    const loadTrains = async () => {
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
      setTrains(trainList);
      setLoading(false);
    };
    loadTrains();
  }, [trains, loading]);

  // const refresh = () => {
  //   const loadTrains = async () => {
  //     const trainList = await getDocs(collection(db, "users")).then(
  //       (snapshot) => {
  //         const userList = snapshot.docs.map((doc) => doc.data());
  //         let filteredList = [];
  //         userList.forEach((user) => {
  //           if (user.userType === "driver") {
  //             filteredList.push(user);
  //           }
  //         });
  //         return filteredList;
  //       }
  //     );
  //     setTrains(trainList);
  //     setLoading(false);
  //   };
  //   loadTrains();
  // };

  return (
    <div>
      <div className="row">
        <h2 className="col">All Trains</h2>
        {loading ? (
          <div className="spinner-grow" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          <button className="btn btn-primary col-md-auto">Refresh</button>
        )}
        <div className="col-1"></div>
      </div>
      <table className="table mt-4">
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
      </table>
    </div>
  );
};

export default AllTrains;
