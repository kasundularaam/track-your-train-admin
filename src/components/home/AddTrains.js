import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";
import { app } from "../../App";

const AddTrains = () => {
  const [trainName, setTrainName] = useState("");
  const [trainId, setTrainId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [failed, setFailed] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const db = getFirestore(app);

  const clearForm = () => {
    setTrainName("");
    setTrainId("");
    setEmail("");
    setPassword("");
  };

  const showFailedMessage = () => {
    setSucceed(false);
    setFailed(true);
    setTimeout(() => {
      setSucceed(false);
      setFailed(false);
    }, 2000);
  };

  const showSucceedMessage = () => {
    setFailed(false);
    setSucceed(true);
    setTimeout(() => {
      setSucceed(false);
      setFailed(false);
    }, 2000);
  };

  const addTrain = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        setDoc(doc(db, "users", uid), {
          trainId: trainId,
          userEmail: email,
          userId: uid,
          userName: trainName,
          userType: "driver",
        })
          .then((data) => {
            setLoading(false);
            showSucceedMessage();
            clearForm();
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
            showFailedMessage();
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        showFailedMessage();
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
              value={trainName}
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
              value={trainId}
            />
          </div>
          <div className="form-outline mb-4 ">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              // type="email"
              id="field3"
              autocomplete="do-not-autofill"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              // type="password"
              autocomplete="do-not-autofill"
              id="field4"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {loading ? (
            <div className="spinner-grow" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addTrain()}
            >
              Add Train
            </button>
          )}
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
      <strong>Failed!</strong> An error occurred!
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
