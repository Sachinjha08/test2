import { useState, useEffect } from "react";
import { createUser, updateUser, getUserById } from "../api/userApi";

const UserForm = ({ selectedUserId, refreshUsers, setSelectedUserId }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "Male",
    phone: "",
    status: "Active",
  });

  useEffect(() => {
    if (selectedUserId) {
      getUserById(selectedUserId).then((res) => setUser(res.data));
    }
  }, [selectedUserId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUserId) {
      await updateUser(selectedUserId, user);
    } else {
      await createUser(user);
    }
    refreshUsers();
    setUser({
      name: "",
      email: "",
      gender: "Male",
      phone: "",
      status: "Active",
    });
    setSelectedUserId(null);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <select
        value={user.gender}
        onChange={(e) => setUser({ ...user, gender: e.target.value })}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        placeholder="Phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        required
      />
      <select
        value={user.status}
        onChange={(e) => setUser({ ...user, status: e.target.value })}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit">
        {selectedUserId ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
