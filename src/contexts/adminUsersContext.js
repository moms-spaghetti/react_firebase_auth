import React, { useState } from "react";
import adminusers from "../data/adminusers";

export const AdminUsersContext = React.createContext();

export function AdminUsersProvider({ children }) {
  const [users, setUsers] = useState(adminusers);
  function addAdminUser(name, email) {
    setUsers([...users, { name: name, email: email }]);
  }
  return (
    <AdminUsersContext.Provider value={[users, addAdminUser]}>
      {children}
    </AdminUsersContext.Provider>
  );
}
