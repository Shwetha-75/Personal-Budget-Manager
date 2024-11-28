import React from 'react'

export default function Main() {
    const [userData,setUserData]=React.useState({
        first_name:'',
        last_name:'',
        password:'',
        confirm_password:'',
        mail:'',
        phone:0,
        gender:'',

    })
    const handleOnChange=(event)=>{
        const {name,value}=event.target;
        setUserData(prev=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <div>
        <form>
            <label>
                Enter Your First Name: 
                <input 
                type='text' 
                name='first_name' 
                value={userData.first_name}
                onChange={handleOnChange} 
                />
            </label>

            <label>
                Enter Your Last Name: 
                <input 
                type='text' 
                name='last_name' 
                value={userData.last_name}
                onChange={handleOnChange} 
                />
            </label>

            <label>
                Enter Your Mail: 
                <input 
                type='mail' 
                name='mail' 
                value={userData.mail} 
                />
            </label>

            <label>
                Enter Your Contact Number:
                <input 
                type='number' 
                name='phone' 
                value={userData.phone}
                onChange={handleOnChange} 
                />
            </label>

            <label>
                Select your Gender: 
                <form>
                    <label for='female'>
                        Female
                        <input
                        id="female"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleOnChange}

                        />
                    </label>
                    <label for='male'>
                        Male
                        <input
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleOnChange}
                 
                        />
                    </label>
                    <label for='others'>
                        <input
                        type="radio"
                        id='others'
                        name='gender'
                        value='others'
                        onChange={handleOnChange}

                        />
                    </label>
                </form>
            </label>
            

            <label>Enter the password: 
                <input
                type='password'
                name='password'
                value={userData.password}
                onChange={handleOnChange}
                />
            </label>

            <label>Enter the confirm password: 
                <input
                type='password'
                name='confirm_password'
                value={userData.confirm_password}
                onChange={handleOnChange}
                />
            </label>

            <input
            type='submit'
            value='Submit'
            />
        </form>
    </div>
  )
}
