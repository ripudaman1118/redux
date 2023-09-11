import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/userAction";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  function Back() {
    navigate("/");
  }
  const data = useSelector((state) => state.data.data);

  const addUser = (e) => {
    e.preventDefault();
    dispatch(createUser({ name, email, phone, address }));
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    navigate("/");
  };

  return (
    <div className="user" id="header">
      <h2>Add New User</h2>

      <input
        className="inputbox"
        type="text"
        pattern="^[a-zA-Z0-9]"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="inputbox"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="inputbox"
        type="text"
        pattern="^[0-9]"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="inputbox"
        type="text"
        pattern="^[a-zA-Z0-9]"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={addUser} className="buttonbox" type="button">
        Add User
      </button>

      <button onClick={Back} className="buttonbox" type="button">
        Back
      </button>
    </div>
  );
};

export default AddUser;
