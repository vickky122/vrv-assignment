import React, { useState } from "react";

const PermissionsManagement = () => {
  const [permissions, setPermissions] = useState(["Read", "Write", "Delete"]);
  const [rolePermissions, setRolePermissions] = useState({});
  const [selectedRole, setSelectedRole] = useState("");

  const togglePermission = (role, permission) => {
    setRolePermissions((prev) => ({
      ...prev,
      [role]: prev[role]?.includes(permission)
        ? prev[role].filter((perm) => perm !== permission)
        : [...(prev[role] || []), permission],
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Permissions Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter role name"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={() => setRolePermissions({ ...rolePermissions, [selectedRole]: [] })}
          className="bg-blue-500 text-white p-2"
        >
          Select Role
        </button>
      </div>
      {selectedRole && (
        <div>
          <h3 className="text-lg font-bold">Permissions for {selectedRole}</h3>
          <ul>
            {permissions.map((permission) => (
              <li key={permission} className="mb-2">
                <label>
                  <input
                    type="checkbox"
                    checked={rolePermissions[selectedRole]?.includes(permission)}
                    onChange={() => togglePermission(selectedRole, permission)}
                    className="mr-2"
                  />
                  {permission}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PermissionsManagement;
