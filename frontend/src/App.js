import React from 'react';
import HomePage from "./HomePage/home";
import Registration from "./Registeration/Main";
export const UserStatus=React.createContext(null);

function App() {
  const [userStatus,setUserStatus]=React.useState(false);
  console.log(userStatus)
  return (
    <UserStatus.Provider value={{userStatus,setUserStatus}} >
    <HomePage />
    <Registration/>
    </UserStatus.Provider>
  );
}

export default App;
