import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (newUser.trim()) {
      setUsers([...users, { id: Date.now(), name: newUser }]);
      setNewUser("");
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter new user"
            className="border p-2 rounded"
          />
          <button
            onClick={addUser}
            className="bg-blue-500 text-white p-2 rounded ml-2"
          >
            Add User
          </button>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex justify-between py-2">
              <span>{user.name}</span>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
