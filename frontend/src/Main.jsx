import React from 'react'
import LoginForm from './HomePage/LoginForm';
import Register from "./Registeration/Main";
export default function Main() {
  const [login,setLogin]=React.useState(true);
  const [register,setRegister]=React.useState(false);

  const handleOnClick=(value)=>{
    if(value==='login'){
      setLogin(true);
      setRegister('register')
    }
    else{
      setLogin(false);
      setRegister(true);
    }
  }

  return (
    <div className='bg-black-900 bg:opacity-50 w-[30%] ml-[60%] h-[75vh] mt-[5%] rounded-[10px] border border-gray-900'>
      
  {login && <LoginForm
    onClick={handleOnClick}
  />}
    {register && <Register/>}
    </div>
  )
}
