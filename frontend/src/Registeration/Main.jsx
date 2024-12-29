import React from 'react'
import axios from "axios"

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

    const handleOnChange=(event)=>{
        const {name,value}=event.target;
        setUserData(prev=>({
            ...prev,
            [name]:value
        }))
     
    }

    const handleOnSubmit=async (event)=>{
        event.preventDefault();

                                   

        try{
        console.log(userData);

            const response=await axios.post("http://127.0.0.1:5000/registration",{userData},{ 
                headers: {
                    'Content-Type': 'application/json'
                    
                }})
                console.log(response.data)
               
        }catch(error){
            console.log("Error while registration-"+error);
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

        {<p></p>}
    </div>
  )
}
