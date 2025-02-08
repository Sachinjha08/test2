import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/userApi";

const UserList = ({ setSelectedUserId, refreshUsers }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getUsers(filter).then((res) => setUsers(res.data));
  }, [filter, refreshUsers]);

  return (
    <div className="listContainer">
      <h2>User List</h2>
      <div className="filter-list">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="list">
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email} - {user.gender} - {user.phone} -{" "}
              {user.status}
              <button onClick={() => setSelectedUserId(user._id)}>Edit</button>
              <button onClick={() => deleteUser(user._id).then(refreshUsers)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
