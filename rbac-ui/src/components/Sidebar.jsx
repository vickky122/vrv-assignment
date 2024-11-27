import React from 'react'

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white w-1/4 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">RBAC System</h2>
      <ul>
        <li>
          <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/users" className="block py-2 px-4 rounded hover:bg-gray-700">
            Users
          </a>
        </li>
        <li>
          <a href="/roles" className="block py-2 px-4 rounded hover:bg-gray-700">
            Roles
          </a>
        </li>
        <li>
          <a href="/permissions" className="block py-2 px-4 rounded hover:bg-gray-700">
            Permissions
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
