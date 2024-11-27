import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  const addRole = () => {
    if (newRole.trim()) {
      setRoles([...roles, { id: Date.now(), name: newRole }]);
      setNewRole("");
    }
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Role Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Manage Roles</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="Enter new role"
            className="border p-2 rounded"
          />
          <button
            onClick={addRole}
            className="bg-green-500 text-white p-2 rounded ml-2"
          >
            Add Role
          </button>
        </div>
        <ul>
          {roles.map((role) => (
            <li key={role.id} className="flex justify-between py-2">
              <span>{role.name}</span>
              <button
                onClick={() => deleteRole(role.id)}
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

export default RoleManagement;
