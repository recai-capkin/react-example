import React, { createContext, useState } from 'react'

const UserContext = createContext();

 const UserProvider  = ({ children }) => {

    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      ]);

  return (
     <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContext