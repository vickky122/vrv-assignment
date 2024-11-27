import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [selectedRole, setSelectedRole] = useState("Viewer");

  const addUser = () => {
    if (newUser.trim()) {
      setUsers([
        ...users,
        { id: Date.now(), name: newUser, role: selectedRole, status: "Active" },
      ]);
      setNewUser("");
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
          : user
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter user name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="border p-2 mr-2"
        />
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button onClick={addUser} className="bg-blue-500 text-white p-2">
          Add User
        </button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2 flex justify-between items-center">
            {user.name} - {user.role} - {user.status}
            <div>
              <button
                onClick={() => toggleStatus(user.id)}
                className="bg-yellow-500 text-white p-1 mr-2"
              >
                Toggle Status
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white p-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
