import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { app } from "../../App";

const AddTrains = () => {
  const [trainName, setTrainName] = useState("");
  const [trainId, setTrainId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [failed, setFailed] = useState(false);
  const [succeed, setSucceed] = useState(false);

  const auth = getAuth();

  const db = getFirestore(app);

  const addTrain = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        addDoc(collection(db, "users"), {
          trainId: trainId,
          userEmail: email,
          userId: uid,
          userName: trainName,
          userType: "driver",
        })
          .then((data) => {
            setFailed(false);
            setSucceed(true);
          })
          .catch((error) => {
            console.log(error);
            setSucceed(false);
            setFailed(true);
          });
      })
      .catch((error) => {
        console.log(error);
        setSucceed(false);
        setFailed(true);
      });
  };
  return (
    <div>
      <h2 className="mb-4">Add Trains</h2>
      <div className="w-25">
        <form>
          <div className="form-outline mb-4 ">
            <label className="form-label" htmlFor="form2Example1">
              Train Name
            </label>
            <input
              type="name"
              id="inputname"
              className="form-control"
              onChange={(e) => setTrainName(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4 ">
            <label className="form-label" htmlFor="form2Example1">
              Train Id
            </label>
            <input
              type="number"
              id="inputid"
              className="form-control"
              onChange={(e) => setTrainId(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4 ">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="inputemail"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="inputpassword"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addTrain()}
          >
            Add Train
          </button>
        </form>
      </div>
      {failed ? <FailedMessage /> : null}
      {succeed ? <SucceedMessage /> : null}
    </div>
  );
};

const FailedMessage = () => {
  return (
    <div className="alert alert-danger mt-4">
      <strong>Failed!</strong> Some error occurred!
    </div>
  );
};

const SucceedMessage = () => {
  return (
    <div className="alert alert-success mt-4">
      <strong>Succeed!</strong> Train added!
    </div>
  );
};

export default AddTrains;
