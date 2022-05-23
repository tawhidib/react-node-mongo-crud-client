import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllUser")
      .then((result) => setAllUsers(result.data));
  }, [flag]);

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:8080/deleteUser/${id}`).then((result) => {
      if (result.data.deletedCount === 1) {
        setFlag((prev) => !prev);
      }
    });
  };
  return (
    <div>
      <ul>
        {allUsers.map((user, index) => (
          <li className="my-3 fs-5" key={user._id}>
            {index + 1} - {user.name}
            <Link className="mx-5" to={`/updateUser/${user._id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            <button
              className=" btn btn-danger"
              onClick={() => handleDeleteUser(user._id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
