import React from 'react';
import LoginSuccess from '../Component/LoginSuccess';
import LoginFail from "../Component/LoginFail";
import { UserStatus } from '../App';
import UserNotExist from './UserNotExist';
import axios  from 'axios';
import "./login.css"
export default function LoginForm() {

    const {userStatus,setUserStatus}=React.useContext(UserStatus);
    const[user,setUser]=React.useState({
        mail:'',
        password:''
    });
 
  const handleOnChange=(event)=>{
    const{name,value}=event.target;
    setUser({...user,[name]:value});
  };
 
  const handleSubmit=async (event)=>{
    event.preventDefault();
    try{
        const response=await axios.post("http://127.0.0.1:5000/login",{user},{
            Headers:{
                'Content-Type': 'application/json'

            }
        })
        console.log(response.data);
        setUserStatus(response.data)

    }catch(error){
        console.log(error);
    }
  }
  return (
    <div>
          <h1 className='heading--login text-center'>LOGIN</h1>
        <form onSubmit={handleSubmit} className='w-100 justify-center mt-20'>
        <label>
            Enter the user name: 
            <input
            className='input--tag px-3 py-3 w-[90%] ml-[5%] rounded-[10px]'
            type='mail'
            name='mail'
            value={user.mail||''}
            onChange={handleOnChange}
            placeholder='Enter the User Name'
            > 
            </input>
            </label>

            <br></br>

            <label>
                Enter the password
            <input
            className='input--tag px-3 py-3 w-[90%] ml-[5%] rounded-[10px]'
            type='password'
            name='password'
            value={user.password||''}
            onChange={handleOnChange}
            placeholder='Enter the Password'
            ></input>
            </label>
            <br></br>

            <input 
            className='btn w-[90%] mt-[3%] px-3 py-3 ml-[5%]'
            type='submit'
            value='Submit'></input>
            
        </form>
        {userStatus==='ok' && 
        <LoginSuccess/>
       }

       {userStatus==='no' &&
       <LoginFail/>}

       {userStatus==='not' && 
       <UserNotExist/>}
    </div>
  )
}
