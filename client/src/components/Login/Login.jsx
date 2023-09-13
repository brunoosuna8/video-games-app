import React, { useState } from "react";
import { validateForm } from "./validateForm";
import "./login.css";
const Login = () => {
  let [isRegistered, setIsRegistered] = useState(true);
  let [error, setError] = useState({
    email: false,
    email2: false,
    password: false,
    password2: false,
    age: false,
    name: false,
    lastName: false,
    igualityEmail: false,
    igualityPw: false,
  });
  let [data, setData] = useState({
    email: "",
    email2: "",
    password: "",
    password2: "",
    age: 0,
    name: "",
    lastName: "",
  });
  const handleChange = (e) => {
    console.log(e);
    e.preventDefault();
    let value = e.target.value;
    setData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));

    console.log(data);

    setError(validateForm(data));
    console.log(error);
  };

  return (
    <div className="login-container">
      <h1>Please {isRegistered ? "Login" : "Register"}</h1>
      <form>
        <div className="input-container">
          <label>Enter Email</label>
          <input
            type="email"
            required
            placeholder="example@gmail.com..."
            name="email"
            value={data.email}
            className={error.email ? "correct" : "danger"}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="input-container">
          <label>Enter Password</label>
          <input
            type="password"
            required
            placeholder="***"
            name="password"
            value={data.password}
            className={error.password ? "correct" : "danger"}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {isRegistered ? null : (
          <div className="register-inputs">
            <div className="input-container">
              <label>Enter Email Again</label>
              <input
                type="email"
                required
                placeholder="example@gmail.com..."
                className={error.email2 ? "correct" : "danger"}
                name="email2"
                value={data.email2}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="input-container">
              <label>Enter Password Again</label>
              <input
                type="password"
                required
                placeholder="***"
                name="password2"
                value={data.password2}
                className={error.password2 ? "correct" : "danger"}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="input-container">
              <label>Enter Age</label>
              <input
                type="number"
                required
                placeholder="24"
                name="age"
                value={data.age}
                className={error.age ? "correct" : "danger"}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="input-container">
              <label>Enter Name</label>
              <input
                type="text"
                required
                placeholder="name..."
                name="name"
                value={data.name}
                className={error.name ? "correct" : "danger"}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="input-container">
              <label>Enter Last Name</label>
              <input
                type="text"
                required
                placeholder="Last Name..."
                name="lastName"
                value={data.lastName}
                className={error.lastName ? "correct" : "danger"}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
        )}

        <button className="submit" type="submit">
          {isRegistered ? "Login" : "Register"}
        </button>
      </form>
      <button className="submit" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "Change to Register" : "Change to Login"}
      </button>
    </div>
  );
};

export default Login;
