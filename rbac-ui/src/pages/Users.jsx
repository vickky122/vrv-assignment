import React from "react";

const Users = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
        <form className="mb-6">
          <input
            type="text"
            placeholder="Enter user name"
            className="border p-2 mr-2 rounded"
          />
          <select className="border p-2 mr-2 rounded">
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add User
          </button>
        </form>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">User Name</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4">John Doe</td>
              <td className="py-3 px-4">Admin</td>
              <td className="py-3 px-4">
                <button className="bg-yellow-500 text-white p-2 rounded">Edit</button>
                <button className="bg-red-500 text-white p-2 rounded ml-2">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4">Jane Smith</td>
              <td className="py-3 px-4">Editor</td>
              <td className="py-3 px-4">
                <button className="bg-yellow-500 text-white p-2 rounded">Edit</button>
                <button className="bg-red-500 text-white p-2 rounded ml-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
