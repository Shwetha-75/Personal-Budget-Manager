import React from 'react';
import LoginForm from './LoginForm';
import axios from "axios";
export default function Home() {

  const [data,setData]=React.useState("");

  React.useEffect(()=>{
      axios.get("http://127.0.0.1:5000/")
      .then(response=>{

        setData(response.data.message);
        console.log(response.data.message);
      })
      .catch(error=>{
        console.error("Error while fetching the data",error)
      })
  })

  return (
    <div>
        <h1>Welcome to budget manager </h1>
       <p>Message : {data}</p>
       <LoginForm/>
    </div>
  )
}
