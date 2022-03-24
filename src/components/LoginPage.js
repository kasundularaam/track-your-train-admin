import React, { useState } from "react";

const LoginPage = (params) => {
  const adminEmail = "admin@tyt.com";
  const adminPassword = "123456";

  const [failed, setFailed] = useState(false);
  const [succeed, setSucceed] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === adminEmail && password === adminPassword) {
      setFailed(false);
      setSucceed(true);
      params.setLoggedIn(true);
    } else {
      setSucceed(false);
      setFailed(true);
      params.setLoggedIn(false);
    }
  };

  return (
    <div>
      <div className="text-center mt-4 mb-4">
        <h2>Track Your Train</h2>
      </div>
      <div className="card p-3 w-25 m-auto">
        <h2 className=" mb-4">Log In</h2>
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => login()}
          >
            Sign in
          </button>
        </form>
        {failed ? <FailedMessage /> : null}
        {succeed ? <SucceedMessage /> : null}
      </div>
    </div>
  );
};

const FailedMessage = () => {
  return (
    <div className="alert alert-danger mt-4">
      <strong>Failed!</strong> Wrong credentials!
    </div>
  );
};

const SucceedMessage = () => {
  return (
    <div className="alert alert-success mt-4">
      <strong>Succeed!</strong> Login Succeed!
    </div>
  );
};

export default LoginPage;
