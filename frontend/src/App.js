import React from 'react';
import Main from "./Main";
import Registration from "./Registeration/Main";
import Login from "./HomePage/LoginForm";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

export const UserStatus=React.createContext(null);
export const UserRegistrationStatus=React.createContext(null);

function App() {
  const [userStatus,setUserStatus]=React.useState(false);
  const [userRegistrationStatus,SetUserRegistrationStatus]=React.useState(false);
  console.log(userStatus);
  return (
    <UserStatus.Provider value={{userStatus,setUserStatus,userRegistrationStatus,SetUserRegistrationStatus}} >
   <Router>
    <Main/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}> </Route>
      </Routes>
    </Router>
    </UserStatus.Provider>
  );
}

export default App;
