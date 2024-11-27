import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <nav className="w-1/4 bg-gray-800 text-white min-h-screen p-4">
          <h2 className="text-xl font-bold mb-4">RBAC System</h2>
          <ul>
            <li className="mb-2">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Users
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/roles"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Roles
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/permissions"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Permissions
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="w-3/4 p-4">
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
