import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/addUser">Add User</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/allUsers">All Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/allUsers" element={<AllUsers />}></Route>
          <Route path="/updateUser/:id" element={<UpdateUser />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
