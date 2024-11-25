import React from 'react';


export default function LoginForm() {
    const[user,setUser]=React.useState({
        username:'',
        password:''
    });
  
  const handleOnChange=(event)=>{
    const{name,value}=event.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit=async (event)=>{
    event.preventDefault();
    try{
        const response=await fetch('http://127.0.0.1:5000/login',{
            method:'POST',
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(user)
        });
        if(response.ok){
            const data=await response.json();
            alert(`Response from backend: ${data.message}`);
        }
        else
        {
            console.error("Error submitting the form");
        }
    }catch(error){
        console.log("Error",error);
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
                Enter the user name: 
            <input
            type='text'
            name='username'
            value={user.username||''}
            onChange={handleOnChange}
            placeholder='Enter the User Name'
            ></input>
            </label>
            <br></br>
            <label>
                Enter the password
            <input
            type='password'
            name='password'
            value={user.password||''}
            onChange={handleOnChange}
            placeholder='Enter the Password'
            ></input>
            </label>
            <br></br>
            <input 
            type='submit'
            value='Submit'></input>
        </form>
    </div>
  )
}
