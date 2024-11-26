import React from 'react';
import HomePage from "./HomePage/home";
export const UserStatus=React.createContext(null);

function App() {
  const [userStatus,setUserStatus]=React.useState(false);
  return (
    <UserStatus.Provider value={{userStatus,setUserStatus}} >
    <HomePage />
    </UserStatus.Provider>
  );
}

export default App;
