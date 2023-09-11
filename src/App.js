import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from "./login";
import User from "./pages/users/user";
import "./Style/user.css";
import AddUser from "./components/Add_User"
import UpdateUser from"./components/Update"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/updateUser/:_id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
