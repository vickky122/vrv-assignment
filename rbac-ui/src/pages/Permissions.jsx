import React from "react";

const Permissions = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Permissions</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Manage Permissions</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <input type="checkbox" id="read" className="mr-2" />
              <label htmlFor="read">Read</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="write" className="mr-2" />
              <label htmlFor="write">Write</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="delete" className="mr-2" />
              <label htmlFor="delete">Delete</label>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-6">
            Save Permissions
          </button>
        </form>
      </div>
    </div>
  );
};

export default Permissions;
