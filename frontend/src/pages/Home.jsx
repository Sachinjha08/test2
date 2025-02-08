import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const Home = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [refreshUsers, setRefreshUsers] = useState(false);

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        selectedUserId={selectedUserId}
        refreshUsers={() => setRefreshUsers(!refreshUsers)}
        setSelectedUserId={setSelectedUserId}
      />
      <UserList
        setSelectedUserId={setSelectedUserId}
        refreshUsers={() => setRefreshUsers(!refreshUsers)}
      />
    </div>
  );
};

export default Home;
