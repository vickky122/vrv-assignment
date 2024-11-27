import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <nav className="w-1/4 bg-gray-800 text-white p-6">
          <h2 className="text-2xl font-bold mb-8 text-center">RBAC System</h2>
          <ul>
            <li className="mb-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-blue-400 font-bold" : "text-white")}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "text-blue-400 font-bold" : "text-white")}
              >
                Users
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/roles"
                className={({ isActive }) => (isActive ? "text-blue-400 font-bold" : "text-white")}
              >
                Roles
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/permissions"
                className={({ isActive }) => (isActive ? "text-blue-400 font-bold" : "text-white")}
              >
                Permissions
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="w-3/4 bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permissions" element={<Permissions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
