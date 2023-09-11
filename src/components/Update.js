import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userAction";

const Update = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  let id = params._id;
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    const singleUser = data.find((item) => item._id === id);
    if (id) {
      setName(singleUser.name);
      setEmail(singleUser.email);
      setPhone(singleUser.phone);
      setAddress(singleUser.address);
    }
  }, []);

  function Back() {
    navigate("/");
  }

  const userData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
  };
  const update = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, userData));
    navigate("/");
  };

  
  return (
    <div className="user" id="header">
      <h2>Update User</h2>
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
        pattern="[0-9]"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="inputbox"
        type="text"
        pattern="[a-zA-Z0-9]+$"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={update} className="buttonbox" type="button">
        Update
      </button>
      <button onClick={Back} className="buttonbox" type="button">
        Back
      </button>
    </div>
  );
};

export default Update;
