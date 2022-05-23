import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((result) => setUser(result.data));
  }, [id]);

  const handleNameChange = (e) => {
    const updatedUser = { ...user, name: e.target.value };
    setUser(updatedUser);
  };

  const hangleAddressChange = (address) => {
    const updatedUser = {
      ...user,
      address,
    };
    setUser(updatedUser);
  };

  const hangleEmailChange = (email) => {
    const updatedUser = { ...user, email };
    setUser(updatedUser);
  };

  const hangleUpdateUser = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/updateUser/${id}`, user)
      .then((result) => console.log(result));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form onSubmit={hangleUpdateUser} className="row g-3">
          {/* first & last name fields */}

          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={user.name || ""}
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => handleNameChange(e)}
            />
          </div>

          {/* first & last name field ends here  */}

          {/* email and password fields start from here  */}

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={user.email || ""}
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => hangleEmailChange(e.target.value)}
            />
          </div>

          {/* email and password fields ends here  */}

          {/* address field starts from here  */}

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              value={user.address || ""}
              type="text"
              className="form-control"
              id="address"
              onChange={(e) => hangleAddressChange(e.target.value)}
            />
          </div>

          {/* address field sends here  */}

          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary py-2 px-4 fs-5">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
