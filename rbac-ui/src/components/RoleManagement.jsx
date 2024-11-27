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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Role Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter role name"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addRole} className="bg-green-500 text-white p-2">
          Add Role
        </button>
      </div>
      <ul>
        {roles.map((role) => (
          <li key={role.id} className="mb-2 flex justify-between items-center">
            {role.name}
            <button
              onClick={() => deleteRole(role.id)}
              className="bg-red-500 text-white p-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
