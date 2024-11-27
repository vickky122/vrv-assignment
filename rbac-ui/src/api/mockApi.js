const mockApi = {
  getUsers: () => Promise.resolve([{ id: 1, name: "John Doe", role: "Admin", status: "Active" }]),
  getRoles: () => Promise.resolve([{ id: 1, name: "Admin" }]),
  getPermissions: () => Promise.resolve(["Read", "Write", "Delete"]),
  addUser: (user) => Promise.resolve({ success: true, user }),
  addRole: (role) => Promise.resolve({ success: true, role }),
  assignPermission: (role, permission) => Promise.resolve({ success: true, role, permission }),
};

export default mockApi;
