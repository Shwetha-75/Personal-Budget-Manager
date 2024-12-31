import React from 'react'
import axios from "axios"
import Success from './Success';
import Failed from './Failed';
import PasswordStatus from "./PasswordStatus";
export default function Main() {
    const [userData,setUserData]=React.useState({
        first_name:'',
        last_name:'',
        phone:0,
        gender:'',
        password:'',
        confirm_password:'',
        mail:'',  
    });
    const [userStatus,setUserStatus]=React.useState(false);
    const handleOnChange=(event)=>{
        const {name,value}=event.target;
        setUserData(prev=>({
            ...prev,
            [name]:value
        }))
     
    }

   const [userPwdStatus,setUserPwdStatus]=React.useState({status:false,message:''})

    const handleOnSubmit=async (event)=>{
        event.preventDefault();
        const pwd_check=password_criteria_check(userData.password,userData.confirm_password)
        if(!pwd_check[0]){
        // validate the password criteria
            setUserPwdStatus({
                status:true,
                message:pwd_check[1]
            })
        }
        else
        {
            setUserPwdStatus({
                status:false,
                message:''
            })
            try{
                
                console.log(userData);
                const response=await axios.post("http://127.0.0.1:5000/registration",{userData},{ 
                    
                    headers: {
                        'Content-Type': 'application/json'
                        
                    }})
                    console.log(response.data)
                    setUserStatus(response.data);
                    
                }catch(error){
                    console.log("Error while registration-"+error);
                }
            }
        
    };
   return(
      <div>
           <form onSubmit={handleOnSubmit}>
                <label>
                Enter Your First Name: 
                <input 
                type='text' 
                name='first_name' 
                value={userData.first_name}
                onChange={handleOnChange}
                required 
                />
                </label>
                <br></br>
                <label>
                Enter Your Last Name: 
                <input 
                type='text' 
                name='last_name' 
                value={userData.last_name}
                onChange={handleOnChange}
                required 
                />
                </label>
                <br></br>
                <label>
                Enter Your Mail: 
                <input 
                type='mail' 
                name='mail' 
                value={userData.mail} 
                onChange={handleOnChange}
                required
                />
                </label>
                <br></br>
                <label>
                Enter Your Contact Number:
                <input 
                type='number' 
                name='phone' 
                value={userData.phone}
                onChange={handleOnChange}
                required 
                />
                </label>
                <br></br>
                <label>
                Select your Gender: 
                <label htmlFor='female'>
                        Female
                        <input
                        id="female"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleOnChange}
                        required
                        />
                    </label>
                    <label htmlFor='male'>
                        Male
                        <input
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleOnChange}
                        required
                        />
                    </label>
                    <label htmlFor='others'>
                        Others
                        <input
                        type="radio"
                        id='others'
                        name='gender'
                        value='others'
                        onChange={handleOnChange}
                        required
                        />
                    </label>
                    </label>
                    
                    <br></br>
                    <label>Enter the password: 
                    <input
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={handleOnChange}
                    required
                    />
                    </label>
                    <br></br>
                    <label>Enter the confirm password: 
                    <input
                    type='password'
                    name='confirm_password'
                    value={userData.confirm_password}
                    onChange={handleOnChange}
                    required />
                    </label>
                    <br></br>
                    <input
                    type='submit'
                    value='Submit'
                    />
                   </form>

       {userStatus==='ok' && <Success/>}
       {userStatus==='no' && <Failed/>}

       {userPwdStatus.status && 
       <PasswordStatus 
       message={userPwdStatus.message}
       />}
    </div>
  )
};

function password_criteria_check(password,conf_password){
    if(password.length<8 )return [false,"its too weak"];
    if(password.length>15)return [false,"password length is exceeding!"];
    if(password.length!==conf_password.length) return [false,"password does not match !"];
    if(password!==conf_password) return false;
    // check the criteria
    let result_1=password.match('[a-z]');
    let result_2=password.match('[A-Z]');
    let result_3=password.match(/\d/g);
    let result_4=password.match(/[~!@#$%^&*]/g);
    return [result_1!==null && result_2!==null && result_3!==null && result_4!==null,"please check the password criteria !"];
}