import axios from "axios";
import React, { useRef } from "react";

export default function AddUser() {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const addressRef = useRef("");

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      address: addressRef.current.value,
    };

    axios.post("http://localhost:8080/addUser", newUser).then((res) => {
      console.log(res);
      e.target.reset();
    });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form className="row g-3" onSubmit={handleAddUser}>
          {/* first & last name fields */}

          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              ref={firstNameRef}
              type="text"
              className="form-control"
              id="firstName"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              ref={lastNameRef}
              type="text"
              className="form-control"
              id="lastName"
              required
            />
          </div>

          {/* first & last name field ends here  */}

          {/* email and password fields start from here  */}

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control"
              id="email"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>

          {/* email and password fields ends here  */}

          {/* address field starts from here  */}

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              ref={addressRef}
              type="text"
              className="form-control"
              id="address"
              required
            />
          </div>

          {/* address field sends here  */}

          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary py-2 px-4 fs-5">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
