import React, { useEffect, useState } from "react";
import "../css/Sign.scss";
const SignForm = () => {
  const [userRegistration, setuserRegistration] = useState({
    username: JSON.parse(localStorage.userRegistration).username,
    email: JSON.parse(localStorage.userRegistration).email,
    phone: JSON.parse(localStorage.userRegistration).phone,
    password: JSON.parse(localStorage.userRegistration).password,
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };

    setRecords([...records, newRecords]);

    setuserRegistration({ username: "", email: "", phone: "", password: "" });
  };

  window.onbeforeunload = (e) => {
    localStorage.setItem("userRegistration", JSON.stringify(userRegistration));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center form-head">User Registration</h1>
        <div className="row">
          <div className="col-6 mx-auto text-center py-5 form-container my-4 d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="pb-3">
                <label htmlFor="username" className="d-block">
                  Username
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  id="username"
                  value={userRegistration.username}
                  onChange={handleInput}
                />
              </div>
              <div className="pb-3">
                <label htmlFor="email" className="d-block">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  value={userRegistration.email}
                  onChange={handleInput}
                />
              </div>
              <div className="pb-3">
                <label htmlFor="phone" className="d-block">
                  Phone
                </label>
                <input
                  type="number"
                  autoComplete="off"
                  name="phone"
                  id="phone"
                  value={userRegistration.phone}
                  onChange={handleInput}
                />
              </div>
              <div className="pb-3">
                <label htmlFor="password" className="d-block">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  value={userRegistration.password}
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="mt-3 d-inline btn-submit">
                Sign Up
              </button>
              <button
                className="mt-3 d-inline btn-clear"
                onClick={() => {
                  setuserRegistration({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                  });
                  setRecords([]);
                }}
              >
                Clear
              </button>
            </form>
          </div>
          <div>
            {records.map(({ username, email, phone }) => {
              return (
                <div
                  className="showData rounded mt-4"
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    background: "purple",
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  <p className="pe-4  m-0">{username}</p>
                  <p className="pe-4 m-0">{email}</p>
                  <p className="pe-4  m-0">{phone}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default SignForm;
